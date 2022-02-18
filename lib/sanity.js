import sanityClient from "@sanity/client"

export const client = sanityClient({
  projectId: "43bnp7f7",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skMzoTlYOJIfQd8p8Ss1NETY7j8ftiVUm1xuXXA78c1LBNnOO8RyURx57FHm12RzPzA1LG95lxNqlDtEd2bBjxGUOYbV1yEjArxLR3Yico8zTYrnMH3jaTzATj9zFP6X3VloCnq6IeJ3UwnPVIu9n83bu2Auaz1FwCv7jqQoqidIhKf3tFoj",
  useCdn: false,
})
