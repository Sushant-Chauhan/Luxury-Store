// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rbviqcxyvaecnpiplehx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJidmlxY3h5dmFlY25waXBsZWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5NDIxMDQsImV4cCI6MjA1NDUxODEwNH0.Q3Ct5qZEmz8Q_EYUcvpqP4blWBO_H3QFvw-ej7s17Dc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);