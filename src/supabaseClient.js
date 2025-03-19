import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://epcacbcklnjdhwbnzbha.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwY2FjYmNrbG5qZGh3Ym56YmhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4Nzk5NDEsImV4cCI6MjA1NTQ1NTk0MX0.HEhYGz6bNA2-5bBUVenGo-kGTaoOHXGN5IOJT9qD9po';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;