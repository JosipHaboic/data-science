<html><head><meta charset="utf-8"/><title>Test Report</title><style type="text/css">html, body {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1rem;
	margin: 0;
	padding: 0;
	color: #333;
}
body {
	padding: 1rem;
	font-size: 0.85rem;
}
header {
	display: flex;
	align-items: center;
}
#title {
	margin: 0;
	flex-grow: 1;
}
#logo {
	height: 4rem;
}
#timestamp {
	font-weight: bold;
	color: #666;
	margin-bottom: 0.5rem;
}
#summary {
	color: #999;
	margin-bottom: 1rem;
}
.suite-info {
	padding: 1rem;
	background-color: #eee;
	border-bottom: 2px solid #999;
	color: #999;
	display: flex;
	align-items: center;
}
.suite-info .suite-path {
	font-weight: bold;
	word-break: break-all;
	flex-grow: 1;
}
.suite-info .suite-time {
	margin-left: 0.5rem;
	padding: 0.2rem 0.3rem;
	font-size: 0.75rem;
}
.suite-info .suite-time.warn {
	background-color: #D8000C;
	color: #fff;
}
.suite-table {
	width: 100%;
	font-size: 0.85rem;
	margin-bottom: 1em;
}
.suite-table td {
	padding: 0.5rem;
}
.suite-table tr.passed {
	background-color: #DFF2BF;
	color: #4F8A10;
}
.suite-table tr.pending {
	background-color: #FEEFB3;
	color: #9F6000;
}
.suite-table tr.failed {
	background-color: #FFBABA;
	color: #D8000C;
}
.suite-table td {
	font-size: 0.85rem;
	border-bottom: 1px solid #aaa;
	vertical-align: top;
}
.suite-table td.suite {
	font-weight: bold;
	width: 20%;
}
.suite-table td.test {
	font-style: italic;
	width: 60%;
}
.suite-table td.test .failureMsg {
	font-size: 1rem;
	white-space: pre-wrap;
	white-space: -moz-pre-wrap;
	white-space: -pre-wrap;
	white-space: -o-pre-wrap;
	word-wrap: break-word;
}
.suite-table td.result {
	width: 20%;
	text-align: right;
}

