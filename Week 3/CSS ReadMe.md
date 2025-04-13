CSS Rules




Selectors:

1. Universal selctor (*) - Targets all elements

* {
    ...style goes here
}

2. Element Selector - Targets a specific elements

p {
    color : blue
    font-size : 16px
}

3. Class selector - Targets elementts with a specific class attribute
<h3 class="highlight">Title</h3>
<p class ="highlight">Test paragraph</p>

.highlight {
    color : red
}

4. ID Selector

<table id="tbl_one></table>

#tbl_one {

}

5. Group selectors - Targets a group of elements
h1, h2, h3, h4, h5, h6, p {

}

6. Descendent selector - Targets elements inside another element

div p {

}


margin - space outside an elements border

padding - space inside an elements border