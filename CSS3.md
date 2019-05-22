# CSS 弹性盒子

弹性盒子是 CSS3 的一种新的布局模式。

CSS3弹性盒子（Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。

引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对其和分配空白空间。

## 一、CSS3 弹性盒子内容

弹性盒子由弹性容器（Flex container）和弹性子元素（Flex item）组成。

弹性容器通过设置 `display` 属性的值为 `flex` 或 `inline-flex` 将其定义为弹性容器。

弹性容器内包含了一个或多个弹性子元素。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做 cross end。子元素默认沿主轴排列。

## 二、Flex container 常用属性

1. flex-direction
2. flex-wrap
3. flex-flow
4. justify-content
5. align-items
6. align-content

### 1、flex-direction

`flex-direction` 属性指定了弹性子元素在父容器中的位置。

```css
flex-direction: row | row-reverse | column |column-reverse;
```
* row: 横向从左到右排列（左对齐），默认的排列方式。
* row-reverse: 反转横向排列。
* column: 纵向排列。
* column-reverse: 反转纵向排列。

### 2、flex-wrap

`flex-wrap` 属性指定了弹性子元素在父容器中的位置。

```css
flex-wrap: nowrap | wrap | wrap-reverse | initial | inherit;
```
* nowrap: 不换行，子元素可能会溢出容器，默认值。
* wrap: 换行，子元素溢出的部分会被放置到新行。
* wrap-reverse: 反转 `wrap` 排列。

### 3、flex-flow

`flex-flow` 属性是 `flex-direction` 和 `flex-wrap` 属性的复合属性。默认值为 `row nowrap`。

### 4、justify-content

`justify-content` 属性定义了子元素在主轴上的对齐方式。

```css
justify-content: flex-start | flex-end | center | space-between | space-around;
```
* flex-start: 沿主轴左对齐，默认值。
* flex-end: 右对齐。
* center: 居中。
* space-between: 子元素平均分布在主轴上，首尾子元素与边线对齐，相邻子元素的间隔相等。
* space-around: 子元素平均分布在主轴上，每个子元素左右边距相等。

### 5、align-items

`align-items` 属性定义了子元素在交叉轴上的对齐方式。

```css
align-items: flex-start | flex-end | center | baseline | stretch;
```
* flex-start: 沿交叉轴上对齐。
* flex-end: 下对齐。
* center: 居中对齐。
* baseline: 子元素第一行文字的基线对齐。
* stretch: 若子元素未设置高度或设为auto，将占满整个容器的高度，默认值。

### 6、align-content

`align-content` 属性用于修改 `flex-wrap` 属性的行为，类似于 `align-items`，设置各个行的对齐方式。

```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```
* stretch: 各行将会伸展以占用剩余的空间，默认值。
* flex-start: 各行沿起点对齐。
* flex-end: 各行沿终点对齐。
* center: 各行沿中点对齐。
* space-between: 各行在容器中平均分布，首尾子元素与边线对齐。
* space-around: 各行在容器中平均分布，各个子元素的边距相等。

## 三、Flex item 常用属性

设为 Flex 布局之后，子元素的 `float`、`clear` 和 `vertical-align` 属性将失效。

1. order
2. flex-grow
3. flex-shrink
4. flex-basis
5. flex
6. align-self

### 1、order

`order` 属性用整数值来定义子元素的排列顺序，数值小的排在前面，默认为0，可以为负值。

```css
order: <integer>;
```

### 2、flex-grow

`flex-grow` 属性定义子元素的放大比列，默认值为0；

```css
flex-grow: <number>;
```

### 3、flex-shrink

`flex-shrink` 属性定义子元素的缩小比列，默认值为1。

```css
flex-shrink: <number>;
```

### 4、flex-basis

`flex-basis` 属性用于设置或检索弹性盒伸缩基准值，默认值auto。

```css
flex-basis: <number>px;
```

### 5、flex

`flex` 属性用于指定弹性子元素如何分配空间，是 `flex-grow`、`flex-shrink` 和 `flex-basis` 属性的简写属性。

```css
flex: auto | none | initial | inherit | [flex-grow] [flex-shrink] [flex-basis];
```
* auto: 1 1 auto。
* none: 0 0 auto。
* initial: 0 1 auto 默认值。
* inherit: 从父元素继承该属性。

### 6、align-self

`align-self` 属性用于设置子元素自身的对齐方式，可覆盖 `align-items` 属性，默认值为 `auto`，表示继承父元素的 `align-items` 属性，如果没有父元素，则等同于 `stretch`。

```css
align-items: auto | flex-start | flex-end | center | baseline | stretch;
```

# CSS 网格

