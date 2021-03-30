## PivotTable 交叉表

### 基本使用

- 表格渲染上，维度作为 `左表头`，指标作为 `顶表头`。

```jsx
import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    showSubtotal={false}
    meta={[
      { id: 'subs', name: '子公司', isDim: true, isRate: false },
      { id: 'shop', name: '门店', isDim: true, isRate: false },
      { id: 'season', name: '季度', isDim: true, isRate: false },
      { id: 'month', name: '月份', isDim: true, isRate: false },
      { id: 'valueA', name: '指标A', isDim: false, isRate: false },
      { id: 'valueB', name: '指标B', isDim: false, isRate: true },
    ]}
    data={[
      { subs: '上海子公司', shop: '上海大宁店', season: '一季度', month: '2022-01', valueA: 782, valueB: 0.566 },
      { subs: '上海子公司', shop: '上海大宁店', season: '一季度', month: '2022-02', valueA: 856, valueB: 0.403 },
      { subs: '上海子公司', shop: '上海大宁店', season: '一季度', month: '2022-03', valueA: 886, valueB: 0.555 },
      { subs: '上海子公司', shop: '上海大宁店', season: '二季度', month: '2022-04', valueA: 555, valueB: 0.444 },
      { subs: '上海子公司', shop: '上海大宁店', season: '二季度', month: '2022-05', valueA: 444, valueB: 0.333 },
      { subs: '上海子公司', shop: '上海曹家渡店', season: '一季度', month: '2022-01', valueA: 922, valueB: 0.778 },
      { subs: '上海子公司', shop: '上海曹家渡店', season: '一季度', month: '2022-02', valueA: 888, valueB: 0.887 },
      { subs: '上海子公司', shop: '上海曹家渡店', season: '一季度', month: '2022-03', valueA: 879, valueB: 0.870 },
      { subs: '上海子公司', shop: '上海曹家渡店', season: '二季度', month: '2022-04', valueA: 800, valueB: 0.723 },
      { subs: '上海子公司', shop: '上海曹家渡店', season: '二季度', month: '2022-05', valueA: 813, valueB: 0.789 },
      { subs: '浙江子公司', shop: '亲橙里', season: '一季度', month: '2022-01', valueA: 500, valueB: 0.463 },
      { subs: '浙江子公司', shop: '亲橙里', season: '一季度', month: '2022-02', valueA: 833, valueB: 0.456 },
      { subs: '浙江子公司', shop: '亲橙里', season: '一季度', month: '2022-03', valueA: 821, valueB: 0.442 },
      { subs: '浙江子公司', shop: '亲橙里', season: '二季度', month: '2022-04', valueA: 834, valueB: 0.456 },
      { subs: '浙江子公司', shop: '亲橙里', season: '二季度', month: '2022-05', valueA: 803, valueB: 0.700 },
    ]}
  />
);
```

### 单元格自定义渲染

```jsx
import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    showSubtotal
    subtotalText={['总', '小']}
    size="small"
    leftDimensionLength={2}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p style={{
          color: ['red', 'orange', 'yellow', 'green', 'blue'][Object.keys(dimRecord).length],
        }}>{val}</p>
        <p>参数表：</p>
        <p>{JSON.stringify(dimRecord)}</p>
        <p>{JSON.stringify(indId)}</p>
      </div>
    )}
    meta={[
      { id: 'subs', name: '子公司', isDim: true, isRate: false },
      { id: 'shop', name: '门店', isDim: true, isRate: false },
      { id: 'season', name: '季度', isDim: true, isRate: false },
      { id: 'month', name: '月份', isDim: true, isRate: false },
      { id: 'valueA', name: '指标A', isDim: false, isRate: false },
      { id: 'valueB', name: '指标B', isDim: false, isRate: true },
    ]}
    data={[
      { subs: '上海子公司', shop: '上海大宁店', season: '一季度', month: '2022-01', valueA: 782, valueB: 0.566 },
      { subs: '上海子公司', shop: '上海大宁店', season: '一季度', month: '2022-02', valueA: 856, valueB: 0.403 },
      { subs: '上海子公司', shop: '上海大宁店', season: '一季度', month: '2022-03', valueA: 886, valueB: 0.555 },
      { subs: '上海子公司', shop: '上海大宁店', season: '二季度', month: '2022-04', valueA: 555, valueB: 0.444 },
      { subs: '上海子公司', shop: '上海大宁店', season: '二季度', month: '2022-05', valueA: 444, valueB: 0.333 },
      { subs: '上海子公司', shop: '上海曹家渡店', season: '一季度', month: '2022-01', valueA: 922, valueB: 0.778 },
      { subs: '上海子公司', shop: '上海曹家渡店', season: '一季度', month: '2022-02', valueA: 888, valueB: 0.887 },
      { subs: '上海子公司', shop: '上海曹家渡店', season: '一季度', month: '2022-03', valueA: 879, valueB: 0.870 },
      { subs: '上海子公司', shop: '上海曹家渡店', season: '二季度', month: '2022-04', valueA: 800, valueB: 0.723 },
      { subs: '上海子公司', shop: '上海曹家渡店', season: '二季度', month: '2022-05', valueA: 813, valueB: 0.789 },
      { subs: '浙江子公司', shop: '亲橙里', season: '一季度', month: '2022-01', valueA: 500, valueB: 0.463 },
      { subs: '浙江子公司', shop: '亲橙里', season: '一季度', month: '2022-02', valueA: 833, valueB: 0.456 },
      { subs: '浙江子公司', shop: '亲橙里', season: '一季度', month: '2022-03', valueA: 821, valueB: 0.442 },
      { subs: '浙江子公司', shop: '亲橙里', season: '二季度', month: '2022-04', valueA: 834, valueB: 0.456 },
      { subs: '浙江子公司', shop: '亲橙里', season: '二季度', month: '2022-05', valueA: 803, valueB: 0.700 },
    ]}
  />
);
```

### API

<table>
  <tr>
    <th>参数</th>
    <th>说明</th>
    <th>类型</th>
    <th>默认值</th>
  </tr>
  <tr>
    <td>style</td>
    <td>最外层的样式</td>
    <td>React.CSSProperties</td>
    <td></td>
  </tr>
  <tr>
    <td>className</td>
    <td>最外层的类名</td>
    <td>string</td>
    <td>''</td>
  </tr>
  <tr>
    <td>meta</td>
    <td>元数据描述</td>
    <td>IMetaItem[]</td>
    <td>[]</td>
  </tr>
  <tr>
    <td>data</td>
    <td>数据</td>
    <td>IDataItem[]</td>
    <td>[]</td>
  </tr>
  <tr>
    <td>showSubtotal</td>
    <td>是否展示「总计/小计」</td>
    <td>boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>subtotalText</td>
    <td>「总计」的文案</td>
    <td>[string, string]</td>
    <td>['总计', '小计]</td>
  </tr>
  <tr>
    <td>indicatorSide</td>
    <td>指标的展示位置</td>
    <td>'left' | 'top'</td>
    <td>'top'</td>
  </tr>
  <tr>
    <td>leftDimensionLength</td>
    <td>左侧维度放多少个，超出的维度会放到表格顶部</td>
    <td>number</td>
    <td>meta.length</td>
  </tr>
  <tr>
    <td>size</td>
    <td>表格尺寸</td>
    <td>'small' | 'middle' | 'large'</td>
    <td>'small'</td>
  </tr>
  <tr>
    <td>cellRender</td>
    <td>单元格自定义渲染</td>
    <td>(value: any, dimRecord: IDataItem, indId: string) => React.ReactNode</td>
    <td></td>
  </tr>
</table>