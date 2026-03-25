import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Keymatic",
  description:
    "Política de Privacidade e conformidade com a LGPD da Keymatic. Saiba como tratamos seus dados pessoais.",
};

export default function PoliticaDePrivacidade() {
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
            Política de Privacidade
          </h1>
          <p className="text-zinc-500 text-sm">
            Última atualização: março de 2025
          </p>
        </div>

        <article className="prose-policy space-y-10">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              1. Introdução
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              A <strong className="text-zinc-300">Keymatic</strong>, marca operada por VTS Comércio e Serviços LTDA (nome fantasia: VTS Tecnologia), inscrita no
              CNPJ sob o n.º 03.477.617/0001-90, com sede na Rua Dr. Aureliano da Silva Arruda, 625, São Paulo — SP, CEP 03960-050, é a controladora dos dados pessoais
              coletados neste site e por meio dos seus serviços de automação e atendimento via WhatsApp. Esta Política de Privacidade descreve como coletamos, usamos,
              armazenamos e protegemos suas informações pessoais, em conformidade com a{" "}
              <strong className="text-zinc-300">Lei Geral de Proteção de Dados (LGPD — Lei n.º 13.709/2018)</strong> e com as políticas
              da <strong className="text-zinc-300">Meta Platforms, Inc.</strong> para uso da WhatsApp Business API.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              2. Dados Pessoais Coletados
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              Podemos coletar os seguintes dados pessoais:
            </p>

            <h3 className="text-[14px] font-semibold text-zinc-300 mb-2 mt-4">2.1. Dados coletados pelo site</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Dados de identificação:</strong> nome, e-mail, telefone/WhatsApp, nome da empresa.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência, cookies.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Dados do formulário de diagnóstico/quiz:</strong> desafio selecionado, tamanho da operação, perfil digital, informações de contato.</span>
              </li>
            </ul>

            <h3 className="text-[14px] font-semibold text-zinc-300 mb-2 mt-5">2.2. Dados coletados via WhatsApp Business API</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              Quando você interage com nossos serviços de atendimento via WhatsApp (operados pela Keymatic em nome de nossos clientes), podemos coletar:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Nome do contato:</strong> conforme cadastrado no perfil do WhatsApp.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Número de telefone WhatsApp.</strong></span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Conteúdo das mensagens:</strong> mensagens trocadas durante o atendimento automatizado e humano.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Histórico de conversas:</strong> registros de interações para continuidade do atendimento.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Dados de leads:</strong> nome, interesse demonstrado e status de atendimento.</span>
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              3. Uso de Mensagens Automatizadas e Inteligência Artificial
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              A Keymatic utiliza <strong className="text-zinc-300">inteligência artificial (IA)</strong> e <strong className="text-zinc-300">mensagens automatizadas</strong> para
              atendimento via WhatsApp em nome de seus clientes (empresas contratantes). Isso significa que:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                As respostas no WhatsApp podem ser geradas automaticamente por modelos de linguagem (LLM).
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                O conteúdo das mensagens pode ser processado por provedores de IA (Google Gemini, Groq) exclusivamente para geração de respostas, sem vinculação a dados pessoais identificáveis.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                A IA não toma decisões autônomas que afetem direitos do titular; é utilizada apenas como ferramenta de apoio ao atendimento.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                O usuário pode solicitar atendimento humano a qualquer momento durante a conversa.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              4. Finalidade do Tratamento
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              Seus dados pessoais são tratados para as seguintes finalidades:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                Responder a solicitações de contato e diagnóstico gratuito.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                Prestar serviços de atendimento automatizado via WhatsApp em nome de empresas contratantes.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                Personalizar propostas comerciais de acordo com o perfil informado.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                Melhorar a experiência de navegação e desempenho do site.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                Enviar comunicações comerciais (somente com consentimento prévio).
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-purple mt-2 shrink-0" />
                Cumprir obrigações legais e regulatórias.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              5. Base Legal (Art. 7º da LGPD)
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              O tratamento de dados pessoais realizado pela Keymatic tem como bases legais:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Consentimento</strong> (Art. 7º, I): para envio de comunicações comerciais e uso de cookies não essenciais.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Execução de contrato</strong> (Art. 7º, V): para prestação dos serviços contratados, incluindo automação de atendimento via WhatsApp.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Legítimo interesse</strong> (Art. 7º, IX): para análise de navegação e melhoria dos serviços.</span>
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              6. Compartilhamento de Dados
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              Seus dados pessoais poderão ser compartilhados com:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Empresa contratante:</strong> a empresa cliente da Keymatic com a qual o usuário final está interagindo via WhatsApp, para fins de atendimento e continuidade do serviço.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Provedores de IA:</strong> Google Gemini e Groq, que recebem apenas o conteúdo textual das mensagens para processamento de linguagem natural, sem dados pessoais identificáveis vinculados.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Meta Platforms (WhatsApp Business API):</strong> para envio e recebimento de mensagens via WhatsApp, conforme os Termos de Serviço e Política de Privacidade da Meta.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Provedores de infraestrutura:</strong> serviços de hospedagem, banco de dados (PostgreSQL) e CDN para funcionamento do site e dos serviços.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Ferramentas de análise:</strong> Google Analytics ou similares, para dados agregados de navegação.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                <span><strong className="text-zinc-300">Autoridades públicas:</strong> quando exigido por lei ou ordem judicial.</span>
              </li>
            </ul>
            <p className="text-sm text-zinc-400 leading-relaxed mt-3">
              Não vendemos, alugamos ou comercializamos seus dados pessoais com terceiros para fins de marketing.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              7. Cookies
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              Utilizamos cookies para melhorar a experiência de navegação. Os tipos de cookies utilizados são:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <h4 className="text-[13px] font-semibold text-zinc-300 mb-1">Cookies Essenciais</h4>
                <p className="text-[12px] text-zinc-500 leading-relaxed">
                  Necessários para o funcionamento básico do site. Não podem ser desativados.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <h4 className="text-[13px] font-semibold text-zinc-300 mb-1">Cookies de Análise</h4>
                <p className="text-[12px] text-zinc-500 leading-relaxed">
                  Utilizados para entender como os visitantes interagem com o site. Podem ser recusados pelo banner de cookies.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <h4 className="text-[13px] font-semibold text-zinc-300 mb-1">Cookies de Preferência</h4>
                <p className="text-[12px] text-zinc-500 leading-relaxed">
                  Armazenam suas escolhas (ex: consentimento de cookies) para melhorar a experiência em visitas futuras.
                </p>
              </div>
            </div>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              8. Seus Direitos (Art. 18 da LGPD)
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              Como titular dos dados, você tem os seguintes direitos:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                Confirmar a existência de tratamento de dados pessoais.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                Acessar, corrigir ou atualizar seus dados pessoais.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                Solicitar a portabilidade dos dados a outro fornecedor.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                Revogar o consentimento a qualquer momento.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                Obter informações sobre compartilhamento de dados com terceiros.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-brand-orange mt-2 shrink-0" />
                <strong className="text-zinc-300">Solicitar a exclusão dos seus dados pessoais</strong> de nossas bases, incluindo dados coletados via WhatsApp, a qualquer momento.
              </li>
            </ul>
            <p className="text-sm text-zinc-400 leading-relaxed mt-3">
              Para exercer seus direitos, entre em contato pelo e-mail{" "}
              <a href="mailto:privacidade@keymatic.com.br" className="text-zinc-200 hover:underline">
                privacidade@keymatic.com.br
              </a>.
              Responderemos à sua solicitação em até 15 dias úteis, conforme previsto na LGPD.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              9. Segurança dos Dados
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acessos
              não autorizados, perda, alteração ou destruição. Entre as medidas implementadas estão:
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Criptografia de dados em trânsito (HTTPS/TLS) e em repouso.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Armazenamento seguro em banco de dados PostgreSQL em servidor próprio.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Autenticação de dois fatores (2FA) em todos os painéis administrativos.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Backups automáticos diários com retenção de 30 dias.
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                Controle de acesso baseado em funções (RBAC).
              </li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              10. Retenção de Dados
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Seus dados pessoais serão mantidos apenas pelo tempo necessário para cumprir as finalidades
              descritas nesta política, ou conforme exigido por lei. Dados de contato comercial são mantidos
              por até 24 meses após a última interação. Dados de conversas via WhatsApp são mantidos enquanto
              houver relação contratual ativa com a empresa atendida, sendo eliminados em até 90 dias após o
              encerramento do contrato. Após os períodos de retenção, os dados são anonimizados ou eliminados.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              11. Alterações nesta Política
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Esta Política de Privacidade pode ser atualizada periodicamente. Eventuais alterações
              serão publicadas nesta página com a data da última atualização. Recomendamos que
              você revise esta política regularmente.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              12. Contato e Encarregado (DPO)
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3">
              Para dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados pessoais,
              entre em contato com nosso Encarregado de Proteção de Dados (DPO):
            </p>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <p className="text-sm text-zinc-300 font-medium mb-2">Keymatic — Encarregado de Dados</p>
              <p className="text-[13px] text-zinc-500">
                E-mail:{" "}
                <a href="mailto:privacidade@keymatic.com.br" className="text-zinc-300 hover:underline">
                  privacidade@keymatic.com.br
                </a>
              </p>
              <p className="text-[13px] text-zinc-500 mt-1">
                Razão Social: VTS Comércio e Serviços LTDA — CNPJ: 03.477.617/0001-90
              </p>
              <p className="text-[13px] text-zinc-500 mt-1">
                Endereço: Rua Dr. Aureliano da Silva Arruda, 625 — São Paulo/SP — CEP 03960-050
              </p>
              <p className="text-[13px] text-zinc-500 mt-3">
                Você também pode registrar uma reclamação junto à{" "}
                <strong className="text-zinc-400">Autoridade Nacional de Proteção de Dados (ANPD)</strong>{" "}
                caso considere que o tratamento dos seus dados viola a LGPD.
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
