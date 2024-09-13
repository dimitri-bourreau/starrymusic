export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      albums: {
        Row: {
          apple_music: string | null
          band_camp: string | null
          deezer: string | null
          ID: number
          image: number | null
          other_links: string[] | null
          spotify: string | null
          title: string
          work_in_progress: boolean | null
          year: number | null
          you_tube: string | null
        }
        Insert: {
          apple_music?: string | null
          band_camp?: string | null
          deezer?: string | null
          ID?: never
          image?: number | null
          other_links?: string[] | null
          spotify?: string | null
          title: string
          work_in_progress?: boolean | null
          year?: number | null
          you_tube?: string | null
        }
        Update: {
          apple_music?: string | null
          band_camp?: string | null
          deezer?: string | null
          ID?: never
          image?: number | null
          other_links?: string[] | null
          spotify?: string | null
          title?: string
          work_in_progress?: boolean | null
          year?: number | null
          you_tube?: string | null
        }
        Relationships: []
      }
      images: {
        Row: {
          ID: number
          name: string
          url: string
        }
        Insert: {
          ID?: never
          name: string
          url: string
        }
        Update: {
          ID?: never
          name?: string
          url?: string
        }
        Relationships: []
      }
      setlists: {
        Row: {
          album_id: number | null
          ID: number
          songs_ids: number[] | null
          work_in_progress: boolean | null
        }
        Insert: {
          album_id?: number | null
          ID?: never
          songs_ids?: number[] | null
          work_in_progress?: boolean | null
        }
        Update: {
          album_id?: number | null
          ID?: never
          songs_ids?: number[] | null
          work_in_progress?: boolean | null
        }
        Relationships: []
      }
      songs: {
        Row: {
          apple_music: string | null
          band_camp: string | null
          credits_extra: string[] | null
          credits_lead_vocals: string | null
          credits_lyrics: string | null
          credits_music: string | null
          deezer: string | null
          duration: string | null
          ID: number
          language_variant: string | null
          lyrics: string | null
          other_links: string[] | null
          spotify: string | null
          title: string
          work_in_progress: boolean | null
          year: number | null
          you_tube: string | null
        }
        Insert: {
          apple_music?: string | null
          band_camp?: string | null
          credits_extra?: string[] | null
          credits_lead_vocals?: string | null
          credits_lyrics?: string | null
          credits_music?: string | null
          deezer?: string | null
          duration?: string | null
          ID?: never
          language_variant?: string | null
          lyrics?: string | null
          other_links?: string[] | null
          spotify?: string | null
          title: string
          work_in_progress?: boolean | null
          year?: number | null
          you_tube?: string | null
        }
        Update: {
          apple_music?: string | null
          band_camp?: string | null
          credits_extra?: string[] | null
          credits_lead_vocals?: string | null
          credits_lyrics?: string | null
          credits_music?: string | null
          deezer?: string | null
          duration?: string | null
          ID?: never
          language_variant?: string | null
          lyrics?: string | null
          other_links?: string[] | null
          spotify?: string | null
          title?: string
          work_in_progress?: boolean | null
          year?: number | null
          you_tube?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
