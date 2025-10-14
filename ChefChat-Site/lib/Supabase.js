import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rjezxvljtohmldlktjdx.supabase.co'; // sua URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZXp4dmxqdG9obWxkbGt0amR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3MzE4MTcsImV4cCI6MjA3MzMwNzgxN30.y9E45TzvF3B7HMANu4HubO8X_mCo_w4yP6Q849uvtoU'; // sua chave

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