CSS Grid 布局（又名“网格”），是一个基于二维网格布局的系统。

## 一、CSS 网格布局
定义一个容器元素并设置 `display: grid | inline-grid | subgrid;`，使用 `grid-template-columns` 和 `grid-template-rows` 属性设置网格的列和行的大小，然后使用 `grid-column` 和 `grid-row` 属性将其子元素放入网格之中。

### 网格容器（Grid Container）

当一个元素的属性设置为 `display: grid` 时，它是所有网格项（Grid items）的直接父元素，即网格容器。

`column`、`float`、`clear` 和 `vertical-align` 元素对网格容器不起作用。

### 网格项目 （Grid Item）

网格容器中的子节点（直接后代）。

### 网格线 （Grid Line）

分界线构成了网格的结构。3行3列的网格有4条行网格线和4条列网格线。

### 网格轨道 （Grid Track）

两个相邻网格线之间的空间，即网格的列或行。

### 网格单元格 （Grid Cell）

两个相邻的行和两个相邻的列之间的网格线空间。它是网格的一个“单位”。

### 网格区域 （Grid Area）

网格区域为四条网格线包围的总空间。网格区域可以由任何数量的网格单元组成。

## 二、网格容器属性

1. grid-template-columns
2. grid-template-rows
3. grid-template-areas
4. grid-column-gap
5. grid-row-gap
6. grid-gap
7. justify-items
8. align-items
9. justify-content
10. align-content
11. grid-auto-columns
12. grid-auto-rows
13. grid-auto-flow
14. grid

### grid-template-columns 和 grid-template-rows

定义网格的列和行。这些值的大小表示轨道大小，他们之间的空间表示网格线。
```css
grid-template-columns: <track-size> ... | <line-name> <track-size> ...;

grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
```

网格线会自动分配数值名称，一个数值代表一列。

`fr`: 设置列或行占剩余空间的一个比例。

`auto`: 设置列宽或行高自动等于它的内容的宽度或高度。

`%`: 将列或行调整为它的容器宽度或高度的百分比。
```css
grid-template-columns: 40px auto 1fr 2fr 25%;
grid-template-rows: 25% 100px auto;
```
```css
grid-template-columns: [col1] 50px [col2 col3] 25%;
grid-template-columns: [row1] 25% [row2] 100px; 
```

使用 `repeat` 方法指定行或列的重复次数，后面加上逗号以及需要重复的值。
```css
grid-template-rows: repeat(2, 1fr 50px) 25%;
``` 
等同于
```css
grid-template-rows: 1fr 50px 1fr 50px 25%;
```
重复方法带有自动填充（`auto-fill` 和 `auto-fit`）的功能。它的功能是根据容器的大小，尽可能多地放入指定大小的行或列。可以通过结合 `auto-fill`、`auto-fit` 和 `minmax` 来更灵活地布局。

列的宽度会随容器大小而改变，在可以插入一个60px宽的列之前，当前行的所有列会一直拉伸，如果容器无法使所有网格项放在同一行，余下的网格项将移至新的一行。

`auto-fit` 效果和 `auto-fill` 几乎一样。不同点在于，当容器的大小大于各网格项之和时，`auto-fill` 将会持续地在一端放入空行或空列，使所有网格项挤到另一边；而 `auto-fit` 则不会在一端放入空行或空列，而是会将所有网格项拉伸至合适的大小。
```css
grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));

grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
```

使用 `minmax` 函数限制网格项目的大小，指定网格项允许的尺寸范围。第一列宽度为100px，第二列宽度最小值是50px，最大值是200px。
```css
grid-template-columns: 100px minmax(50px, 200px);
```

### grid-template-areas

定义网格区域名称，从而定义网络模板。每个单词代表一个网格单元格，每对引号代表一行。网格区域重复的名称会导致内容跨越这些单元格。句点 `.` 代表一个空单元格。`none` 表示无网格区域被定义。
```css
grid-template-areas: <grid-area-name> | . | none;
```
```css
grid-template-areas: 
    "header header header"
    "content . advert"
    "footer footer footer";
```

### grid-column-gap、grid-row-gap 和 grid-gap

指定网格线的大小。即在行/列之间设置间距宽度。
```css
grid-column-gap: <line-size>;

grid-row-gap: <line-size>;

grid-gap: <grid-row-gap> <grid-column-gap>;
```

### justify-items 和 align-items

`justify-items` 定义沿列轴对齐网格项中的内容。

`align-items` 定义沿行轴对齐网格项中的内容。

`stretch`: 内容宽度占满整个网格区域（默认值）。
```
justify-items: start | end | center | stretch;

align-items: start | end | center | stretch;
```

