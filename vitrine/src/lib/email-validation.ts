import { resolveMx } from "dns/promises";

// Top disposable email domains (covers ~90% of fake/temp emails)
const DISPOSABLE_DOMAINS = new Set([
  "10minutemail.com",
  "10minutemail.net",
  "20minutemail.com",
  "anonbox.net",
  "burnermail.io",
  "deadaddress.com",
  "discard.email",
  "disposablemail.com",
  "dispostable.com",
  "dropmail.me",
  "easytrashmail.com",
  "emailondeck.com",
  "emltmp.com",
  "fakeinbox.com",
  "fakemail.net",
  "fakemailgenerator.com",
  "fakermail.com",
  "getairmail.com",
  "getnada.com",
  "guerrillamail.com",
  "guerrillamail.net",
  "guerrillamail.org",
  "harakirimail.com",
  "incognitomail.com",
  "inbox.lv",
  "inboxalias.com",
  "inboxbear.com",
  "instantmail.fr",
  "jetable.org",
  "jourrapide.com",
  "kasmail.com",
  "mailcatch.com",
  "maildrop.cc",
  "mailexpire.com",
  "mailforspam.com",
  "mailinator.com",
  "mailinator.net",
  "mailmoat.com",
  "mailnesia.com",
  "mailnull.com",
  "mintemail.com",
  "mohmal.com",
  "moakt.com",
  "monumentmail.com",
  "mytemp.email",
  "nada.email",
  "nada.ltd",
  "no-spam.ws",
  "nobulk.com",
  "nospam.ze.tc",
  "nowmymail.com",
  "objectmail.com",
  "owlpic.com",
  "pokemail.net",
  "proxymail.eu",
  "rcpt.at",
  "rmqkr.net",
  "sharklasers.com",
  "shitmail.me",
  "sneakemail.com",
  "spam4.me",
  "spamgourmet.com",
  "spamhereplease.com",
  "spamthisplease.com",
  "tempail.com",
  "tempemail.com",
  "tempinbox.com",
  "tempmail.com",
  "tempmail.de",
  "tempmail.eu",
  "tempmail.io",
  "tempmail.net",
  "tempmail.org",
  "tempmail.us",
  "tempmailaddress.com",
  "tempmail-mail.com",
  "temp-mail.io",
  "temp-mail.org",
  "tempr.email",
  "throwam.com",
  "throwawaymail.com",
  "tmail.ws",
  "tmpeml.info",
  "tmpmail.net",
  "tmpmail.org",
  "trashmail.com",
  "trashmail.de",
  "trashmail.net",
  "trbvm.com",
  "vermutlich.net",
  "wegwerfmail.de",
  "wegwerfmail.net",
  "wegwerfmail.org",
  "yopmail.com",
  "yopmail.fr",
  "yopmail.net",
  "zetmail.com",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type EmailValidationResult =
  | { valid: true }
  | { valid: false; reason: "format" | "disposable" | "mx" };

/**
 * Validates an email through 3 layers:
 * 1. Format (regex)
 * 2. Disposable domain blocklist
 * 3. DNS MX record lookup (proves the domain can receive email)
 */
export async function validateEmail(email: string): Promise<EmailValidationResult> {
  // 1. Format check
  if (!EMAIL_REGEX.test(email) || email.length > 254) {
    return { valid: false, reason: "format" };
  }

  const domain = email.split("@")[1].toLowerCase();

  // 2. Disposable domain check
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return { valid: false, reason: "disposable" };
  }

  // 3. MX record lookup (verify domain can receive emails)
  try {
    const records = await resolveMx(domain);
    if (!records || records.length === 0) {
      return { valid: false, reason: "mx" };
    }
  } catch {
    // DNS lookup failed — domain doesn't exist or has no MX
    return { valid: false, reason: "mx" };
  }

  return { valid: true };
}
