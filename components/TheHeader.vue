<template>
    <header>
      <nav class="navbar navbar-default">
        <div class="zf-container-fluid zf-display-flex zf-justify-content-xs-around zf-ptb-xs-10">
            <div class="navbar-header">                
                <nuxt-link to="/">
                    <a class="navbar-brand zf-brand">
                        <span class="lsco-icon lscoicon-levis-logo zf-fs-xs-75-79"></span>
                    </a>
                </nuxt-link>
            </div>
            <div class="text-center">
                <h3>OFF THE CUFF</h3>
                <p>An inside look at everything Levi's®.</p>
            </div>
            <li class="nav navbar-nav pull-left top-nav-hamburger-icon navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" tabindex="0">
                <span id="offside-nav-toggle" class="lsco-icon lscoicon-hamburger"></span>
            </li>
            <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right zf-ff-bold">
                    <li>
                        <a href="#">SHOP LEVI'S<sup>®</sup></a>
                    </li>
                    <li class="dropdown">
                        <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle">CATEGORIES
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="https://www.levi.com/US/en_US/">
                                    <span class="category-name">Shop Levi's
                                        <sup>®</sup>
                                    </span>
                                    <span class="lsco-icon lscoicon-chevron-right"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.levi.com/US/en_US/blog/category/collaborations/">
                                    <span class="category-name">Collaborations</span>
                                    <span class="lsco-icon lscoicon-chevron-right"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.levi.com/US/en_US/blog/category/styled-by-levis/">
                                    <span class="category-name">Styled by Levi's
                                        <sup>®</sup>
                                    </span>
                                    <span class="lsco-icon lscoicon-chevron-right"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.levi.com/US/en_US/blog/category/women/">
                                    <span class="category-name">Women</span>
                                    <span class="lsco-icon lscoicon-chevron-right"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.levi.com/US/en_US/blog/category/men/">
                                    <span class="category-name">Men</span>
                                    <span class="lsco-icon lscoicon-chevron-right"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.levi.com/US/en_US/blog/category/product/">
                                    <span class="category-name">Product</span>
                                    <span class="lsco-icon lscoicon-chevron-right"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.levi.com/US/en_US/blog/category/friends-of-levis/">
                                    <span class="category-name">Friends of Levi’s
                                        <sup>®</sup>
                                    </span>
                                    <span class="lsco-icon lscoicon-chevron-right"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div><!-- /.container-fluid -->
      </nav>
    </header>    
</template>
<style scoped>
    header {
        top:0;
        width: 100%; 
        position:fixed;
        height: 100px;
        z-index: 9999;
    }
    .zf-brand {
        font-size: 100px;
        margin-top: -50px
    }
    .zf-container-fluid {
        overflow:visible
    }
    span.lsco-icon.lscoicon-chevron-right {
        margin-left: 10px;
    }
</style>