/* CONSOLE LOGS */
.suite-consolelog {
	margin-bottom: 2rem;
	padding: 1rem;
	background-color: #efefef;
}
.suite-consolelog-header {
	font-weight: bold;
}
.suite-consolelog-item {
	padding: 0.5rem;
}
.suite-consolelog-item pre {
	margin: 0;
}
.suite-consolelog-item-origin {
	color: #777;
	font-weight: bold;
}
.suite-consolelog-item-message {
	color: #000;
	font-size: 1rem;
	padding: 0 0.5rem;
}
</style></head><header><h1 id="title">Test Report</h1></header><div id="metadata-container"><div id="timestamp">Start: 2018-09-28 12:53:42</div><div id="summary">
				76 tests --
				76 passed /
				0 failed /
				0 pending
			</div></div><div class="suite-info"><div class="suite-path">D:\Workbench\WORKDESK\data-science\__tests__\statistics\dispersion.test.ts</div><div class="suite-time">4.877s</div></div><table class="suite-table" cellspacing="0" cellpadding="0"><tr class="passed"><td class="suite"/><td class="test">function range: throws an TypeError when not passed any data</td><td class="result">passed in 0.016s</td></tr><tr class="passed"><td class="suite"/><td class="test">function range: returns -Infinity when passed empty list</td><td class="result">passed in 0.016s</td></tr><tr class="passed"><td class="suite"/><td class="test">function range: returns 2 from list of [1, 2, 3]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function standardDeviation: returns 0 when passed 0</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function standardDeviation: returns 2 from list of [1, 2, 3]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function Population:variance throws an TypeError when not passed any data</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function Population:variance returns ~ 2.917 when passed [1, 2, 3, 4, 5, 6]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function Sample:variance throws an TypeError when not passed any data</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function Sample:variance returns ~ 2.917 when passed [1, 2, 3, 4, 5, 6]</td><td class="result">passed in 0s</td></tr></table><div class="suite-info"><div class="suite-path">D:\Workbench\WORKDESK\data-science\__tests__\transform\filter.test.ts</div><div class="suite-time">4.884s</div></div><table class="suite-table" cellspacing="0" cellpadding="0"><tr class="passed"><td class="suite"/><td class="test">filter:filterZero should throw TypeError when not passed any data</td><td class="result">passed in 0.015s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterZero should return [-1, 1] when passed data [-1, 0, 1]</td><td class="result">passed in 0.016s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterZero should return [] when passed data [0, 0, 0]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterZero should return [1, 1, 1] when passed data [1, 1, 1]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterNegative should throw TypeError when not passed any data</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterNegative should return [1, 1, 1] when passed data [1, 1, 1]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterNegative should return [0, 0, 0] when passed data [0, 0, 0]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterNegative should return [] when passed data [-1, -1, -1]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterPositive should throw TypeError when not passed any data</td><td class="result">passed in 0.016s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterPositive should return [] when passed data [1, 1, 1]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterPositive should return [0, 0, 0] when passed data [0, 0, 0]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterPositive should return [-1, -1, -1] when passed data [-1, -1, -1]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterFalse should throw TypeError when not passed any data</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterFalse should return [] when passed data [false, false, false]</td><td class="result">passed in 0.015s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterFalse should return [true, true, true] when passed data [true, true, true]</td><td class="result">passed in 0.002s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterFalse should return [false, true] when passed data [false, true]</td><td class="result">passed in 0.002s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterTrue should throw TypeError when not passed any data</td><td class="result">passed in 0.002s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterTrue should return [] when passed data [true, true, true]</td><td class="result">passed in 0.002s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterTrue should return [false, false, false] when passed data [false, false, false]</td><td class="result">passed in 0.001s</td></tr><tr class="passed"><td class="suite"/><td class="test">filter:filterTrue should return [false, true] when passed data [false, true]</td><td class="result">passed in 0.002s</td></tr></table><div class="suite-info"><div class="suite-path">D:\Workbench\WORKDESK\data-science\__tests__\transform\map.test.ts</div><div class="suite-time">0.464s</div></div><table class="suite-table" cellspacing="0" cellpadding="0"><tr class="passed"><td class="suite"/><td class="test">map:round should throw TypeError when not passed any data</td><td class="result">passed in 0.009s</td></tr><tr class="passed"><td class="suite"/><td class="test">map:round should return [1, 2, 2] when passed data [1.25, 1.5, 1.75]</td><td class="result">passed in 0.008s</td></tr><tr class="passed"><td class="suite"/><td class="test">map:normalize should throw TypeError when not passed any data</td><td class="result">passed in 0.002s</td></tr><tr class="passed"><td class="suite"/><td class="test">map:normalize should return [1, 2, 3] when passed data [0.2672612419124244, 0.5345224838248488, 0.8017837257372732]</td><td class="result">passed in 0.004s</td></tr></table><div class="suite-info"><div class="suite-path">D:\Workbench\WORKDESK\data-science\__tests__\statistics\summary.test.ts</div><div class="suite-time">4.973s</div></div><table class="suite-table" cellspacing="0" cellpadding="0"><tr class="passed"><td class="suite"/><td class="test">function sum: throws TypeError when not passed any data</td><td class="result">passed in 0.015s</td></tr><tr class="passed"><td class="suite"/><td class="test">function sum: returns 6 from list of [1, 2, 3]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function arithmeticMean: throws TypeError when not passed any data</td><td class="result">passed in 0.016s</td></tr><tr class="passed"><td class="suite"/><td class="test">function arithmeticMean: returns 2 from list of [1, 2, 3]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function median: throws TypeError when not passed any data</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function median: returns 2 from list of [1, 2, 3]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function median: returns 2.5 from list of [1, 2, 3, 4]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function mode: throws TypeError when not passed any data</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function mode: returns {"1": 1, "2": 2} from list of [1, 2, 2]</td><td class="result">passed in 0.015s</td></tr><tr class="passed"><td class="suite"/><td class="test">function mode: returns {"1": 1, "2": 2} from list of [1, 2, 2]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function mode: returns {"1": 1, "2": 2} from list of [1, 2, 2]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function midrange: throws TypeError when not passed any data</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function midrange: returns 2 from list of [1, 2, 3]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function geometricMean: throws TypeError when not passed any data</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function geometricMean: returns 1.8171205928321 from list of [1, 2, 3]</td><td class="result">passed in 0.016s</td></tr><tr class="passed"><td class="suite"/><td class="test">function harmonicMean: throws TypeError when not passed any data</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function harmonicMean: returns 1.6363636363636 from list of [1, 2, 3]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function summary: throws TypeError when not passed any data</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function summary: returns string when passed date [1, 2, 3]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function magnitude: throws TypeError when not passed any data</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function magnitude: returns 3.7416573867739413 from list of [1, 2, 3]</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function magnitude: returns 0 from list of [0, 0, 0]</td><td class="result">passed in 0.016s</td></tr></table><div class="suite-info"><div class="suite-path">D:\Workbench\WORKDESK\data-science\__tests__\random\range.test.ts</div><div class="suite-time">0.39s</div></div><table class="suite-table" cellspacing="0" cellpadding="0"><tr class="passed"><td class="suite"/><td class="test">function range: returns 10 random numbers in range [0 ... 1]</td><td class="result">passed in 0.009s</td></tr><tr class="passed"><td class="suite"/><td class="test">function range: returns 5 random numbers in range [1 ... 10]</td><td class="result">passed in 0.003s</td></tr><tr class="passed"><td class="suite"/><td class="test">function range: returns 1 random number in range [1 ... 10]</td><td class="result">passed in 0.003s</td></tr><tr class="passed"><td class="suite"/><td class="test">function range: returns 1 random numbers in range [10 ... 20]</td><td class="result">passed in 0.009s</td></tr><tr class="passed"><td class="suite"/><td class="test">function range: returns 1 random numbers in range [-10 ... 0]</td><td class="result">passed in 0.002s</td></tr><tr class="passed"><td class="suite"/><td class="test">function range: returns 1 random numbers in range [-10 ... 0]</td><td class="result">passed in 0.003s</td></tr></table><div class="suite-info"><div class="suite-path">D:\Workbench\WORKDESK\data-science\__tests__\transform\bin.test.ts</div><div class="suite-time">0.4s</div></div><table class="suite-table" cellspacing="0" cellpadding="0"><tr class="passed"><td class="suite"/><td class="test">function bin.Unsupervised throws TypeError when not passed any param</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function bin.Unsupervised returns [[1, 2], [3, 4]] when passed data=1,2,3,4, k=2 </td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function bin.Unsupervised returns [[1, 2], [3, 4, 5]] when passed data=1,2,3,4,5, k=2 </td><td class="result">passed in 0.015s</td></tr><tr class="passed"><td class="suite"/><td class="test">function bin.Unsupervised returns [[1, 2],[3], [4]] when passed data=1,2,3,4, k=3 </td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">function bin.Unsupervised returns [[1, 2], [3, 4], [5]] when passed data=1,2,3,4,5, k=3 </td><td class="result">passed in 0s</td></tr></table><div class="suite-info"><div class="suite-path">D:\Workbench\WORKDESK\data-science\__tests__\algebra\sequence.test.ts</div><div class="suite-time">0.379s</div></div><table class="suite-table" cellspacing="0" cellpadding="0"><tr class="passed"><td class="suite"/><td class="test">sequnce:arithmetic - return [1, 2, 3] when (start=1, difference=1, n=3)</td><td class="result">passed in 0.008s</td></tr><tr class="passed"><td class="suite"/><td class="test">sequnce:linear - return [1, 2, 3] when (start=1, intercept=1, n=3)</td><td class="result">passed in 0.003s</td></tr><tr class="passed"><td class="suite"/><td class="test">sequnce:linear - return [2, 3, 4] when (start=1, intercept=2, n=3)</td><td class="result">passed in 0.002s</td></tr><tr class="passed"><td class="suite"/><td class="test">sequnce:triangular - return [1, 3, 6, 10, 15] when (n=5)</td><td class="result">passed in 0.002s</td></tr><tr class="passed"><td class="suite"/><td class="test">sequnce:square - return [1, 4, 9, 16, 25] when (n=5)</td><td class="result">passed in 0.001s</td></tr><tr class="passed"><td class="suite"/><td class="test">sequnce:factorial - return [ 1 ] when (n=1)</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">sequnce:factorial - return [ 2, 6, 24, 120, 720, 5040, 40320, 362880 ] when (n=10)</td><td class="result">passed in 0s</td></tr></table><div class="suite-info"><div class="suite-path">D:\Workbench\WORKDESK\data-science\__tests__\transform\arange.test.ts</div><div class="suite-time">0.378s</div></div><table class="suite-table" cellspacing="0" cellpadding="0"><tr class="passed"><td class="suite"/><td class="test">arange:sort should throw TypeError when not passed any data</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">arange:sort should return [1, 2, 3] when passed data [3, 2, 1] and in ascending direction 1</td><td class="result">passed in 0s</td></tr><tr class="passed"><td class="suite"/><td class="test">arange:sort should return [3, 2, 1] when passed data [1, 2, 3] and in ascending direction -1</td><td class="result">passed in 0.015s</td></tr></table></html>