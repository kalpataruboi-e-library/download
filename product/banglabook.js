var banglabook = [
    {
        name: '০১. পবিত্র ত্রিপিটক - ১ম খণ্ড (পারাজিকা)',
        page: '১৫৬ পৃষ্ঠা',
        doner: 'বিদ্যানিধি চৌধুরী পরিবার বর্গ, বনশ্রী বর্না চৌধুরী ও গৌতম চৌধুরী',
        publishdate: '১৬ সেপ্টেম্বর , ২০০৮ ইংরেজী ।',
        filesize: '৯ মেগাবাইট',
        downloader: 1174,
        views: 3903,
        path : 'https://github.com/kalpataruboi/01.Pobitro_Tripitak_25_Khandha/raw/master/',
        link: function(){
            var url = this.path + this.name + '.pdf'
            return url
        },

        read: 'Google drive link'

    },
    {
        name: '০১. পবিত্র ত্রিপিটক - ১ম খণ্ড (পারাজিকা)',
        page: '১৫৬ পৃষ্ঠা',
        doner: 'বিদ্যানিধি চৌধুরী পরিবার বর্গ, বনশ্রী বর্না চৌধুরী ও গৌতম চৌধুরী',
        publishdate: '১৬ সেপ্টেম্বর , ২০০৮ ইংরেজী ।',
        filesize: '৯ মেগাবাইট',
        downloader: 1174,
        views: 3903,
        path : 'https://github.com/kalpataruboi/01.Pobitro_Tripitak_25_Khandha/raw/master/',
        link: function(){
            var url = this.path + this.name + '.pdf'
            return url
        }

    },
    {
        name: 'পবিত্র ত্রিপিটক (১-২৫ খণ্ড)',
        trancelator: 'শ্রীমৎ প্রজ্ঞানন্দ স্থবির, ভদন্ত প্রজ্ঞাবংশ মহাস্থবির ও ভদন্ত করুণাবংশ স্থবির',
        page: '১২০৪ পৃষ্ঠা',
        doner: ' ত্রিপিটক পাবলিশিং সোসাইটি (TPS)',
        publishdate: ' ২৫ আগস্ট ২০১৭ ইং',
        filesize: '১৭৯ মেগাবাইট',
        downloader: 1174,
        views: 3903,
        path : 'https://github.com/kalpataruboi/01.Pobitro_Tripitak_25_Khandha/raw/master/',
        link: function(){
            var url = this.path + this.name + '.pdf'
            return url
        },
        read: '',
        img: function(){
            var img  = this.name + 'png'
            return img
        }

    }
]

var output = []
for (var i = 0; i < banglabook.length; i++) {
    output.push(`
    
    <div class="book">
    <div class="book_about">
        <div class="img_box">
            <img id="img_box" height="152px" src="./img/mn1.jpg" alt="">
        </div>
        <div class="about">
            <div class="head">
                <p> কিছু তথ্য</p>
            </div>
            <div class="about_txt">
                <table>
                    <tr>
                        <td>বই</td>
                        <td>:</td>
                        <td>${banglabook[i].name}</td>
                    </tr>
                    <tr>
                        <td>পৃষ্ঠা</td>
                        <td>:</td>
                        <td>${banglabook[i].page}</td>
                    </tr>
                    <tr>
                        <td>অনুবাদক</td>
                        <td>:</td>
                        <td>${banglabook[i].doner}</td>
                    </tr>
                    <tr>
                        <td>প্রকাশকাল </td>
                        <td>:</td>
                        <td>${banglabook[i].publishdate}</td>
                    </tr>
                    <tr>
                        <td>আকার</td>
                        <td>:</td>
                        <td>${banglabook[i].filesize}</td>
                    </tr>
                    <tr>
                        <td>ডাউনলোড সংখ্যা</td>
                        <td>:</td>
                        <td>${banglabook[i].downloader}</td>
                    </tr>
                    <tr>
                        <td>ডাউনলোড </td>
                        <td>:</td>
                        <td></td>
                    </tr>
    
                </table>
            </div>
        </div>
    </div>
    <div class="read_download">
        <div class="read">পড়ে দেখুন</div>
        <div class="download"><a href="${banglabook[i].link()}">ডাউনলোড</a></div>

    </div>
</div>
`)
}

var about_txt = document.querySelector('.main')
about_txt.insertAdjacentHTML('afterbegin', output.join(' ')) 
var download = document.querySelector('.download')


