# markdown-benchmarks

## Results

These benchmarks were done on a MacBook Air M1, 2020 (8 GB) macOS Tahoe 26.5.2. Broadly, in every category, markdown-to-jsx ranked first by a large margin, followed by comrak-wasm, @tanstack/markdown.

- Default (1 large file, 1 medium file, 1 small file)
- Large (1 large file)
- Small (1 small file)
- Many (40 various files)

| Library               | Default (op/s) | Large (op/s) | Small (ops/s) | Many (op/s) |
| --------------------- | -------------- | ------------ | ------------- | ----------- |
| markdown-to-jsx       | 362            | 1469         | 91609         | 28          |
| comrak-wasm           | 217            | 996          | 59848         | 21          |
| tanstack-markdown     | 168            | 742          | 56208         | 15          |
| marked                | 139            | 627          | 43638         | 11          |
| comrak                | 109            | 767          | 44199         | 11          |
| markdown-it           | 76             | 380          | 33241         | 7           |
| micromark             | 12             | 70           | 6875          | 1           |
| unified/remark/rehype | 10             | 59           | 5754          | 1           |
| mdast/hast            | 9              | 58           | 5647          | 1           |

### Data

<table>
  <thead>
    <tr>
      <th>Benchmark</th>
      <th>Index</th>
      <th>Task name</th>
      <th>Latency avg (ns)</th>
      <th>Latency med (ns)</th>
      <th>Throughput avg (ops/s)</th>
      <th>Throughput med (ops/s)</th>
      <th>Samples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="11">default-no-warmup</td>
      <td>0</td>
      <td>comrak-wasm</td>
      <td>4627647 ± 0.29%</td>
      <td>4605583 ± 17292</td>
      <td>216 ± 0.25%</td>
      <td>217 ± 1</td>
      <td>217</td>
    </tr>
    <tr>
      <td>1</td>
      <td>comrak</td>
      <td>9268016 ± 0.60%</td>
      <td>9210645 ± 130958</td>
      <td>108 ± 0.53%</td>
      <td>109 ± 2</td>
      <td>108</td>
    </tr>
    <tr>
      <td>2</td>
      <td>markdown-it</td>
      <td>13337918 ± 1.62%</td>
      <td>13207791 ± 739082</td>
      <td>75 ± 1.58%</td>
      <td>76 ± 4</td>
      <td>75</td>
    </tr>
    <tr>
      <td>3</td>
      <td>markdown-to-jsx</td>
      <td>2883977 ± 1.49%</td>
      <td>2759541 ± 49666</td>
      <td>350 ± 0.83%</td>
      <td>362 ± 7</td>
      <td>347</td>
    </tr>
    <tr>
      <td>4</td>
      <td>markdown-to-mdast-to-hast-to-html</td>
      <td>114935410 ± 5.30%</td>
      <td>109819146 ± 3591917</td>
      <td>9 ± 2.60%</td>
      <td>9 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>5</td>
      <td>marked-async</td>
      <td>7506130 ± 0.82%</td>
      <td>7290021 ± 99208</td>
      <td>134 ± 0.79%</td>
      <td>137 ± 2</td>
      <td>134</td>
    </tr>
    <tr>
      <td>6</td>
      <td>marked-sync</td>
      <td>7428675 ± 0.72%</td>
      <td>7208125 ± 45542</td>
      <td>135 ± 0.70%</td>
      <td>139 ± 1</td>
      <td>135</td>
    </tr>
    <tr>
      <td>7</td>
      <td>micromark</td>
      <td>87967095 ± 2.87%</td>
      <td>85728251 ± 2787709</td>
      <td>11 ± 1.97%</td>
      <td>12 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>8</td>
      <td>tanstack-markdown</td>
      <td>5880327 ± 0.71%</td>
      <td>5966917 ± 237667</td>
      <td>170 ± 0.68%</td>
      <td>168 ± 7</td>
      <td>171</td>
    </tr>
    <tr>
      <td>9</td>
      <td>unified-remark-rehype-async</td>
      <td>111198173 ± 3.62%</td>
      <td>106913646 ± 2820375</td>
      <td>9 ± 2.14%</td>
      <td>9 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>10</td>
      <td>unified-remark-rehype-sync</td>
      <td>104612670 ± 0.84%</td>
      <td>103828500 ± 1801041</td>
      <td>10 ± 0.81%</td>
      <td>10 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td rowspan="11">default</td>
      <td>0</td>
      <td>comrak-wasm</td>
      <td>4717185 ± 0.38%</td>
      <td>4676334 ± 47542</td>
      <td>212 ± 0.36%</td>
      <td>214 ± 2</td>
      <td>213</td>
    </tr>
    <tr>
      <td>1</td>
      <td>comrak</td>
      <td>9219524 ± 0.37%</td>
      <td>9152250 ± 66459</td>
      <td>109 ± 0.36%</td>
      <td>109 ± 1</td>
      <td>109</td>
    </tr>
    <tr>
      <td>2</td>
      <td>markdown-it</td>
      <td>13118233 ± 1.75%</td>
      <td>12810292 ± 561625</td>
      <td>77 ± 1.59%</td>
      <td>78 ± 4</td>
      <td>77</td>
    </tr>
    <tr>
      <td>3</td>
      <td>markdown-to-jsx</td>
      <td>2871794 ± 0.75%</td>
      <td>2779084 ± 63126</td>
      <td>350 ± 0.68%</td>
      <td>360 ± 8</td>
      <td>349</td>
    </tr>
    <tr>
      <td>4</td>
      <td>markdown-to-mdast-to-hast-to-html</td>
      <td>110480437 ± 3.97%</td>
      <td>106627625 ± 3461792</td>
      <td>9 ± 2.35%</td>
      <td>9 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>5</td>
      <td>marked-async</td>
      <td>7622845 ± 1.03%</td>
      <td>7509813 ± 267500</td>
      <td>132 ± 0.96%</td>
      <td>133 ± 5</td>
      <td>132</td>
    </tr>
    <tr>
      <td>6</td>
      <td>marked-sync</td>
      <td>7778734 ± 1.15%</td>
      <td>7677583 ± 355417</td>
      <td>129 ± 1.09%</td>
      <td>130 ± 6</td>
      <td>129</td>
    </tr>
    <tr>
      <td>7</td>
      <td>micromark</td>
      <td>86322702 ± 1.54%</td>
      <td>84666270 ± 3071062</td>
      <td>12 ± 1.44%</td>
      <td>12 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>8</td>
      <td>tanstack-markdown</td>
      <td>5900463 ± 0.85%</td>
      <td>5995479 ± 255812</td>
      <td>170 ± 0.74%</td>
      <td>167 ± 7</td>
      <td>170</td>
    </tr>
    <tr>
      <td>9</td>
      <td>unified-remark-rehype-async</td>
      <td>110536259 ± 4.65%</td>
      <td>105875208 ± 2969521</td>
      <td>9 ± 2.65%</td>
      <td>9 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>10</td>
      <td>unified-remark-rehype-sync</td>
      <td>106783612 ± 1.20%</td>
      <td>105135937 ± 1878104</td>
      <td>9 ± 1.12%</td>
      <td>10 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td rowspan="11">large</td>
      <td>0</td>
      <td>comrak-wasm</td>
      <td>1007258 ± 0.09%</td>
      <td>1004041 ± 2416.0</td>
      <td>993 ± 0.08%</td>
      <td>996 ± 2</td>
      <td>993</td>
    </tr>
    <tr>
      <td>1</td>
      <td>comrak</td>
      <td>1314138 ± 0.19%</td>
      <td>1303667 ± 3333.0</td>
      <td>761 ± 0.16%</td>
      <td>767 ± 2</td>
      <td>761</td>
    </tr>
    <tr>
      <td>2</td>
      <td>markdown-it</td>
      <td>2687670 ± 0.58%</td>
      <td>2631500 ± 35292</td>
      <td>373 ± 0.49%</td>
      <td>380 ± 5</td>
      <td>373</td>
    </tr>
    <tr>
      <td>3</td>
      <td>markdown-to-jsx</td>
      <td>702453 ± 0.57%</td>
      <td>680854 ± 5729.0</td>
      <td>1435 ± 0.38%</td>
      <td>1469 ± 12</td>
      <td>1424</td>
    </tr>
    <tr>
      <td>4</td>
      <td>markdown-to-mdast-to-hast-to-html</td>
      <td>17328998 ± 1.54%</td>
      <td>17108813 ± 619042</td>
      <td>58 ± 1.42%</td>
      <td>58 ± 2</td>
      <td>64</td>
    </tr>
    <tr>
      <td>5</td>
      <td>marked-async</td>
      <td>1629526 ± 0.66%</td>
      <td>1595730 ± 8250.5</td>
      <td>616 ± 0.41%</td>
      <td>627 ± 3</td>
      <td>614</td>
    </tr>
    <tr>
      <td>6</td>
      <td>marked-sync</td>
      <td>1637027 ± 0.36%</td>
      <td>1617250 ± 8209.0</td>
      <td>612 ± 0.32%</td>
      <td>618 ± 3</td>
      <td>611</td>
    </tr>
    <tr>
      <td>7</td>
      <td>micromark</td>
      <td>14900265 ± 2.51%</td>
      <td>14302563 ± 642084</td>
      <td>68 ± 2.00%</td>
      <td>70 ± 3</td>
      <td>68</td>
    </tr>
    <tr>
      <td>8</td>
      <td>tanstack-markdown</td>
      <td>1392914 ± 0.59%</td>
      <td>1348271 ± 6729.0</td>
      <td>722 ± 0.50%</td>
      <td>742 ± 4</td>
      <td>718</td>
    </tr>
    <tr>
      <td>9</td>
      <td>unified-remark-rehype-async</td>
      <td>17141097 ± 1.05%</td>
      <td>17014812 ± 456916</td>
      <td>58 ± 1.01%</td>
      <td>59 ± 2</td>
      <td>64</td>
    </tr>
    <tr>
      <td>10</td>
      <td>unified-remark-rehype-sync</td>
      <td>16868956 ± 0.68%</td>
      <td>16824083 ± 379000</td>
      <td>59 ± 0.68%</td>
      <td>59 ± 1</td>
      <td>64</td>
    </tr>
    <tr>
      <td rowspan="11">medium</td>
      <td>0</td>
      <td>comrak-wasm</td>
      <td>47298 ± 0.16%</td>
      <td>46750 ± 292.00</td>
      <td>21242 ± 0.06%</td>
      <td>21390 ± 134</td>
      <td>21143</td>
    </tr>
    <tr>
      <td>1</td>
      <td>comrak</td>
      <td>42491 ± 0.13%</td>
      <td>42000 ± 208.00</td>
      <td>23615 ± 0.05%</td>
      <td>23810 ± 119</td>
      <td>23535</td>
    </tr>
    <tr>
      <td>2</td>
      <td>markdown-it</td>
      <td>116435 ± 0.25%</td>
      <td>114791 ± 458.00</td>
      <td>8633 ± 0.10%</td>
      <td>8711 ± 35</td>
      <td>8589</td>
    </tr>
    <tr>
      <td>3</td>
      <td>markdown-to-jsx</td>
      <td>33908 ± 0.40%</td>
      <td>33000 ± 334.00</td>
      <td>29982 ± 0.07%</td>
      <td>30303 ± 310</td>
      <td>29492</td>
    </tr>
    <tr>
      <td>4</td>
      <td>markdown-to-mdast-to-hast-to-html</td>
      <td>607312 ± 0.77%</td>
      <td>582541 ± 12999</td>
      <td>1668 ± 0.43%</td>
      <td>1717 ± 39</td>
      <td>1647</td>
    </tr>
    <tr>
      <td>5</td>
      <td>marked-async</td>
      <td>73601 ± 0.26%</td>
      <td>72375 ± 375.00</td>
      <td>13685 ± 0.08%</td>
      <td>13817 ± 72</td>
      <td>13587</td>
    </tr>
    <tr>
      <td>6</td>
      <td>marked-sync</td>
      <td>73576 ± 0.26%</td>
      <td>72709 ± 583.00</td>
      <td>13687 ± 0.08%</td>
      <td>13753 ± 109</td>
      <td>13592</td>
    </tr>
    <tr>
      <td>7</td>
      <td>micromark</td>
      <td>507243 ± 0.51%</td>
      <td>490708 ± 3375.0</td>
      <td>1989 ± 0.35%</td>
      <td>2038 ± 14</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>8</td>
      <td>tanstack-markdown</td>
      <td>61234 ± 0.36%</td>
      <td>59792 ± 375.00</td>
      <td>16555 ± 0.09%</td>
      <td>16725 ± 104</td>
      <td>16331</td>
    </tr>
    <tr>
      <td>9</td>
      <td>unified-remark-rehype-async</td>
      <td>601257 ± 0.58%</td>
      <td>578417 ± 7729.0</td>
      <td>1680 ± 0.41%</td>
      <td>1729 ± 23</td>
      <td>1664</td>
    </tr>
    <tr>
      <td>10</td>
      <td>unified-remark-rehype-sync</td>
      <td>605199 ± 0.59%</td>
      <td>581250 ± 9958.0</td>
      <td>1670 ± 0.42%</td>
      <td>1720 ± 30</td>
      <td>1653</td>
    </tr>
    <tr>
      <td rowspan="11">repeated</td>
      <td>0</td>
      <td>comrak-wasm</td>
      <td>1231048 ± 0.12%</td>
      <td>1226333 ± 3750.0</td>
      <td>813 ± 0.10%</td>
      <td>815 ± 3</td>
      <td>813</td>
    </tr>
    <tr>
      <td>1</td>
      <td>comrak</td>
      <td>1764391 ± 0.15%</td>
      <td>1759917 ± 8001.0</td>
      <td>567 ± 0.14%</td>
      <td>568 ± 3</td>
      <td>567</td>
    </tr>
    <tr>
      <td>2</td>
      <td>markdown-it</td>
      <td>2373591 ± 0.31%</td>
      <td>2346313 ± 7791.0</td>
      <td>422 ± 0.28%</td>
      <td>426 ± 1</td>
      <td>422</td>
    </tr>
    <tr>
      <td>3</td>
      <td>markdown-to-jsx</td>
      <td>598819 ± 0.41%</td>
      <td>585584 ± 2999.5</td>
      <td>1679 ± 0.30%</td>
      <td>1708 ± 9</td>
      <td>1670</td>
    </tr>
    <tr>
      <td>4</td>
      <td>markdown-to-mdast-to-hast-to-html</td>
      <td>17369827 ± 0.37%</td>
      <td>17387750 ± 185833</td>
      <td>58 ± 0.37%</td>
      <td>58 ± 1</td>
      <td>64</td>
    </tr>
    <tr>
      <td>5</td>
      <td>marked-async</td>
      <td>1672988 ± 0.41%</td>
      <td>1647729 ± 5646.0</td>
      <td>599 ± 0.34%</td>
      <td>607 ± 2</td>
      <td>598</td>
    </tr>
    <tr>
      <td>6</td>
      <td>marked-sync</td>
      <td>1684835 ± 0.32%</td>
      <td>1664542 ± 5251.0</td>
      <td>594 ± 0.28%</td>
      <td>601 ± 2</td>
      <td>594</td>
    </tr>
    <tr>
      <td>7</td>
      <td>micromark</td>
      <td>14233754 ± 0.34%</td>
      <td>14192458 ± 150374</td>
      <td>70 ± 0.34%</td>
      <td>70 ± 1</td>
      <td>71</td>
    </tr>
    <tr>
      <td>8</td>
      <td>tanstack-markdown</td>
      <td>1251263 ± 0.38%</td>
      <td>1228375 ± 8291.0</td>
      <td>801 ± 0.33%</td>
      <td>814 ± 6</td>
      <td>800</td>
    </tr>
    <tr>
      <td>9</td>
      <td>unified-remark-rehype-async</td>
      <td>17506128 ± 0.39%</td>
      <td>17464896 ± 160854</td>
      <td>57 ± 0.39%</td>
      <td>57 ± 1</td>
      <td>64</td>
    </tr>
    <tr>
      <td>10</td>
      <td>unified-remark-rehype-sync</td>
      <td>17395620 ± 0.30%</td>
      <td>17384917 ± 160187</td>
      <td>57 ± 0.30%</td>
      <td>58 ± 1</td>
      <td>64</td>
    </tr>
    <tr>
      <td rowspan="11">small</td>
      <td>0</td>
      <td>comrak-wasm</td>
      <td>17084 ± 0.76%</td>
      <td>16709 ± 125.00</td>
      <td>59332 ± 0.04%</td>
      <td>59848 ± 451</td>
      <td>58533</td>
    </tr>
    <tr>
      <td>1</td>
      <td>comrak</td>
      <td>23213 ± 0.86%</td>
      <td>22625 ± 208.00</td>
      <td>43810 ± 0.04%</td>
      <td>44199 ± 403</td>
      <td>43080</td>
    </tr>
    <tr>
      <td>2</td>
      <td>markdown-it</td>
      <td>30532 ± 0.61%</td>
      <td>30083 ± 376.00</td>
      <td>33091 ± 0.05%</td>
      <td>33241 ± 420</td>
      <td>32753</td>
    </tr>
    <tr>
      <td>3</td>
      <td>markdown-to-jsx</td>
      <td>11224 ± 0.28%</td>
      <td>10916 ± 166.00</td>
      <td>90517 ± 0.04%</td>
      <td>91609 ± 1415</td>
      <td>89096</td>
    </tr>
    <tr>
      <td>4</td>
      <td>markdown-to-mdast-to-hast-to-html</td>
      <td>190018 ± 0.68%</td>
      <td>177084 ± 4750.0</td>
      <td>5402 ± 0.32%</td>
      <td>5647 ± 153</td>
      <td>5263</td>
    </tr>
    <tr>
      <td>5</td>
      <td>marked-async</td>
      <td>23965 ± 0.41%</td>
      <td>23250 ± 250.00</td>
      <td>42377 ± 0.06%</td>
      <td>43011 ± 468</td>
      <td>41728</td>
    </tr>
    <tr>
      <td>6</td>
      <td>marked-sync</td>
      <td>23682 ± 0.64%</td>
      <td>22916 ± 207.00</td>
      <td>43053 ± 0.06%</td>
      <td>43638 ± 394</td>
      <td>42227</td>
    </tr>
    <tr>
      <td>7</td>
      <td>micromark</td>
      <td>154379 ± 1.06%</td>
      <td>145458 ± 1834.0</td>
      <td>6681 ± 0.24%</td>
      <td>6875 ± 88</td>
      <td>6478</td>
    </tr>
    <tr>
      <td>8</td>
      <td>tanstack-markdown</td>
      <td>18435 ± 0.32%</td>
      <td>17791 ± 249.00</td>
      <td>55353 ± 0.06%</td>
      <td>56208 ± 782</td>
      <td>54246</td>
    </tr>
    <tr>
      <td>9</td>
      <td>unified-remark-rehype-async</td>
      <td>186103 ± 0.56%</td>
      <td>175500 ± 3229.5</td>
      <td>5489 ± 0.29%</td>
      <td>5698 ± 106</td>
      <td>5374</td>
    </tr>
    <tr>
      <td>10</td>
      <td>unified-remark-rehype-sync</td>
      <td>182019 ± 0.49%</td>
      <td>173792 ± 2375.0</td>
      <td>5587 ± 0.25%</td>
      <td>5754 ± 79</td>
      <td>5494</td>
    </tr>
    <tr>
      <td rowspan="11">many</td>
      <td>0</td>
      <td>comrak-wasm</td>
      <td>47792133 ± 1.11%</td>
      <td>46907917 ± 986501</td>
      <td>21 ± 1.04%</td>
      <td>21 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>1</td>
      <td>comrak</td>
      <td>91307241 ± 1.32%</td>
      <td>90524187 ± 309833</td>
      <td>11 ± 0.95%</td>
      <td>11 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>2</td>
      <td>markdown-it</td>
      <td>146365506 ± 1.82%</td>
      <td>143927626 ± 2182709</td>
      <td>7 ± 1.36%</td>
      <td>7 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>3</td>
      <td>markdown-to-jsx</td>
      <td>37249512 ± 1.94%</td>
      <td>35882376 ± 1912397</td>
      <td>27 ± 1.89%</td>
      <td>28 ± 2</td>
      <td>64</td>
    </tr>
    <tr>
      <td>4</td>
      <td>markdown-to-mdast-to-hast-to-html</td>
      <td>1237919220 ± 4.86%</td>
      <td>1169796751 ± 71909041</td>
      <td>1 ± 3.43%</td>
      <td>1 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>5</td>
      <td>marked-async</td>
      <td>115640407 ± 6.33%</td>
      <td>103798562 ± 5798146</td>
      <td>9 ± 4.59%</td>
      <td>10 ± 1</td>
      <td>64</td>
    </tr>
    <tr>
      <td>6</td>
      <td>marked-sync</td>
      <td>92315995 ± 2.40%</td>
      <td>90193334 ± 2975437</td>
      <td>11 ± 1.92%</td>
      <td>11 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>7</td>
      <td>micromark</td>
      <td>913713851 ± 2.08%</td>
      <td>889439042 ± 22530917</td>
      <td>1 ± 1.82%</td>
      <td>1 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>8</td>
      <td>tanstack-markdown</td>
      <td>66715953 ± 3.44%</td>
      <td>64524000 ± 2535646</td>
      <td>15 ± 2.29%</td>
      <td>15 ± 1</td>
      <td>64</td>
    </tr>
    <tr>
      <td>9</td>
      <td>unified-remark-rehype-async</td>
      <td>1249150588 ± 3.10%</td>
      <td>1210172083 ± 76944208</td>
      <td>1 ± 2.57%</td>
      <td>1 ± 0</td>
      <td>64</td>
    </tr>
    <tr>
      <td>10</td>
      <td>unified-remark-rehype-sync</td>
      <td>1245804712 ± 2.38%</td>
      <td>1222546230 ± 78552124</td>
      <td>1 ± 2.21%</td>
      <td>1 ± 0</td>
      <td>64</td>
    </tr>
  </tbody>
</table>
