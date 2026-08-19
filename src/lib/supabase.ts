import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          name: string;
          description: string;
          price: number;
          category: string;
          subcategory: string;
          images: string[];
          sizes: string[];
          colors: string[];
          in_stock: boolean;
          featured: boolean;
          created_at: string;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string;
          status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
          items: any[];
          total: number;
          address: string;
          tracking_number: string | null;
          created_at: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          phone: string;
          address: string;
          avatar_url: string | null;
        };
      };
    };
  };
};
