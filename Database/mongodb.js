
import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

const connectionString ="mongodb+srv://rpundir1:r1QZ79y04BkApMir@cluster0.lqc45.mongodb.net/mydb?retryWrites=true&w=majority";

export const createNewEmployee = async (req, res, next) => {
  const client = new MongoClient(connectionString);

  const { empId, empName, empEmail } = req.body;
  const newEmployee = {
    empid: empId,
    empName: empName,
    empEmail: empEmail,
  };
  try {
    await client.connect();
    const db = client.db("mydb");
    const result = db.collection("customers").insertOne(newEmployee);
  } catch (error) {
    return res.send("could not store data " + error);
  }
  return res.json(newEmployee);
};

export const getAllEmployee = async(req, res, next)=>{
    const client = new MongoClient(connectionString);
    try {
        await client.connect();
        const db = client.db("mydb");
        const result = await db.collection("customers").find().toArray();
        console.log(result);
        return res.json(result);
      } catch (error) {
        return res.send("could not store data " + error);
      }
}
