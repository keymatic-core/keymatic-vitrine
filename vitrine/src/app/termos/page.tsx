import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — Keymatic",
  description:
    "Termos de Uso dos serviços e plataforma da Keymatic. Condições gerais para utilização do site e serviços de automação.",
};

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 flex items-center gap-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft size={14} />
            Voltar ao site
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-7 h-7 rounded-lg gradient-brand flex items-center justify-center font-mono font-bold text-xs text-white">
              K
            </div>
            <span className="text-sm font-semibold text-zinc-50">Keymatic</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-white mb-4">
            Termos de Uso
          </h1>
          <p className="text-zinc-500 text-sm">
            Última atualização: março de 2025
          </p>
        </div>

        <article className="prose-policy space-y-10">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              1. Identificação da Empresa
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Estes Termos de Uso regulam a utilização do site{" "}
              <strong className="text-zinc-300">keymatic.com.br</strong> e dos serviços oferecidos pela{" "}
              <strong className="text-zinc-300">Keymatic</strong>, marca operada por{" "}
              <strong className="text-zinc-300">VTS Comércio e Serviços LTDA</strong> (nome fantasia: VTS Tecnologia), pessoa jurídica de
              direito privado, inscrita no CNPJ sob o n.º 03.477.617/0001-90, com sede na Rua Dr. Aureliano da
              Silva Arruda, 625, São Paulo — SP, CEP 03960-050.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              2. Aceitação dos Termos
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Ao acessar ou utilizar o site e os serviços da Keymatic, você declara que leu, compreendeu e
              concorda com estes Termos de Uso. Caso não concorde com algum item, recomendamos que não
              utilize nossos serviços. O uso continuado do site após eventuais alterações nestes Termos
              constitui aceitação das modificações.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              3. Descrição dos Serviços
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              A Keymatic oferece os seguintes serviços:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong className="text-zinc-300">E-commerce de Elite:</strong> desenvolvimento de lojas virtuais com checkout inteligente, gestão de estoque e recomendações por IA.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Automação Inteligente:</strong> automação de atendimento via WhatsApp Business API, processos internos e integrações entre sistemas, incluindo atendimento automatizado por inteligência artificial.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Consultoria em IA:</strong> workshops, treinamento e implantação de inteligência artificial para empresas.</span>
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              4. Serviços de WhatsApp Business API
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              A Keymatic atua como <strong className="text-zinc-300">provedor de tecnologia</strong> para automação de atendimento
              via WhatsApp Business API da Meta Platforms, Inc. Ao utilizar nossos serviços de automação via WhatsApp, você reconhece que:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                O serviço é prestado em conformidade com as Políticas Comerciais e de Mensagens do WhatsApp Business.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                As mensagens podem ser processadas por sistemas de inteligência artificial para gerar respostas automatizadas.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                O atendimento humano pode ser solicitado a qualquer momento pelo usuário final.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                A empresa contratante (cliente da Keymatic) é responsável pelo conteúdo das mensagens enviadas em seu nome.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                É proibido o uso do serviço para envio de spam, mensagens não solicitadas, conteúdo ilegal ou que viole as políticas da Meta.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              5. Uso de Inteligência Artificial
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              Alguns serviços da Keymatic utilizam modelos de inteligência artificial (LLM) para geração de
              respostas e automação de processos. Ao utilizar esses serviços, você reconhece que:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                As respostas geradas por IA são fornecidas como apoio e não substituem aconselhamento profissional especializado.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                A Keymatic não garante a precisão absoluta das respostas geradas por inteligência artificial.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                O conteúdo das mensagens pode ser processado por provedores terceiros de IA (Google Gemini, Groq) para geração de respostas.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              6. Obrigações do Usuário
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              Ao utilizar o site e os serviços da Keymatic, o usuário compromete-se a:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Fornecer informações verdadeiras, atualizadas e completas nos formulários e cadastros.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Não utilizar os serviços para fins ilícitos, fraudulentos ou que violem direitos de terceiros.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Não tentar acessar áreas restritas do site ou sistemas sem autorização.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Não utilizar os canais de WhatsApp automatizados para envio de conteúdo abusivo, ofensivo ou ilegal.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Respeitar a propriedade intelectual da Keymatic e de terceiros.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              7. Propriedade Intelectual
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Todo o conteúdo deste site — incluindo textos, imagens, logotipos, layout, código-fonte, marcas e
              design — é de propriedade da Keymatic (VTS Comércio e Serviços LTDA) ou de seus licenciadores,
              protegido pela legislação brasileira de propriedade intelectual (Lei 9.610/1998 e Lei 9.279/1996).
              É proibida a reprodução, distribuição ou modificação do conteúdo sem autorização prévia por escrito.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              8. Limitação de Responsabilidade
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              A Keymatic não se responsabiliza por:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Interrupções ou indisponibilidade temporária do site ou serviços por motivos técnicos, manutenção ou força maior.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Danos diretos ou indiretos decorrentes do uso ou impossibilidade de uso dos serviços.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Conteúdo de mensagens enviadas por empresas contratantes por meio da plataforma de automação.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Decisões tomadas com base em respostas geradas por inteligência artificial.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Indisponibilidade de serviços de terceiros (WhatsApp, provedores de IA, hospedagem).
              </li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              9. Privacidade e Proteção de Dados
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              O tratamento de dados pessoais realizado pela Keymatic segue as diretrizes da{" "}
              <strong className="text-zinc-300">Lei Geral de Proteção de Dados (LGPD — Lei n.º 13.709/2018)</strong>.
              Para informações detalhadas sobre coleta, uso, armazenamento e seus direitos como titular de dados,
              consulte nossa{" "}
              <a href="/politica-de-privacidade" className="text-zinc-200 hover:underline">
                Política de Privacidade
              </a>.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              10. Rescisão e Suspensão
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              A Keymatic reserva-se o direito de suspender ou encerrar o acesso de qualquer usuário que viole
              estes Termos de Uso, sem aviso prévio, resguardando-se o direito de tomar as medidas legais cabíveis.
              Em caso de rescisão contratual de serviços, os dados serão tratados conforme descrito na Política de Privacidade.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              11. Alterações nos Termos
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              A Keymatic poderá atualizar estes Termos de Uso a qualquer momento. As alterações serão publicadas
              nesta página com a data da última atualização. Recomendamos que você revise estes termos periodicamente.
              O uso continuado dos serviços após a publicação de alterações constitui aceitação dos novos termos.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              12. Legislação Aplicável e Foro
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
              Fica eleito o foro da Comarca de São Paulo — SP como competente para dirimir quaisquer
              controvérsias decorrentes destes Termos, com renúncia expressa a qualquer outro, por mais
              privilegiado que seja.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              13. Contato
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              Para dúvidas, sugestões ou reclamações sobre estes Termos de Uso, entre em contato:
            </p>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <p className="text-sm text-zinc-300 font-medium mb-2">Keymatic — VTS Comércio e Serviços LTDA</p>
              <p className="text-[13px] text-zinc-500">
                E-mail:{" "}
                <a href="mailto:privacidade@keymatic.com.br" className="text-zinc-300 hover:underline">
                  privacidade@keymatic.com.br
                </a>
              </p>
              <p className="text-[13px] text-zinc-500 mt-1">
                CNPJ: 03.477.617/0001-90
              </p>
              <p className="text-[13px] text-zinc-500 mt-1">
                Endereço: Rua Dr. Aureliano da Silva Arruda, 625 — São Paulo/SP — CEP 03960-050
              </p>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <span className="text-[12px] text-zinc-600">
            Keymatic &copy; 2025 — VTS Comércio e Serviços LTDA — CNPJ: 03.477.617/0001-90
          </span>
          <a href="/" className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors">
            Voltar ao site
          </a>
        </div>
      </footer>
    </div>
  );
}
