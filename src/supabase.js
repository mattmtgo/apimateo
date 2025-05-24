import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bdvojdpthiqbmoctccgq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdm9qZHB0aGlxYm1vY3RjY2dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMTE4MjgsImV4cCI6MjA2MzY4NzgyOH0.kTv2z9FB1Y-4UK1ir-IK1rHTYtIQnk-JuiTqVzaA1A8';
export const supabase = createClient(supabaseUrl, supabaseKey);