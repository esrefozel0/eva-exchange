# eva-exchange
EvaExchange is an arbitrarily trading game developed by a startup in a very short span of time called “Super Traders” . The purpose of the application is to educate users on the terminology used in trading of shares.

## Used Technologies

- Node.js
- Express.js
- PostgreSQL
- Sequelize

**Entity Relations:**
https://drive.google.com/file/d/1gkA5t8DBfaz4uv_MqK2X5cn40PmuST2a/view?usp=sharing

You can start the PostgreSQL database using Docker with the following command:
## Running Container

1. `./gradlew clean build`
2. Run: `docker-compose up`
3. Create container just first : `docker run -d --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres`
4. Exec container : `docker start postgres`

## Running Project
1. `npm i`
2. For insert bulk data `npx sequelize-cli db:seed:all` 
3. Run project : `npm run dev`

## TRADE APIs

### Buy Share

**Endpoint:** `/trade/BUY`

**Method:** POST

**Description:** This endpoint allows you to buy the specified share at the specified rate.

---

### Sell Share

**Endpoint:** `/trade/BUY`

**Method:** POST

**Description:** This endpoint allows you to sell the specified share at the specified rate.