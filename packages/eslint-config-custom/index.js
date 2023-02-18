module.exports = {
	"extends": "@nuxtjs/eslint-config-typescript",
	"rules": {
		"vue/no-v-html": "off",
		"vue/no-multiple-template-root": "off",
		"semi": ["error", "always"],
		"comma-dangle": ["error", {
			"arrays": "always",
			"objects": "always",
			"imports": "never",
			"exports": "never",
			"functions": "never"
		}],
		"quotes": ["error", "double"],
		"indent": ["error", "tab"],
		"no-tabs": "off"
	},
	"settings": {
		"import/resolver": {
		  "node": {
			"extensions": [".ts", ".vue"]
		  }
		}
	  }
};
