import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://luewqidpyaocdegqaluq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1ZXdxaWRweWFvY2RlZ3FhbHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NjQ0MjEsImV4cCI6MjA3MDM0MDQyMX0.InYz1L2jYj0hQFVKJVCkyowuyw8OEcxMAKJ7n5u81ZI';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const trackEvent = async (eventType: string, data?: any) => {
  try {
    await supabase.from('analytics').insert({
      event_type: eventType,
      event_data: data,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

export const getAnalytics = async () => {
  try {
    const { data, error } = await supabase
      .from('analytics')
      .select('*')
      .order('timestamp', { ascending: false });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return [];
  }
};