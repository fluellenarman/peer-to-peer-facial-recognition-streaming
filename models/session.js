const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	const Session = sequelize.define("Session", {
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		otherName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	})

	return Session;
};
