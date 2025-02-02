```javascript
// Solution 1: To match documents where the field exists (regardless of its value)
db.collection.find({ field: { $exists: true } });

// Solution 2: To match documents where the field does not exist
db.collection.find({ field: { $exists: false } });

// Solution 3: Using $or to match documents where the field is an empty array or doesn't exist
db.collection.find({ $or: [{ field: [] }, { field: { $exists: false } }] }); 
```