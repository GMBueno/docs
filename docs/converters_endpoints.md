---
title: Endpoints
---

## About
All HTTP methods should be prepended by this service's endpoint:

```
https://a.agrigate.io/services/converters/api
```

This service has the following endpoints available:

```
POST   /{input}-{output}
POST   with params instead of query str
```

## Endpoints

List of all the available endpoints.

### `POST /{input}-{output}`
Posts a file, passed as a multipart to the service. The file will be converted from the format specified in `input` to the `output` format. All The valid combinations of input and output are described **[in this table](/docs/docs/converters_overview#available-converters)**

It is possible to link this conversion with a Leaf User created, passing his ID as a query parameter: `userId`. But its use is not mandatory.

#### Example
```shell
curl -X POST \
-H 'Content-Type: multipart/form-data' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer token' {"type":"formData"} \
'https://a.agrigate.io/services/converters/api/geojson-shapefile?userId=uuid' \
--form 'file=@path'
```

Response sample:
```json
{
    "uri": "uri to an S3 bucket",
    "message": "Success"
}
```

### `POST /`
It performs exactly the same as the previous endpoint, but, instead of passing
variables in the path, you pass them via params. Like so:

#### Example
```shell
curl -X POST \
--header 'Content-Type: multipart/form-data' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer token' {"type":"formData"} \
'https://a.agrigate.io/services/converters/api/?input=geojson&output=shapefile&userId=uuid' \
--form 'file=@path'
```

This example is equivalent to the example in the previous endpoint. The input and output obey the same rules as well.