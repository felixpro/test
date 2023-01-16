
# IMPORT

BASE_URL=https://xray.cloud.getxray.app
PROJECT=XP
 
zip -r features.zip cypress/integration/ -i \*.feature
 
token=$(curl -H "Content-Type: application/json" -X POST --data @"cloud_auth.json" https://xray.cloud.getxray.app/api/v2/authenticate| tr -d '"')
curl -H "Content-Type: multipart/form-data" -H "Authorization: Bearer $token"  -F "file=@features.zip" "$BASE_URL/api/v2/import/feature?projectKey=$PROJECT"

# EXPORT 



BASE_URL=https://xray.cloud.getxray.app
token=$(curl -H "Content-Type: application/json" -X POST --data @"cloud_auth.json" $BASE_URL/api/v2/authenticate| tr -d '"')
curl -H "Content-Type: application/json" -X GET -H "Authorization: Bearer $token" "$BASE_URL/api/v2/export/cucumber?keys=XP-13" -o features.zip
 
rm -rf features/*.feature
unzip -o features.zip -d features