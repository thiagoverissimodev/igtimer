import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = defaultTheme;

// toda vez que eu importar o styled em algum component ele vai pegar a tipagem daqui. aqui é como usar o que já tem lá e sobreescrever o q for preciso
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
