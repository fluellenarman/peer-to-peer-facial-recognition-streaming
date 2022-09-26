module.exports = (sequelize, DataTypes) =>
	sequelize.define("session_record", {
		uuid: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		time: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user1Name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user2Name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user1Expression: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user2Expression: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		user1Signal_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user2Signal_id: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	})