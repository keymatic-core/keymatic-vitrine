-- ============================================
-- Keymatic Vitrine — Security & LGPD Setup
-- Execute no Supabase Dashboard > SQL Editor
-- ============================================

-- 1. Adicionar coluna de consentimento de cookies
ALTER TABLE quiz_leads
  ADD COLUMN IF NOT EXISTS cookie_consent BOOLEAN DEFAULT false;

-- 2. Habilitar RLS na tabela quiz_leads
ALTER TABLE quiz_leads ENABLE ROW LEVEL SECURITY;

-- 3. Permitir INSERT apenas via anon key (formulario publico)
CREATE POLICY "Allow public quiz submissions"
  ON quiz_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 4. Permitir acesso total via service_role (admin/API server)
CREATE POLICY "Allow service_role full access"
  ON quiz_leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Nota: SELECT/UPDATE/DELETE via anon key ficam bloqueados por padrao
-- pois RLS nega tudo que nao tem policy explicita.
