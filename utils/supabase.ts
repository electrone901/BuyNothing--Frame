import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ycplmckespubztyaxzyr.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey as string);

export const getAllItem = async () => {
  let { data: Items, error } = await supabase
    .from('item')
    .select("*")
    console.log(Items, error);
  if (error) return [];
  return Items;
}

export const getItemByID = async (id: string) => {
  let { data: Items, error } = await supabase
    .from('item')
    .select("*")
    .eq('id', id);
    console.log(Items, error);
  if (error) return [];
  return Items;
}

export const addItem = async (title: string, detail:string, image_url: string, location: string) => {
  const { data, error } = await supabase
    .from('item')
    .insert([
      { title, detail, image_url, location }
    ])
    .select()
  console.log(data, error);
  return data;
}