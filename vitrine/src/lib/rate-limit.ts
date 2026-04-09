const requests = new Map<string, { count: number; resetAt: number }>();

/**
 * Simple in-memory rate limiter for serverless environments.
 * Returns { allowed: true } if under limit, or { allowed: false, retryAfter } if blocked.
 */
export function rateLimit(
  key: string,
  { maxRequests = 5, windowMs = 60_000 } = {}
): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = requests.get(key);

  // Cleanup expired entries periodically
  if (requests.size > 10_000) {
    for (const [k, v] of requests) {
      if (now > v.resetAt) requests.delete(k);
    }
  }

  if (!entry || now > entry.resetAt) {
    requests.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (entry.count < maxRequests) {
    entry.count++;
    return { allowed: true };
  }

  return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
}
