// const { DataTypes } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
// 	const UserID_Record = sequelize.define("userid_record", {
// 		name: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 		},
// 		signalId: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 		}
// 	})

// 	return UserID_Record;
// }

module.exports = (sequelize, DataTypes) => 
	sequelize.define("userid_record", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		signalId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	})