<template>
    <div>
        <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false"/>
        <section class="section is-medium">
            <div class="container">
                <h1 class="title" style="margin-top: 100px">
                    {{ content[lang]['register']['formunsubscribe']['title'] }}
                </h1>

                <h2 class="subtitle">{{ content[lang]['register']['formunsubscribe']['p1'] }}</h2>
            
                <form class="layout_form cr_form cr_font" action="https://eu1.cleverreach.com/f/82637-208290/wcu/" method="post" target="_blank">
                    <div class="cr_body cr_page cr_font formbox">
                        <div class="non_sortable" style="text-align:left;"></div>
                        
                        <div id="4405747" rel="email" class="cr_ipe_item ui-sortable musthave" style="margin-bottom: 25px;">
                            <label for="text4405747" class="itemname">{{ content[lang]['register']['formunsubscribe']['mail'] }}*</label>
                            <input id="text4405747" name="email" value="" type="text" style="width:100%;" />
                        </div>

                        <div id="4405749" rel="button" class="cr_ipe_item ui-sortable submit_container">
                            <button type="submit" class="cr_button button submit is-color-secondary is-normal">{{ content[lang]['register']['formunsubscribe']['button'] }}</button>
                        </div>
                        
                    </div>
                    <noscript><a href="http://www.cleverreach.de">www.CleverReach.de</a></noscript>
                </form>
            </div>
            <Matomo/>
        </section>
        <Footer :lang="lang" :content="content"/>
    </div>
</template>

<script>

	import { content } from '../assets/content.js';
    import Navigation from '../components/Navigation.vue';
    import Footer from '../components/Footer.vue';
    import Matomo from '../components/Matomo.vue';
    
    export default {
        name: 'NewsletterRegisterDe',
        components: {
            Navigation,
            Matomo,
            Footer
        },
        data() {
            return {
                content: content,
                lang: 'en',
				direct: '/newsletter_unsubscribe_de'
            }
        },
        mounted() {
               function loadjQuery(e,t){var n=document.createElement("script");n.setAttribute("src",e);n.onload=t;n.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded")t()};document.getElementsByTagName("head")[0].appendChild(n)}function main(){
                    var $cr=jQuery.noConflict();var old_src;$cr(document).ready(function(){$cr(".cr_form").submit(function(){$cr(this).find('.clever_form_error').removeClass('clever_form_error');$cr(this).find('.clever_form_note').remove();$cr(this).find(".musthave").find('input, textarea').each(function(){if(jQuery.trim($cr(this).val())==""||($cr(this).is(':checkbox'))||($cr(this).is(':radio'))){if($cr(this).is(':checkbox')||($cr(this).is(':radio'))){if(!$cr(this).parent().find(":checked").is(":checked")){$cr(this).parent().addClass('clever_form_error')}}else{$cr(this).addClass('clever_form_error')}}});if($cr(this).attr("action").search(document.domain)>0&&$cr(".cr_form").attr("action").search("wcs")>0){var cr_email=$cr(this).find('input[name=email]');var unsub=false;if($cr("input['name=cr_subunsubscribe'][value='false']").length){if($cr("input['name=cr_subunsubscribe'][value='false']").is(":checked")){unsub=true}}if(cr_email.val()&&!unsub){$cr.ajax({type:"GET",url:$cr(".cr_form").attr("action").replace("wcs","check_email")+$cr(this).find('input[name=email]').val(),success:function(data){if(data){cr_email.addClass('clever_form_error').before("<div class='clever_form_note cr_font'>"+data+"</div>");return false}},async:false})}var cr_captcha=$cr(this).find('input[name=captcha]');if(cr_captcha.val()){$cr.ajax({type:"GET",url:$cr(".cr_form").attr("action").replace("wcs","check_captcha")+$cr(this).find('input[name=captcha]').val(),success:function(data){if(data){cr_captcha.addClass('clever_form_error').after("<div  class='clever_form_note cr_font'>"+data+"</div>");return false}},async:false})}}if($cr(this).find('.clever_form_error').length){return false}return true});$cr('input[class*="cr_number"]').change(function(){if(isNaN($cr(this).val())){$cr(this).val(1)}if($cr(this).attr("min")){if(($cr(this).val()*1)<($cr(this).attr("min")*1)){$cr(this).val($cr(this).attr("min"))}}if($cr(this).attr("max")){if(($cr(this).val()*1)>($cr(this).attr("max")*1)){$cr(this).val($cr(this).attr("max"))}}});old_src=$cr("div[rel='captcha'] img:not(.captcha2_reload)").attr("src");if($cr("div[rel='captcha'] img:not(.captcha2_reload)").length!=0){captcha_reload()}});function captcha_reload(){var timestamp=new Date().getTime();$cr("div[rel='captcha'] img:not(.captcha2_reload)").attr("src","");$cr("div[rel='captcha'] img:not(.captcha2_reload)").attr("src",old_src+"?t="+timestamp);return false}
                }
                if(typeof jQuery==="undefined"){loadjQuery("//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js",main)}else{main()}
                        
                }
    }