### justify-content 和 align-content

如果你的网格项目都是使用像 `px` 这样的非响应式单位来计算的，会出项网格的总大小可能小于网格容器的大小。这时需要设置网格容器内容器的对齐方式。 

`justify-content` 定义沿列轴对齐网格容器。

`align-content` 定义沿行轴对齐网格容器。
```css
justify-content: start | end | center | stretch | space-around | space-between | space-evenly;

align-content: start | end | center | stretch | space-around | space-between | space-evenly;
```

### grid-auto-columns 和 grid-auto-rows

指定任何自动生成的网格轨道（也称为隐式网格轨道）的大小。当显式定位超出定义网格范围的行或列时，将创建隐式网格轨道。
```css
grid-auto-columns: <track-size> ...;

grid-auto-rows: <track-size> ...;
```

### grid-auto-flow

如果有未明确放置在网格上的网格项，则自动布局算法会启动，以自动放置项。

`row`: 告诉自动布局算法依次填充每一行，并根据需要添加新行。

`column`: 告诉自动布局算法依次填充每一列，并根据需要添加新列。

`dense`: 告诉自动布局算法尝试在网格更早的时候填充接下来出现较小的项目留有的空白。请注意，`dense`可能会导致您的项目无序显示。
```css
grid-auto-flow: row | column | row dense | column dense;
```

### grid

在一行声明中设置一下所有属性的简写形式：`grid-template-rows`，`grid-template-columns`，`grid-template-areas`，`grid-auto-rows`，`grid-auto-columns` 以及 `grid-auto-flow`。它将 `grid-column-gap` 和 `grid-row-gap` 属性设置为初始值，即使它们不能由此属性显式去设置。

`none`: 将所有的子属性设置为初始值。

`subgrid`: 将 `grid-template-rows` 和 `grid-template-columns` 属性值设置为 subgrid 其余子属性设置为初始值。

`<grid-template-rows> / <grid-template-columns>`: 将 `grid-template-rows` 和 `grid-template-columns` 分别设置为指定值，其余子属性设置为初始值。

`<grid-auto-flow> [<grid-auto-rows> [/ <grid-auto-columns>]]`: `grid-auto-flow`，`grid-template-rows` 和 `grid-template-columns` 属性分别接收相同的值，如果省略了 `grid-template-columns` 属性，它将设置为 `grid-template-rows` 属性的值。如果两者均被忽略，那么都将被设置为初始值。

```css
grid: none | subgrid | <grid-template-rows> / <grid-template-columns> | <grid-auto-flow> [<grid-auto-rows> [/ <grid-auto-columns>]];
```

## 三、网格项目属性

1. grid-column-start
2. grid-column-end
3. grid-row-start
4. grid-row-end
5. grid-column
6. grid-row
7. grid-area
8. justify-self
9. align-self

### grid-column-start、grid-column-end、grid-row-start、grid-row-end

通过使用特定的网格线确定网格项在网格内的位置。`grid-column-start` / `grid-row-start` 属性表示网格项的网格线的起始位置，`grid-column-end` / `grid-row-end` 属性表示网格项的网格线的终止位置。

如果没有声明 `grid-column-end` / `grid-row-end` 属性，默认情况下网格项的跨度为1。

可以是一个数字来指代相应编号的网格线，或者使用名称指代相应命名的网格线。

`span <number>`: 网格项包含指定数量的网格轨道。

`span <name>`: 网格项包含指定名称网格项的网格线之前的网格轨道。

`auto`: 表明自动定位，自动跨度或者默认跨度为一。
```css
grid-column-start: <number> | <name> | span <number> | span <name> | auto;

grid-column-end: <number> | <name> | span <number> | span <name> | auto;

grid-row-start: <number> | <name> | span <number> | span <name> | auto;

grid-row-end: <number> | <name> | span <number> | span <name> | auto;
```

### grid-column 和 grid-row

`grid-column-start` + `grid-row-start` 和`grid-column-end` + `grid-row-end` 属性分别的简写形式。

`<start-line> / <end-line>`: 每一个属性均接收自定义的一个相同值，包括跨度。
```css
grid-column: <start-line> / <end-line> | <start-line> / span <value>;

grid-row: <start-line> / <end-line> | <start-line> / span <value>;
```

### grid-area

定义网格项的名称。

```css
grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
```

### justify-self 和 align-self

`justify-self` 沿列轴对齐网格项中的内容。

`align-self` 沿行轴对齐网格项中的内容。适

适用于单一网格项中的内容。
```css
justify-self: start | end | center | stretch;

align-self: start | end | center | stretch;
```