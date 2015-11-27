(function() {

	function extendDate() {
		Date.prototype.isSaturday = function() {
			return this.getDay() == 6;
		}
		Date.prototype.isSunday = function() {
			return this.getDay() == 0;
		}
		Date.prototype.isWeekend = function() {
			return this.isSaturday() || this.isSunday()
		}
		Date.prototype.copy = function() {
			return new Date(this.getTime());
		}
	}

	function extendString() {
		String.prototype.toIsoDate = function() {
			var format = d3.time.format("%Y-%m-%d %H:%M:%S");
			return format.parse(this);
		}
	}

	function extendArray() {
		Array.prototype.contains = function(obj) {
			return this.indexOf(obj) >= 0
		}
		Array.prototype.last = function() {
			return this[this.length - 1];
		}
		Array.prototype.flatMap = function(lambda) {
			return Array.prototype.concat.apply([], this.map(lambda));
		};
	}

	function extendD3() {
		d3.time.fromISO = function(input) {
			var format = d3.time.format("%Y-%m-%d %H:%M:%S");
			return format.parse(input);
		}
		d3.utils = {}
		d3.utils.translate = function(left, top) {
			return "translate(" + left + "," + top + ")";
		}
		d3.utils.rotate = function(degree) {
			return "rotate(" + degree.toString() + ")";
		}
	}

	extendDate();
	extendString();
	extendArray();
	extendD3();
})()