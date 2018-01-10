# React Native Easy Grid 🐵
![Master Build Status](https://travis-ci.org/GeekyAnts/react-native-easy-grid.svg?branch=master) <br />


* This version of react-native-easy-grid use glamorous-native

* Implementation of Col and Row is far easier than the original version

* this version has no side effect has that happen with the original release

* I removed the Grid component, which is not usefull with this release


## Installation

```
npm install react-native-easy-grid --save
```

## Usage

### Include the components

```
import { Col, Row } from "react-native-easy-grid";
```

### 1. Two columns (50% and 50%)

```
<Row>
    <Col></Col>
    <Col></Col>
</Row>
```

![col-50-50](Examples/col-50-50.png "Column 50% and 50% example")



> Note: If you don't assign the size property, it defaults to equal width (or height) with its siblings

### 2. Two rows

```
<Col>
    <Row></Row>
    <Row></Row>
</Col>
```

![row-50-50](Examples/row-50-50.png "Row 50% and 50% example")


### 3. Two rows (75% and 25%)

```
<Col>
    <Row size={75}></Row>
    <Row size={25}></Row>
</Col>
```

This is exactly same as

```
<Col>
    <Row size={3}></Row>
    <Row size={1}></Row>
</Col>
```

![row-75-25](Examples/row-75-25.png "Row 75% and 25% example")

> Same concept applies to `<Col />`


### 4. Three columns (33.33% each)

```
<Row>
    <Col></Col>
    <Col></Col>
    <Col></Col>
</Row>
```
![col-33-33-33](Examples/col-33-33-33.png "Column 33.33% each")

### 5. Three rows (50%, 25% and 25%)

```
<Col>
    <Row size={2}></Row>
    <Row size={1}></Row>
    <Row size={1}></Row>
</Col>
```

![row-50-25-25](Examples/row-50-25-25.png "Row 50%, 25% and 50% example")

### 6. Nested Layout or Grid

<table width="100" height="100">
    <tr>
        <td rowspan="2" bgcolor="red" width="50">1</td>
        <td bgcolor="yellow" width="50" height="50">2</td>
    </tr>
    <tr>
        <td bgcolor="blue">3</td>
    </tr>
</table>

```
<Row>
    <Col>
        <Text>1</Text>
    </Col>
    <Col>
        <Row>
            <Text>2</Text>
        </Row>
        <Row>
            <Text>3</Text>
        </Row>
    </Col>
</Row>
```

![complex](Examples/complex.png "Complex and Nested Layouts")



### 7. Fixed width and fluid width combination

```
<Row>
    <Col style={{ width: 40 }}>
        <Text>Fixed width</Text>
    </Col>
    <Col>
        <Text>Fluid width</Text>
    </Col>
</Row>
```

![col-fluid-fixed.png](Examples/col-fluid-fixed.png "Column fluid and fixed example")


### 8. Fixed height and fluid height combination

```
<Row>
    <Row style={{ height: 40 }}>
        <Text>Fixed width</Text>
    </Row>
    <Row>
        <Text>Fluid width</Text>
    </Row>
</Row>
```

Do you think anything could be simpler than that? This repo is part of our bigger project called [NativeBase.io](http://nativebase.io). Do check that!

# Important note about usage with `<ScrollView />`

> Note: If you're using `<Row />` inside a `<ScrollView />`, the height of the <Row /> component would be flexible according to the content, though you can always apply the `height` styling.
