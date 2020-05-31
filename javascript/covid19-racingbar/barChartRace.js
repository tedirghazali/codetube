class barChartRace {

    constructor(options = {}) {
        this.el = document.querySelector(options.target) || options.target;
        this.title = options.title || '';
        this.ranks = options.ranks || [
            {y: 115, text: '#1'},
            {y: 166, text: '#2'},
            {y: 218, text: '#3'},
            {y: 270, text: '#4'},
            {y: 319, text: '#5'},
            {y: 371, text: '#6'},
            {y: 422, text: '#7'},
            {y: 474, text: '#8'},
            {y: 525, text: '#9'},
            {y: 577, text: '#10'}
        ];
        this.tickDuration = options.tickDuration || 1500;
        this.delayDuration = options.delayDuration || 1500; //4000
        this.top = options.top || 10;
        this.height = options.height || 600;
        this.width = options.width || 1366 - 80;
        this.margin = options.margin || {
            top: 80,
            right: 0,
            bottom: 5,
            left: 80
        };
        this.barPadding = options.barPadding || (this.height - (this.margin.bottom + this.margin.top)) / (this.top * 5);
        this.sets = options.sets || [];
        this.setSlice = options.setSlice || [];
        this.series = options.series || [];
        this.scores = options.scores || {};
        this.x = this.xScaleLinear();
        this.y = this.yScaleLinear();
        this.xAxis = this.d3AxisTop();
        this.date = options.date || 'Jan 22',
        this.info = options.info || {
            'Jan 23': {
                image: 'images/jan-23.jpg',
                text: 'China imposed a lockdown in Wuhan and other cities in Hubei province'
            },
            'Feb 15': {
                image: 'images/feb-15.jpg',
                text: 'the US announced it would evacuate Americans aboard the Diamond Princess'
            },
            'Mar 11': {
                image: 'images/mar-11.jpg',
                text: 'the WHO declared the coronavirus outbreak a pandemic'
            },
            'Apr 27': {
                image: 'images/apr-27.jpg',
                text: 'Mobile Morgue outside a hospital in Hackensack, New Jersey, United States'
            },
            'May 19': {
                image: 'images/may-19.jpg',
                text: 'more than 5.1 million cases have been reported worldwide'
            }
        };
        this.yIndex = options.yIndex || 0;
        this.svg = d3.select(this.el).append("svg").attr("width", this.width).attr("height", this.height);
        this.timeYear = this.svg.append('text').attr('x', this.width-this.margin.right-180).attr('y', 48).html(this.date).style('text-anchor', 'end').attr('style', 'font-size: 44px; font-weight: 700; opacity: 0.75;');
        this.infoText = this.svg.append('text').attr('x', this.width-this.margin.right-710).attr('y', this.height-30).style('text-anchor', 'end').attr('style', 'font-size: 16px; font-weight: 500; opacity: 0.95;');
        this.infoImage = this.svg.append('image').attr('x', this.width-this.margin.right-100).attr('y', this.height-100).attr('height', 250).attr('width',  300).attr('transform', 'translate(-150,-200)').attr('style', 'fill: white;');
        
        this.vector();
    }
    
    vector() {
        let svg = this.svg;
        svg.append('text').attr("x", 45).attr('y', 45).html(this.title).attr('style', 'font-size: 28px; font-weight: 700; opacity: 0.75;');
        
        svg.append('g').attr('class', 'axis xAxis').attr('transform', `translate(0, ${this.margin.top})`).call(this.xAxis).selectAll('.tick line').classed('origin', d => d == 0);

        svg.selectAll('rect.bar').data(this.setSlice, d => d.name).enter().append('rect').attr('class', 'bar').attr('x', this.x(0)+1).attr('width', d => x(d.lastValue)-x(0)).attr('y', d => this.y(d.rank)+5).attr('height', this.y(1)-this.y(0)-this.barPadding).style('fill', d => d.color);

        const group = svg.selectAll('svg.label').data(this.setSlice, d => d.name).enter().append('svg').attr('class', 'label').attr('x', d => this.x(d.lastValue)-8).attr('y', d => this.y(d.rank)+5+((this.y(1)-this.y(0))/2)+1);
        group.append('text').attr('class', 'label').attr('dx', -40).attr('dy', 20).html(d => d.name)    
        group.append('image').attr('class', 'flag').attr('width', 35).attr('height', 25).attr('x', -35).attr('y', 3).attr("xlink:href", d => d.img)

        svg.selectAll('text.valueLabel').data(this.setSlice, d => d.name).enter().append('text').attr('class', 'valueLabel').attr('x', d => this.x(d.lastValue)+5).attr('y', d => this.y(d.rank)+10).text(d => d3.format(',.0f')(d.lastValue)); 
            
        this.rank();
    }
    
    rank() {
        let svg = this.svg.append("g");
        svg.append("rect").attr('width', 80).attr('height', 600).attr('x', 0).attr('y', 46).attr('fill', '#ffffff');
        this.ranks.forEach(item => {
            svg.append("text").attr("x", 25).attr("y", item.y).html(item.text).attr('style', 'font-size: 26px; font-weight: 700; fill: #777777;');
        });
    }
    
    xScaleLinear() {
        return d3.scaleLinear().domain([0, d3.max(this.setSlice, d => d.value)]).range([this.margin.left, this.width - this.margin.right - 65]);
    }
    
    yScaleLinear() {
        return d3.scaleLinear().domain([this.top, 0]).range([this.height - this.margin.bottom, this.margin.top]);
    }
    
    d3AxisTop() {
        return d3.axisTop().scale(this.x).ticks(this.width > 500 ? 5:2).tickSize(-(this.height - this.margin.top - this.margin.bottom)).tickFormat(d => d3.format(',')(d));
    }
    
    updateInfoLabel() {
        if(this.info[this.date]) {
            this.infoText.html(`On ${this.date}, 2020, ${this.info[this.date].text}.`);
            this.infoImage.attr("xlink:href", this.info[this.date].image);
        }
    }
    
    update() {
        var interval = d3.interval(e => {

        this.setSlice = this.series.filter(d => d.date == this.date && !isNaN(d.value))
            .sort((a,b) => b.value - a.value)
            .slice(0, this.top);
      
        this.setSlice.forEach((d,i) => d.rank = i);

        this.x.domain([0, d3.max(this.setSlice, d => d.value)]); 

        this.svg.select('.xAxis')
            .transition()
            .duration(this.tickDuration)
            .ease(d3.easeLinear)
            .call(this.xAxis);

        let bars = this.svg.selectAll('.bar').data(this.setSlice, d => d.name);

        bars
            .enter()
            .append('rect')
            .attr('class', d => `bar ${d.name.replace(/\s/g,'_')}`)
            .attr('x', this.x(0)+1)
            .attr( 'width', d => this.x(d.value)-this.x(0)-20)
            .attr('y', d => this.y(this.top+1)+5)
            .attr('height', this.y(1)-this.y(0)-this.barPadding)
            .style('fill', d => d.color)
            .transition()
            .duration(this.tickDuration)
            .ease(d3.easeLinear)
            .attr('y', d => this.y(d.rank)+5);

        bars
            .transition()
            .duration(this.tickDuration)
            .ease(d3.easeLinear)
            .attr('width', d => this.x(d.value)-this.x(0)-21)
            .attr('y', d => this.y(d.rank)+5);

        bars
            .exit()
            .transition()
            .duration(this.tickDuration)
            .ease(d3.easeLinear)
            .attr('width', d => this.x(d.value)-this.x(0)-21)
            .attr('y', d => this.y(this.top+1)+5)
            .remove();

        let labels = this.svg.selectAll('svg.label')
            .data(this.setSlice, d => d.name);

        const group = labels
            .enter()
            .append('svg')
            .attr('class', 'label')
            .attr('x', d => this.x(d.value)-28)
            .attr('y', d => this.y(this.top+1)+10)
        ;

        group
            .transition()
            .duration(this.tickDuration)
            .ease(d3.easeLinear)
            .attr('y', d => this.y(d.rank)+10)
        ;

        group.append('text')
            .attr('class', 'label')
            .attr('dx', -40)
            .attr('dy', 20)
            .html(d => d.name)    

        group.append('image')
            .attr('class', 'flag')
            .attr('width', 35)
            .attr('height', 20)
            .attr('x', -35)
            .attr('y', 3)
            //.attr('xlink:href', d => `https://disease.sh/assets/img/flags/${d.code}.png`)
            .attr("xlink:href", d => d.img)

        labels
            .transition()
            .duration(this.tickDuration)
            .ease(d3.easeLinear)
            .attr('x', d => this.x(d.value)-28)
            .attr('y', d => this.y(d.rank)+10);

        labels
            .exit()
            .transition()
            .duration(this.tickDuration)
            .ease(d3.easeLinear)
            .attr('x', d => this.x(d.value)-28)
            .attr('y', d => this.y(this.top+1)+5)
            .remove();

        let valueLabels = this.svg.selectAll('.valueLabel').data(this.setSlice, d => d.name);

        valueLabels
            .enter()
            .append('text')
            .attr('class', 'valueLabel')
            .attr('x', d => this.x(d.value)-15)
            .attr('y', d => this.y(this.top+1)+5)
            .text(d => d3.format(',.0f')(d.value))
            .transition()
            .duration(this.tickDuration)
            .ease(d3.easeLinear)
            .attr('y', d => this.y(d.rank)+5+((this.y(1)-this.y(0))/2)+1);

        valueLabels
            .transition()
            .duration(this.tickDuration)
            .ease(d3.easeLinear)
            .attr('x', d => this.x(d.value)-15)
            .attr('y', d => this.y(d.rank)+5+((this.y(1)-this.y(0))/2)+1)
            .tween("text", function(d) {
                let i = d3.interpolateRound(d.lastValue, d.value);
                return function(t) {
                    this.textContent = d3.format(',')(i(t));
                };
            });

        valueLabels
            .exit()
            .transition()
            .duration(this.tickDuration)
            .ease(d3.easeLinear)
            .attr('x', d => this.x(d.value)-15)
            .attr('y', d => this.y(this.top+1)+5)
            .remove();

        this.updateInfoLabel();
        this.rank();
        this.timeYear.html(this.date);
        
        this.yIndex++;
        if(this.yIndex >= this.sets.length) {
            interval.stop();
        }
        this.date = this.sets[this.yIndex];
        
        }, this.delayDuration);
        
        return interval;
    }
    
}
