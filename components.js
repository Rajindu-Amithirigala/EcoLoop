(function () {
    var page = (window.location.pathname.split('/').pop() || 'home.html').toLowerCase();

    var navItems = [
        { href: 'home.html', label: 'Home', key: 'home.html' },
        { href: 'content_ST1.html', label: 'Food Waste', key: 'content_st1.html' },
        { href: 'content_ST2.html', label: 'E-Waste', key: 'content_st2.html' },
        { href: 'content_ST3.html', label: 'Fast Fashion', key: 'content_st3.html' },
        { href: 'content_ST4.html', label: 'Plastic Waste', key: 'content_st4.html' },
        { href: 'ais.html', label: 'Impact Sim', key: 'ais.html' },
        { href: 'gallery.html', label: 'Gallery', key: 'gallery.html' },
        { href: 'profile.html', label: 'Profile', key: 'profile.html' },
        { href: 'feedback.html', label: 'Feedback', key: 'feedback.html' },
        { href: 'team.html', label: 'Team', key: 'team.html' },
        { href: 'sitemap.html', label: 'Sitemap', key: 'sitemap.html' }
    ];

    var footerVariants = {
        st1: {
            editor: 'pageEditor_ST1.html',
            validation: 'validation_ST1.html',
            label: 'ST1',
            meta: 'Chanitha Disas Abeygunawardena | w2181569 | 20240775'
        },
        st2: {
            editor: 'pageEditor_ST2.html',
            validation: 'validation_ST2.html',
            label: 'ST2',
            meta: 'Rajindu Amithirigala | w2181582 | 20240776'
        },
        st3: {
            editor: 'pageEditor_ST3.html',
            validation: 'validation_ST3.html',
            label: 'ST3',
            meta: 'Rithika Wickramasinghe | w2181561 | 20241502'
        },
        st4: {
            editor: 'pageEditor_ST4.html',
            validation: 'validation_ST4.html',
            label: 'ST4',
            meta: 'Sahan Polwatte | w2182282 | 20241117'
        }
    };

    var footerByPage = {
        'home.html': 'st1',
        'gallery.html': 'st1',
        'content_st1.html': 'st1',
        'pageeditor_st1.html': 'st1',
        'validation_st1.html': 'st1',
        'ais.html': 'st2',
        'content_st2.html': 'st2',
        'pageeditor_st2.html': 'st2',
        'validation_st2.html': 'st2',
        'feedback.html': 'st3',
        'team.html': 'st3',
        'content_st3.html': 'st3',
        'pageeditor_st3.html': 'st3',
        'validation_st3.html': 'st3',
        'profile.html': 'st4',
        'sitemap.html': 'st4',
        'content_st4.html': 'st4',
        'pageeditor_st4.html': 'st4',
        'validation_st4.html': 'st4'
    };

    function renderHeader() {
        var navMarkup = navItems.map(function (item) {
            var isActive = item.key === page;
            return '<li><a href="' + item.href + '"' +
                (isActive ? ' class="active" aria-current="page"' : '') +
                '>' + item.label + '</a></li>';
        }).join('');

        return '' +
            '<header class="site-header" role="banner">' +
                '<div class="container">' +
                    '<div class="header-inner">' +
                        '<a href="home.html" class="site-logo" aria-label="EcoLoop Home"><span class="logo-text">Eco<span>Loop</span></span></a>' +
                        '<button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="main-nav">' +
                            '<span></span><span></span><span></span>' +
                        '</button>' +
                        '<nav class="site-nav" id="main-nav" aria-label="Main navigation">' +
                            '<ul class="nav-list" role="list">' + navMarkup + '</ul>' +
                        '</nav>' +
                    '</div>' +
                '</div>' +
            '</header>';
    }

    function renderFooter() {
        var variant = footerVariants[footerByPage[page]];
        var bottomMarkup = variant
            ? '' +
                '<div class="footer-bottom" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">' +
                    '<p style="margin:0;">EcoLoop | University of Westminster | IIT</p>' +
                    '<span style="color:rgba(255,255,255,0.4);font-size:0.85rem;flex:1;text-align:center;">' + variant.meta + '</span>' +
                    '<div class="footer-links" style="display:flex;gap:1rem;">' +
                        '<a href="' + variant.editor + '">Page Editor - ' + variant.label + '</a>' +
                        '<a href="' + variant.validation + '">Validation - ' + variant.label + '</a>' +
                    '</div>' +
                '</div>'
            : '' +
                '<div class="footer-bottom">' +
                    '<p>&copy; 2025 EcoLoop | University of Westminster | IIT</p>' +
                '</div>';

        return '' +
            '<footer class="site-footer" role="contentinfo" id="accessibility-statement">' +
                '<div class="container">' +
                    '<div class="footer-inner">' +
                        '<div class="footer-brand">' +
                            '<a href="home.html" class="site-logo" aria-label="EcoLoop Home"><span class="logo-text">Eco<span>Loop</span></span></a>' +
                            '<p>SDG 12: Responsible Consumption and Production</p>' +
                        '</div>' +
                        '<div class="footer-col">' +
                            '<h4>Explore</h4>' +
                            '<ul>' +
                                '<li><a href="home.html">Home</a></li>' +
                                '<li><a href="ais.html">Impact Simulator</a></li>' +
                                '<li><a href="gallery.html">Gallery</a></li>' +
                                '<li><a href="feedback.html">Feedback</a></li>' +
                            '</ul>' +
                        '</div>' +
                        '<div class="footer-col">' +
                            '<h4>Learn</h4>' +
                            '<ul>' +
                                '<li><a href="content_ST1.html">Food Waste</a></li>' +
                                '<li><a href="content_ST2.html">E-Waste</a></li>' +
                                '<li><a href="content_ST3.html">Fast Fashion</a></li>' +
                                '<li><a href="content_ST4.html">Plastic Waste</a></li>' +
                            '</ul>' +
                        '</div>' +
                        '<div class="footer-col">' +
                            '<h4>About</h4>' +
                            '<ul>' +
                                '<li><a href="team.html">Our Team</a></li>' +
                                '<li><a href="profile.html">Your Profile</a></li>' +
                                '<li><a href="sitemap.html">Sitemap</a></li>' +
                            '</ul>' +
                        '</div>' +
                    '</div>' +
                    bottomMarkup +
                '</div>' +
            '</footer>';
    }

    var headerHost = document.getElementById('site-header');
    var footerHost = document.getElementById('site-footer');

    if (headerHost) {
        headerHost.outerHTML = renderHeader();
    }

    if (footerHost) {
        footerHost.outerHTML = renderFooter();
    }
}());
