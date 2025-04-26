import { FeatureCollection, LineString } from "geojson";

import { ITelemetryData } from "./types";
import { generateFakeTelemetryData } from "./utils";
const GRAND_FULL_COURSE_GEO_JSON = {
  features: [
    {
      geometry: { coordinates: [-86.363608991, 37.003595476], type: "Point" },
      id: "sma85350e6",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.363525842, 37.004265921], type: "Point" },
      id: "sm7270301a",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.363013541, 37.004657904], type: "Point" },
      id: "sm0ccceba4",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.36270777, 37.004837829], type: "Point" },
      id: "sm0c2176b8",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.362694359, 37.005386171], type: "Point" },
      id: "sme0fd315c",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.362514652, 37.005653915], type: "Point" },
      id: "sm02710934",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.36207477, 37.00575887], type: "Point" },
      id: "sm3d2e60bd",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.361728765, 37.005591798], type: "Point" },
      id: "sm8ca40e45",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.361498095, 37.005178401], type: "Point" },
      id: "sm7eabddd0",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.361648299, 37.004884951], type: "Point" },
      id: "sm20b9ada9",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.361849464, 37.00446084], type: "Point" },
      id: "sm8dc776ea",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.361669756, 37.004139542], type: "Point" },
      id: "smf243ba54",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.361197687, 37.0040303], type: "Point" },
      id: "sm8ec26ec5",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.360677338, 37.004278771], type: "Point" },
      id: "sm271a0c2e",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.360570052, 37.004632199], type: "Point" },
      id: "sm51becaf8",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.360500311, 37.004912795], type: "Point" },
      id: "sm45a8ac64",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.360390341, 37.005356181], type: "Point" },
      id: "sm04eb3d03",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.360344743, 37.005645345], type: "Point" },
      id: "sm465d5bbd",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.36043862, 37.005945216], type: "Point" },
      id: "sm42d287ef",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.360819493, 37.006125139], type: "Point" },
      id: "sma0ecb2c4",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.361404215, 37.006365035], type: "Point" },
      id: "sm74d18684",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.362300073, 37.006446429], type: "Point" },
      id: "sm52a30982",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.362911616, 37.006262223], type: "Point" },
      id: "smb17c50e8",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.363415872, 37.00589381], type: "Point" },
      id: "smf0bb72ef",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.363786017, 37.005251225], type: "Point" },
      id: "sm9ac9ffed",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.364220534, 37.00460435], type: "Point" },
      id: "smc9c2ad47",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.364719425, 37.004171671], type: "Point" },
      id: "sm94cca9a9",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.365277324, 37.003691863], type: "Point" },
      id: "sm641fc855",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.365845952, 37.003130656], type: "Point" },
      id: "sm046db624",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.366473589, 37.002629422], type: "Point" },
      id: "sm7a3043c1",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.368034635, 37.001926832], type: "Point" },
      id: "sm54c39eea",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.368689093, 37.001665502], type: "Point" },
      id: "sm6991b5aa",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.369606408, 37.001691207], type: "Point" },
      id: "sm7ad11996",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.370078477, 37.001695491], type: "Point" },
      id: "smedf14920",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.370443257, 37.001348477], type: "Point" },
      id: "sm67431388",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.370743665, 37.001091428], type: "Point" },
      id: "smaf2eee8b",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.371446404, 37.000778684], type: "Point" },
      id: "sm9a5158f7",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.371945295, 37.000555907], type: "Point" },
      id: "smb584eea4",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.372192058, 37.000598749], type: "Point" },
      id: "sm427af187",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.372256431, 37.000855799], type: "Point" },
      id: "smcd26cfbd",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.372127685, 37.001151406], type: "Point" },
      id: "sma7945d34",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.371811184, 37.001545547], type: "Point" },
      id: "sm1c38f1d4",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.371280107, 37.001832583], type: "Point" },
      id: "sm4ea18f36",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.370362791, 37.00211105], type: "Point" },
      id: "smdb30d270",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.369971189, 37.002380947], type: "Point" },
      id: "sm9c482eac",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.369702968, 37.002903603], type: "Point" },
      id: "sm2d668b8e",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.369381103, 37.003353427], type: "Point" },
      id: "sm43ee265f",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.368785652, 37.00345196], type: "Point" },
      id: "sm7eeb1071",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.368383321, 37.003254895], type: "Point" },
      id: "sm0fe86ac3",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.367879066, 37.002916455], type: "Point" },
      id: "sme40c2b8d",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.367546472, 37.002903603], type: "Point" },
      id: "sm873274a6",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.366940292, 37.00316493], type: "Point" },
      id: "sme62aa6c3",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.36650041, 37.00366616], type: "Point" },
      id: "sm8ec06207",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.366505775, 37.003974608], type: "Point" },
      id: "smaf8b045c",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.367691311, 37.004313043], type: "Point" },
      id: "smb5843186",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.368447694, 37.004467266], type: "Point" },
      id: "sma2e94d94",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.369000229, 37.004394438], type: "Point" },
      id: "smb91bcaf6",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.369456204, 37.004175956], type: "Point" },
      id: "sm7f70cc04",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.369922909, 37.003691865], type: "Point" },
      id: "smfc42c285",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.370829495, 37.002663696], type: "Point" },
      id: "sma6c5c962",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.372068676, 37.001948254], type: "Point" },
      id: "sm2f1dfe11",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.372841153, 37.001271363], type: "Point" },
      id: "smfd15f9d6",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.374214444, 36.999823309], type: "Point" },
      id: "smb46027b1",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.37438074, 36.999564113], type: "Point" },
      id: "sm0e9e66c5",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.374321731, 36.999242794], type: "Point" },
      id: "sm83364f72",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.374192985, 36.999009302], type: "Point" },
      id: "sm09cb4e0c",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.373747739, 36.998990023], type: "Point" },
      id: "sme1d98c0c",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.37298063, 36.999154968], type: "Point" },
      id: "sm496a41a7",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.372288617, 36.999343474], type: "Point" },
      id: "sm197bb154",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.371164771, 36.999844729], type: "Point" },
      id: "smbdcde48f",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.36983976, 37.000433808], type: "Point" },
      id: "sm6ef753fb",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.367600115, 37.001491996], type: "Point" },
      id: "sm20de3f1b",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.364697966, 37.002854337], type: "Point" },
      id: "smbbe4046c",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.363914762, 37.003231334], type: "Point" },
      id: "sm93f01508",
      properties: {},
      type: "Feature",
    },
    {
      geometry: { coordinates: [-86.363608991, 37.003595476], type: "Point" },
      id: "sma85350e6",
      properties: {},
      type: "Feature",
    },
  ],
  id: "root",
  type: "FeatureCollection",
};
const GRAND_FULL_COURSE = GRAND_FULL_COURSE_GEO_JSON.features.map(
  (feature) => feature.geometry.coordinates
);
const raceTrackGeoJSON_GRAND_FULL_COURSE = {
  features: [
    {
      geometry: {
        coordinates: GRAND_FULL_COURSE,
        type: "LineString",
      },
      properties: {},
      type: "Feature",
    },
  ],
  type: "FeatureCollection",
} as const satisfies FeatureCollection<LineString>;

export const Hydrated_Grand_Full_course =
  raceTrackGeoJSON_GRAND_FULL_COURSE.features[0].geometry.coordinates.map(
    (coords) => {
      const fakePacket = generateFakeTelemetryData();
      const newPacketMarker: ITelemetryData = {
        ...fakePacket,
        Telemetry: {
          ...fakePacket.Telemetry,
          GpsLatitude: coords[1]!,
          GpsLongitude: coords[0]!,
        },
      };
      return newPacketMarker;
    }
  );
