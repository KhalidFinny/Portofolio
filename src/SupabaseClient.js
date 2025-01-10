import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lpidxbttworqrgngoppg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwaWR4YnR0d29ycXJnbmdvcHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxNjg2NjAsImV4cCI6MjA1MDc0NDY2MH0.wYlGGPQD6O3AgIWenJSmvB4ZQUpoSJRrzSkMNBVlzBE';

export const supabase = createClient(supabaseUrl, supabaseKey);