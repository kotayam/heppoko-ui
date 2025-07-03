# HeppokoUI

## Overview

### Directory Structure

#### `/layout`

ここにはレイアウト系のコンポーネントが所属します。`children`を持ち、他のコンポーネントをWrapするものです。

#### `/typography`

ここにはテキスト系のコンポーネントが所属します。

#### `/ui`

ここにはUIとして使われるコンポーネントが所属します。多くは単体で使われるイメージです。

#### `common.ts`

ここには主に、スタイルのタイプ定義と、カスタムスタイルから`CSSProperties`へ変換する関数を定義しています。

##### Props

スタイリングは各コンポーネントのPropsで行います。デフォルトのCSSに存在するスタイリングを種類ごとに分類してPropsとして以下を定義しています。

- `DimensionProps`: `height`, `width`など。
- `BorderProps`: ボーダー関係。
- `PositionProps`: `position`関係。
- `PaddingProps`: `padding`関係。省略のため、`p="1px"`で指定できます。
- `MarginProps`: `margin`関係。省略のため、`m="1px"`で指定できます。
- `ShadowProps`: こちらは`boolean`で`True`の場合影をつけます。
- `ColorProps`: `turingColors`というMapでカラーパレットを指定しています。
- `OpacityProps`: `opacity`を指定。
- `VisibilityProps`: `visibility`を指定。

コンポーネントを開発する際は、そのコンポーネントに必要なPropsを組み合わせ、それ特有のスタイルも定義します。例えば、

```
type FlexProps = {
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  wrap?: CSSProperties["flexWrap"];
  gap?: CSSProperties["gap"];
  gapX?: CSSProperties["columnGap"];
  gapY?: CSSProperties["rowGap"];
} & WrapperProps &
  DimensionProps &
  PositionProps &
  PaddingProps &
  MarginProps &
  BorderProps &
  ColorProps &
  ShadowProps &
  OpacityProps;
```

## Layout

### Flex

### Grid

### Container

### Section

### ScrollArea

## Typography

### Text

## UI

### Icon

### IconButton

### Image

### Separator