</script>



<style lang="scss">
    @import "../assets/style/style.scss";

    .cr_form {
        .itemname {
            margin-bottom: 10px;
            margin-top: 20px !important;
            font-size: 16px;
            color: $color-tertiary;
        }

        .editable_content {
            .input {

                width: 100%;

                @media screen and (min-width: $tablet) {
                    width: 100%;
                }
            }
        }

        button.submit {
            font-weight: normal;
            padding-top: 0;
            height: 40px;
        }

        .agb {
            color: $color-tertiary;
        }

        .cr_site {
            background-color:#eee;
        }
    
    
        .cr_header {color:#000000;}
        .cr_body {background-color:#ffffff;font-size:12px;color:#000000;}
        .cr_hr {background-color:#ccc;}
        .cr_site a {color:#0084ff;}
        .imprint {color:#000;}
        .cr_site {margin:0;padding:75px 0 0 0;text-align:center;background-color:#eeeeee;}
        .cr_font{
            font-size: 14px;
            font-family: $family-sans-serif;
        }
        .cr_body h2, .cr_header h2{font-size:22px;line-height:28px;margin:0 0 10px 0;}
        .cr_body h1, .cr_header h2{font-size:28px;margin-bottom:15px;padding:0;margin-top:0;}
    
        .wrapper, .cr_page{
            text-align:left;
            border-radius:4px;
        }
    
        .cr_header{text-align:center;background: transparent !important;}
        .cr_body label{float:none;clear:both;display:block;width:auto;margin-top:8px;text-align:left;font-weight:bold;position:relative;}
        .cr_button { 
            display:inline-block;
            font-family: $family-sans-serif;
            width:auto;
            white-space:nowrap;
            height:32px;
            margin:5px 5px 0 0;
            padding:0 22px;
            text-decoration:none;
            font-weight:bold;
            font-style:normal;
            font-size:15px;
            line-height:32px;
            cursor:pointer;
            border:0;-moz-border-radius:4px;
            border-radius:4px;
            -webkit-border-radius:4px;
            vertical-align:top;    
        }
        .cr_button{background-color:#333;color:#ffffff;}
        .cr_button:hover,.cr_button-small:hover{opacity:0.7;filter:alpha(opacity=70);}
        .powered{padding:20px 0;width:560px;margin:0 auto;}
        .formbox{ 
            line-height:150%;
            font-size:12px;color:#333333;
            background-color:#ffffff;
            border-radius: 6px 6px 6px 6px;
        }
    
        .cr_ipe_item textarea {
            background: none repeat scroll 0 0 #eeeeee;
            border: 1px solid #aaa;
            font-family: $family-sans-serif;
            font-size: 16px;}
    
        .cr_ipe_item input {
            background: none repeat scroll 0 0 #eeeeee;
            padding: 10px 13px 12px 13px;
            border: 1px solid #eeeeee;
            // padding: 5px;
            font-family: $family-sans-serif;
            font-size: 16px;
        }
    
        .cr_ipe_item select {
            background: none repeat scroll 0 0 #eeeeee;border: 1px solid #aaa;
            display: block;
            margin: 0;
            padding: 5px;
            width: 100%;
            font-family: $family-sans-serif;
            font-size: 16px;
        }
        .cr_ipe_item input.cr_ipe_radio, input.cr_ipe_checkbox {-moz-binding: none;-moz-box-sizing: border-box;background-color: -moz-field !important;border: 2px inset threedface !important;color: -moz-fieldtext !important;cursor: default;height: 13px;padding: 0 !important;width: 13px;}
        .cr_ipe_item input.cr_ipe_radio{-moz-appearance: radio;border-radius: 100% 100% 100% 100% !important;margin: 3px 3px 0 5px;}
    
        .cr_ipe_item.inactive {display:none;}
        .imprint{font-size:0.8em;}
        .cr_captcha{padding-left:130px;}
        .cr_error{font-size:1.1em;padding:10px;}
        .clever_form_error {
            background-color:$color-secondary--medium; 
            color:#000; 
            border: 1px solid $color-secondary !important
        }
        .clever_form_note {margin:26px 0 0 3px;position:absolute;display:inline; padding: 2px 4px; font-weight:bold;background-color:#f2ecb5; color:#000; font-size:12px !important;  }
        .cr_site {background-color:#eee;}
        .cr_header {color:#000000;}
        .cr_body {background-color:#ffffff;font-size:12px;color:#000000;}
        .cr_hr {background-color:#ccc;}
        .cr_site a {color:#0084ff;}
        .imprint{color:#000;}
    }

</style>
