export enum EraName {
  "1900s" = "1900s",
  "1910s" = "1910s",
  "1920s" = "1920s",
  "1930s" = "1930s",
  "1940s" = "1940s",
  "1950s" = "1950s",
  "1960s" = "1960s",
  "1970s" = "1970s",
  "1980s" = "1980s",
  "1990s" = "1990s",
  "2000s" = "2000s",
  "Modern" = "Modern",
}

export enum EraClass {
  "1900s" = "nineteenhundreds",
  "1910s" = "nineteentens",
  "1920s" = "nineteentwenties",
  "1930s" = "nineteenthirties",
  "1940s" = "nineteenforties",
  "1950s" = "nineteenfifties",
  "1960s" = "nineteensixties",
  "1970s" = "nineteenseventies",
  "1980s" = "nineteeneighties",
  "1990s" = "nineteennineties",
  "2000s" = "twentyoughts",
  "Modern" = "modern",
}

export type Era = {
  name: EraName;
  class: EraClass;
};
