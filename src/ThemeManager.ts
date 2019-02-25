export enum Themes {
	white,
	dark
}

export default class ThemeManager {
	
	static theme: Themes = Themes.dark;
	
	static getCardBackground() {
		return this.getColorForCurrent(
			"linear-gradient(to bottom, #8e9eab, #eef2f3)",
			"linear-gradient(to bottom, #485563, #29323c)");
	}
	
	static getShadowColor() {
		return this.getColorForCurrent("#e8e8e8", "#202020")
	}
	
	static getHeaderTextColor() {
		return this.getColorForCurrent("#252525", "#D5D5D5");
	}
	
	static getTextColor() {
		return this.getColorForCurrent("black", "white");
	}
	
	static getColorForCurrent(white: any, dark: any) {
		return this.getColor(this.theme, white, dark);
	}
	
	static getColor(theme: Themes, white: any, dark: any) {
		switch (this.theme) {
			case Themes.dark:
				return dark;
			case Themes.white:
				return white;
		}
		
		return this.getError();
	}
	
	private static getError() {
		return "red";
	}
}