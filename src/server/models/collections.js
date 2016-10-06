import Bookshelf from '../../bookshelf';

var rules = {
	collection_name : ['required']
};

const Collection = Bookshelf.Model.extend({
	tableName:'Collection',
	hasTimeStams: true,

	intialize : function() {
		this.on('saving', this.validateSave);
	},

	validateSave: function() {
		return checkit(rules).run(this.attributes);
	},

	user: function() {
    	return this.belongsTo("User");
  	}

});

export default Bookshelf.model("Collection", Collection);