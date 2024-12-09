create table "public"."albums" (
    "ID" integer generated always as identity not null,
    "work_in_progress" boolean default false,
    "title" text not null,
    "year" integer,
    "image" integer,
    "you_tube" text,
    "deezer" text,
    "spotify" text,
    "apple_music" text,
    "band_camp" text,
    "other_links" text[]
);


create table "public"."images" (
    "ID" integer generated always as identity not null,
    "name" text not null,
    "url" text not null
);


create table "public"."setlists" (
    "ID" integer generated always as identity not null,
    "album_id" integer,
    "songs_ids" integer[],
    "work_in_progress" boolean default false
);


create table "public"."songs" (
    "ID" integer generated always as identity not null,
    "work_in_progress" boolean default false,
    "title" text not null,
    "year" integer,
    "duration" text,
    "lyrics" text,
    "credits_music" text,
    "credits_lyrics" text,
    "credits_lead_vocals" text,
    "credits_extra" text[],
    "language_variant" text,
    "you_tube" text,
    "deezer" text,
    "spotify" text,
    "apple_music" text,
    "band_camp" text,
    "other_links" text[]
);


CREATE UNIQUE INDEX albums_pkey ON public.albums USING btree ("ID");

CREATE UNIQUE INDEX images_pkey ON public.images USING btree ("ID");

CREATE UNIQUE INDEX setlists_pkey ON public.setlists USING btree ("ID");

CREATE UNIQUE INDEX songs_pkey ON public.songs USING btree ("ID");

alter table "public"."albums" add constraint "albums_pkey" PRIMARY KEY using index "albums_pkey";

alter table "public"."images" add constraint "images_pkey" PRIMARY KEY using index "images_pkey";

alter table "public"."setlists" add constraint "setlists_pkey" PRIMARY KEY using index "setlists_pkey";

alter table "public"."songs" add constraint "songs_pkey" PRIMARY KEY using index "songs_pkey";

grant delete on table "public"."albums" to "anon";

grant insert on table "public"."albums" to "anon";

grant references on table "public"."albums" to "anon";

grant select on table "public"."albums" to "anon";

grant trigger on table "public"."albums" to "anon";

grant truncate on table "public"."albums" to "anon";

grant update on table "public"."albums" to "anon";

grant delete on table "public"."albums" to "authenticated";

grant insert on table "public"."albums" to "authenticated";

grant references on table "public"."albums" to "authenticated";

grant select on table "public"."albums" to "authenticated";

grant trigger on table "public"."albums" to "authenticated";

grant truncate on table "public"."albums" to "authenticated";

grant update on table "public"."albums" to "authenticated";

grant delete on table "public"."albums" to "service_role";

grant insert on table "public"."albums" to "service_role";

grant references on table "public"."albums" to "service_role";

grant select on table "public"."albums" to "service_role";

grant trigger on table "public"."albums" to "service_role";

grant truncate on table "public"."albums" to "service_role";

grant update on table "public"."albums" to "service_role";

grant delete on table "public"."images" to "anon";

grant insert on table "public"."images" to "anon";

grant references on table "public"."images" to "anon";

grant select on table "public"."images" to "anon";

grant trigger on table "public"."images" to "anon";

grant truncate on table "public"."images" to "anon";

grant update on table "public"."images" to "anon";

grant delete on table "public"."images" to "authenticated";

grant insert on table "public"."images" to "authenticated";

grant references on table "public"."images" to "authenticated";

grant select on table "public"."images" to "authenticated";

grant trigger on table "public"."images" to "authenticated";

grant truncate on table "public"."images" to "authenticated";

grant update on table "public"."images" to "authenticated";

grant delete on table "public"."images" to "service_role";

grant insert on table "public"."images" to "service_role";

grant references on table "public"."images" to "service_role";

grant select on table "public"."images" to "service_role";

grant trigger on table "public"."images" to "service_role";

grant truncate on table "public"."images" to "service_role";

grant update on table "public"."images" to "service_role";

grant delete on table "public"."setlists" to "anon";

grant insert on table "public"."setlists" to "anon";

grant references on table "public"."setlists" to "anon";

grant select on table "public"."setlists" to "anon";

grant trigger on table "public"."setlists" to "anon";

grant truncate on table "public"."setlists" to "anon";

grant update on table "public"."setlists" to "anon";

grant delete on table "public"."setlists" to "authenticated";

grant insert on table "public"."setlists" to "authenticated";

grant references on table "public"."setlists" to "authenticated";

grant select on table "public"."setlists" to "authenticated";

grant trigger on table "public"."setlists" to "authenticated";

grant truncate on table "public"."setlists" to "authenticated";

grant update on table "public"."setlists" to "authenticated";

grant delete on table "public"."setlists" to "service_role";

grant insert on table "public"."setlists" to "service_role";

grant references on table "public"."setlists" to "service_role";

grant select on table "public"."setlists" to "service_role";

grant trigger on table "public"."setlists" to "service_role";

grant truncate on table "public"."setlists" to "service_role";

grant update on table "public"."setlists" to "service_role";

grant delete on table "public"."songs" to "anon";

grant insert on table "public"."songs" to "anon";

grant references on table "public"."songs" to "anon";

grant select on table "public"."songs" to "anon";

grant trigger on table "public"."songs" to "anon";

grant truncate on table "public"."songs" to "anon";

grant update on table "public"."songs" to "anon";

grant delete on table "public"."songs" to "authenticated";

grant insert on table "public"."songs" to "authenticated";

grant references on table "public"."songs" to "authenticated";

grant select on table "public"."songs" to "authenticated";

grant trigger on table "public"."songs" to "authenticated";

grant truncate on table "public"."songs" to "authenticated";

grant update on table "public"."songs" to "authenticated";

grant delete on table "public"."songs" to "service_role";

grant insert on table "public"."songs" to "service_role";

grant references on table "public"."songs" to "service_role";

grant select on table "public"."songs" to "service_role";

grant trigger on table "public"."songs" to "service_role";

grant truncate on table "public"."songs" to "service_role";

grant update on table "public"."songs" to "service_role";


