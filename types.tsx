export type characterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
};

export type locationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: characterType[];
  url: string;
  created: string;
};
