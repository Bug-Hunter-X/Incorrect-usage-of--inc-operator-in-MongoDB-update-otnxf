```javascript
// Correct usage of $inc operator in MongoDB update
db.collection.updateOne({"_id": ObjectId("someId")}, {"$inc": {"field": 1}});
```