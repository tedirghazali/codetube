export function socialBar() {
    Array.prototype.forEach.call(document.querySelectorAll('.pd-social-bar .pd-social-item'), function(elem){
        var socialName = elem.getAttribute('data-name');
        var socialUrl = elem.getAttribute('data-url');
        var socialType = elem.getAttribute('data-type');
        var socialTitle = elem.getAttribute('data-title') || '';
        var socialDescription = elem.getAttribute('data-description') || '';
        var socialLink = document.createElement('a');
        elem.appendChild(socialLink);
        var socialMedia = '';
        if(socialType == 'share'){
            var socialShare = '';
            var socialText = 'Visit%3A';
            if(socialTitle != '' && socialDescription != ''){
                socialText = socialTitle+'%3A '+socialDescription;
            }
            if(socialName == 'facebook'){
                socialShare = 'https://www.facebook.com/sharer.php?u='+socialUrl;
            } else if(socialName == 'twitter'){
                socialShare = 'https://twitter.com/intent/tweet?url='+socialUrl+'&text='+socialText;
            } else if(socialName == 'google'){
                socialShare = 'https://plus.google.com/share?url='+socialUrl;
            } else if(socialName == 'linkedin'){
                socialShare = 'https://www.linkedin.com/shareArticle?mini=true&url='+socialUrl+'&title='+socialTitle+'&summary='+socialDescription;
            } else if(socialName == 'tumblr'){
                socialShare = 'http://www.tumblr.com/share/link?url='+socialUrl+'&name='+socialTitle+'&description='+socialDescription;
            } else if(socialName == 'pinterest'){
                socialShare = 'https://pinterest.com/pin/create/button/?url='+socialUrl+'&description='+socialText;
            } else if(socialName == 'reddit'){
                socialShare = 'http://www.reddit.com/submit?url='+socialUrl+'&title='+socialTitle;
            }
            socialMedia = socialShare;
        } else{
            socialMedia = socialUrl;
        }
        socialLink.href = socialMedia;
        socialLink.target = '_blank';
        socialLink.classList.add('bg-'+socialName);
        var socialIcon = document.createElement('i');
        socialIcon.classList.add('pd-icon-'+socialName);
        socialLink.appendChild(socialIcon);
    })
}