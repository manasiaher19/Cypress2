
///<reference types = "cypress"/>

describe('Intercept', () => {

    it('validate songs list from gana.com', () => {

        cy.intercept({
            method: "POST",
            url: "https://gaana.com/apiv2?factor=11&id=5&type=albumArtistSongs"
        }).as('getSongsList')
        cy.visit('https://gaana.com/')
        cy.get('.t_wrap [href="/song/udd-jaa-kaale-kaava-from-gadar-2"]').click()
        cy.wait('@getSongsList').then(({ response }) => {
            //console.log(res)
            response.body.entities.forEach((el) => {
                cy.get(`[title='${el.name}']`).should('be.exist')
            })
        })
    })

    it.only('intercept 2', () => {

        cy.fixture('interceptData').then((mockData) => {
            cy.intercept({
                method: "POST",
                url: "https://gaana.com/apiv2?factor=11&id=5&type=albumArtistSongs"
            }, {
                "count": "248",
                "status": 1,
                "eof": 0,
                "entities": [
                    {
                        "language": "Hindi",
                        "seokey": "DJwale",
                        "name": "DJwale",
                        "artwork": "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/9KNgeGE23B/size_m.jpg",
                        "atw": "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/9KNgeGE23B/size_m.jpg",
                        "atwj": "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/9KNgeGE23B/size_m.jpg",
                        "entity_id": "54214468",
                        "entity_type": "TR",
                        "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/9KNgeGE23B/size_l.jpg",
                        "favorite_count": 0,
                        "premium_content": "0",
                        "user_favorite": 0,
                        "entity_info": [
                            {
                                "key": "vgid",
                                "value": "K7vOp"
                            },
                            {
                                "key": "stream_url",
                                "value": {
                                    "medium": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRwbmMsiQ0EuQhA+hznM1PBycfWXv0yg1cE3o9uoq7anz4n209IMEJBkd1xMS7T7VlcK3iEeGXdHTmkHCmD1pWZwxLzK/0SJ+H6LZoybR/THOwqzX+uQMq/8hBwo87AiYfS7J1tLbGkwKwI+/yHo5Gfo0dBEVzDsvmONJYHQNV+KKFGLI/I153k4SDHgHzHoGxlwqakaRXDd8/joW6+NMU/",
                                        "bitRate": "64",
                                        "expiryTime": 1696759090
                                    },
                                    "high": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRwbmMsiQ0EuQhA+hznM1PB+jyam+m8dZH4k7/MsRH+jXOsXyYv9yYCHN9XbqwNl6hmg+F7ZRbFduvZ78NOmNLp/J6kKYwiBY/b0IIvy9+Y1I1CFcA41UI8Y1KzLlA3E/ediPXOQa6g60WtgJRmcoEN0BfgMBAe7b4mPSoHLRTwadKTBy2zCmY5/HzF6JR/4v9q/yLJvSpNUqfQ5D9AoDs1",
                                        "bitRate": "128",
                                        "expiryTime": 1696759090
                                    },
                                    "auto": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRwbmMsiQ0EuQhA+hznM1PBFL7h9ZHWHP2BCRn/QMc3EgbLxOGRb5efTf/lD1wOOlM9i7QKK2sEvtSV/sOZkY83jr3oTtR0XBdwkytJhqAMjWwbyPAVjyEedq337bcSmaIOw6uOKQCYeVcJ+jtWOnhhvZqqf4umpcuo2NfPpjgXd2MpZ3n+pkMpEn1mluZ1jhqbKDrHXwMPI/URqYrfyVB+",
                                        "bitRate": "",
                                        "expiryTime": 1696759090
                                    }
                                }
                            },
                            {
                                "key": "artist",
                                "value": [
                                    {
                                        "artist_id": "5",
                                        "name": "Manish Aher",
                                        "seokey": "Manish Aher"
                                    },
                                    {
                                        "artist_id": "1750693",
                                        "name": "Sanjeev Chaturvedi",
                                        "seokey": "sanjeev-chaturvedi"
                                    }
                                ]
                            },
                            {
                                "key": "album",
                                "value": [
                                    {
                                        "album_id": "8176367",
                                        "name": "Navratri Special Devi Bhakti Geet",
                                        "album_seokey": "navratri-special-devi-bhakti-geet"
                                    }
                                ]
                            },
                            {
                                "key": "operator",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Jai Mata Di",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "operators",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Jai Mata Di",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "lyrics_url",
                                "value": ""
                            },
                            {
                                "key": "parental_warning",
                                "value": 0
                            },
                            {
                                "key": "play_ct",
                                "value": "<100K"
                            },
                            {
                                "key": "artwork_large",
                                "value": "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/9KNgeGE23B/size_l.jpg"
                            },
                            {
                                "key": "sap_id",
                                "value": ""
                            },
                            {
                                "key": "country",
                                "value": "1"
                            },
                            {
                                "key": "mobile",
                                "value": "1"
                            },
                            {
                                "key": "duration",
                                "value": "177"
                            },
                            {
                                "key": "isrc",
                                "value": "INZ031409671"
                            },
                            {
                                "key": "is_most_popular",
                                "value": 0
                            },
                            {
                                "key": "stream_type",
                                "value": "rtmp"
                            },
                            {
                                "key": "is_local",
                                "value": "0"
                            },
                            {
                                "key": "content_source",
                                "value": 1
                            },
                            {
                                "key": "av_ad",
                                "value": 0
                            },
                            {
                                "key": "youtube_id",
                                "value": ""
                            },
                            {
                                "key": "rest_lev",
                                "value": "0"
                            },
                            {
                                "key": "modified_on_solr",
                                "value": "1696731019000"
                            },
                            {
                                "key": "download_enabled",
                                "value": 0
                            },
                            {
                                "key": "secondary_language",
                                "value": "Hindi"
                            },
                            {
                                "key": "ppd",
                                "value": 0
                            },
                            {
                                "key": "is_premium",
                                "value": 1
                            },
                            {
                                "key": "preview_url",
                                "value": {
                                    "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuTj0Y15yZq6uVDBQ9IzQ5w4/EDm0TtBu1YaK9RP3zMF2/qQxXSd3kTvtRYToM0j/pQ==",
                                    "expiryTime": 1696759090
                                }
                            }
                        ]
                    },
                    {
                        "language": "Hindi",
                        "seokey": "woh-humse-khafa-hain-trap-mix",
                        "name": "Woh Humse Khafa Hain - Trap Mix",
                        "artwork": "https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoznk2m32/size_m.jpg",
                        "atw": "https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoznk2m32/size_m.jpg",
                        "atwj": "https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoznk2m32/size_m.jpg",
                        "entity_id": "54187112",
                        "entity_type": "TR",
                        "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoznk2m32/size_l.jpg",
                        "favorite_count": 0,
                        "premium_content": "0",
                        "user_favorite": 0,
                        "entity_info": [
                            {
                                "key": "vgid",
                                "value": "YRE1R"
                            },
                            {
                                "key": "stream_url",
                                "value": {
                                    "medium": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszSmWmRxGeb5j+5Oo6YhqFUDv/zRtT8/ayhfLkD8Q9CL8jXEdAgg6SVFONL08Zy7TAavb7wWs9Ea5smQDLh9EyE1a4hPpbmvcGS+EnY7GwDJNTx0N7FtYK1M3gY9X8IsDW63ZzVxZuy8hJ3TAqQ4iSyqhXdJC51C492GB1eS+XAKAsjzxWln4AjgmfPd4UmjG9xThMsE/NI4H4lhVbh4bFAV",
                                        "bitRate": "64",
                                        "expiryTime": 1696759090
                                    },
                                    "high": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszSmWmRxGeb5j+5Oo6YhqFUDbeMSyT9+TGD9wKDVBBP69ExUX911UUNFm4nNrbZpicYJcl8yANqCOXn53XcpavgJg936o1fwuiXjjIPsrMy+tCO5JOPfoYVR+kyv7qeOluI+1BGjsoC19uFRnoomQMBfrK29id7iFO6Xq0MB5jmElhZsK0RUZi1WVSJefISjjEeLFn41U/3s6GOD0i8sRwRn",
                                        "bitRate": "128",
                                        "expiryTime": 1696759090
                                    },
                                    "auto": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszSmWmRxGeb5j+5Oo6YhqFUDmzkv72OJk87hwPX3Ym1lUSuAdibKViGpFm9myTIiCg6v9EClvOff91+UwSejycCXLh12q8HRHnuL0izOhth/6bOjcwPVJO1O0nA58+pdZZkIhWLOEipeOlkF2mwKvt4RJklBVHe0zzr9ncporFruKpGi+Eb/JnivUXFKucarsoxmY4zn498lQaATXERWFg1m",
                                        "bitRate": "",
                                        "expiryTime": 1696759090
                                    }
                                }
                            },
                            {
                                "key": "artist",
                                "value": [
                                    {
                                        "artist_id": "1658656",
                                        "name": "Anurag-Abhishek",
                                        "seokey": "anurag-abhishek"
                                    },
                                    {
                                        "artist_id": "4",
                                        "name": "Shreya Ghoshal",
                                        "seokey": "shreya-ghoshal"
                                    },
                                    {
                                        "artist_id": "5",
                                        "name": "Udit Narayan",
                                        "seokey": "udit-narayan"
                                    }
                                ]
                            },
                            {
                                "key": "album",
                                "value": [
                                    {
                                        "album_id": "8167812",
                                        "name": "Woh Humse Khafa Hain - Trap Mix",
                                        "album_seokey": "woh-humse-khafa-hain-trap-mix"
                                    }
                                ]
                            },
                            {
                                "key": "operator",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Woh Humse Khafa",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "operators",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Woh Humse Khafa",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "lyrics_url",
                                "value": ""
                            },
                            {
                                "key": "parental_warning",
                                "value": 0
                            },
                            {
                                "key": "play_ct",
                                "value": "<100K"
                            },
                            {
                                "key": "artwork_large",
                                "value": "https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/gWoznk2m32/size_l.jpg"
                            },
                            {
                                "key": "sap_id",
                                "value": ""
                            },
                            {
                                "key": "country",
                                "value": "1"
                            },
                            {
                                "key": "mobile",
                                "value": "1"
                            },
                            {
                                "key": "duration",
                                "value": "143"
                            },
                            {
                                "key": "isrc",
                                "value": "INH102313878"
                            },
                            {
                                "key": "is_most_popular",
                                "value": 0
                            },
                            {
                                "key": "stream_type",
                                "value": "rtmp"
                            },
                            {
                                "key": "is_local",
                                "value": "0"
                            },
                            {
                                "key": "content_source",
                                "value": 1
                            },
                            {
                                "key": "av_ad",
                                "value": 0
                            },
                            {
                                "key": "youtube_id",
                                "value": ""
                            },
                            {
                                "key": "rest_lev",
                                "value": "0"
                            },
                            {
                                "key": "modified_on_solr",
                                "value": "1696483814000"
                            },
                            {
                                "key": "download_enabled",
                                "value": 0
                            },
                            {
                                "key": "secondary_language",
                                "value": "Hindi"
                            },
                            {
                                "key": "ppd",
                                "value": 0
                            },
                            {
                                "key": "is_premium",
                                "value": 1
                            },
                            {
                                "key": "preview_url",
                                "value": {
                                    "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuTj0Y15yZq6uVDBQ9IzQ5w4/EDm0TtBu1YaK9RP3zMF2/qQxXSd3kTvtRYToM0j/pQ==",
                                    "expiryTime": 1696759090
                                }
                            }
                        ]
                    },
                    {
                        "language": "Hindi",
                        "seokey": "udd-jaa-kaale-kaava-from-gadar-2",
                        "name": "Udd Jaa Kaale Kaava (From \"Gadar 2\")",
                        "artwork": "https://a10.gaanacdn.com/gn_img/albums/6Zxb27K9wN/xb2qrjNoW9/size_m_1688020211.jpg",
                        "atw": "https://a10.gaanacdn.com/gn_img/albums/6Zxb27K9wN/xb2qrjNoW9/size_m_1688020211.jpg",
                        "atwj": "https://a10.gaanacdn.com/gn_img/albums/6Zxb27K9wN/xb2qrjNoW9/size_m_1688020211.jpg",
                        "entity_id": "52575016",
                        "entity_type": "TR",
                        "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/6Zxb27K9wN/xb2qrjNoW9/size_l_1688020211.jpg",
                        "favorite_count": 27767,
                        "premium_content": "0",
                        "user_favorite": 0,
                        "entity_info": [
                            {
                                "key": "vgid",
                                "value": "K7vOp"
                            },
                            {
                                "key": "stream_url",
                                "value": {
                                    "medium": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRpOLjXCpEepY+EGQ8aRK03693bYSPup2sPSohMMnTgsLwA+ZN3fKhN49SpNAZTkYAlzIn2a7ccqhyLlcWDVF2QuGwduefXdxWLzRosy5VtnZFaJjgLoGrvkzmGjgVsmUyhLP+ulGu2v56zhFbeta6sfaosmvu64aqZe5MXOby+KQhGsKekWuj37ONhqlrQergKcw4UyePde1gnFPFc+UwR",
                                        "bitRate": "64",
                                        "expiryTime": 1696759090
                                    },
                                    "high": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRpOLjXCpEepY+EGQ8aRK03V+ynWYkSNP+By59zxU/Bz4vh61eAKdHtZEORFoaacTt7uaMBm/dk9ocmAGouyIqhi1pfsgJt/6rJ7TVpHhQnbNV8KAi12IbueUZMeMj38fzzmQr2t4jGV8t7Z6+fzOxXynrwHckoQrM036l41hw6tQX3RPCFzJZEu8DHNDS4L/wSU24yxYMojGQZIe4zblEX",
                                        "bitRate": "128",
                                        "expiryTime": 1696759090
                                    },
                                    "auto": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRpOLjXCpEepY+EGQ8aRK03/EdV/JrVx8jvsmAbJkHxD4NfLVG2wGNkxuDhVkWpQLRkqEZKAPKQeC269aTeOzUVwqOYfaaWO1XcAw1YqbBnzjeHsdmc9MOrCUi14nxBuqzX+S/peVEgG4MxcDvlZOae2iliVwtsZbasEOG1cwm5b9itsDvs3S3h3Sr52CQ66zVgCdL3f5vtGZI9h6egpEMC",
                                        "bitRate": "",
                                        "expiryTime": 1696759090
                                    }
                                }
                            },
                            {
                                "key": "artist",
                                "value": [
                                    {
                                        "artist_id": "5",
                                        "name": "Udit Narayan",
                                        "seokey": "udit-narayan"
                                    },
                                    {
                                        "artist_id": "10",
                                        "name": "Alka Yagnik",
                                        "seokey": "alka-yagnik"
                                    },
                                    {
                                        "artist_id": "27",
                                        "name": "Mithoon",
                                        "seokey": "mithoon"
                                    },
                                    {
                                        "artist_id": "2986",
                                        "name": "Uttam Singh",
                                        "seokey": "uttam-singh"
                                    }
                                ]
                            },
                            {
                                "key": "album",
                                "value": [
                                    {
                                        "album_id": "7596342",
                                        "name": "Udd Jaa Kaale Kaava (From \"Gadar 2\")",
                                        "album_seokey": "udd-jaa-kaale-kaava-from-gadar-2"
                                    }
                                ]
                            },
                            {
                                "key": "operator",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Udd Jaa Kaale",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "operators",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Udd Jaa Kaale",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "lyrics_url",
                                "value": ""
                            },
                            {
                                "key": "parental_warning",
                                "value": 0
                            },
                            {
                                "key": "play_ct",
                                "value": "1M+"
                            },
                            {
                                "key": "artwork_large",
                                "value": "https://a10.gaanacdn.com/gn_img/albums/6Zxb27K9wN/xb2qrjNoW9/size_l_1688020211.jpg"
                            },
                            {
                                "key": "sap_id",
                                "value": ""
                            },
                            {
                                "key": "country",
                                "value": "1"
                            },
                            {
                                "key": "mobile",
                                "value": "1"
                            },
                            {
                                "key": "duration",
                                "value": "288"
                            },
                            {
                                "key": "isrc",
                                "value": "INZ031413259"
                            },
                            {
                                "key": "is_most_popular",
                                "value": 0
                            },
                            {
                                "key": "stream_type",
                                "value": "rtmp"
                            },
                            {
                                "key": "is_local",
                                "value": "0"
                            },
                            {
                                "key": "content_source",
                                "value": 1
                            },
                            {
                                "key": "av_ad",
                                "value": 0
                            },
                            {
                                "key": "youtube_id",
                                "value": ""
                            },
                            {
                                "key": "rest_lev",
                                "value": "0"
                            },
                            {
                                "key": "tags",
                                "value": [
                                    {
                                        "tag_id": 103,
                                        "tag_name": "Romance"
                                    }
                                ]
                            },
                            {
                                "key": "modified_on_solr",
                                "value": "1696731043000"
                            },
                            {
                                "key": "download_enabled",
                                "value": 0
                            },
                            {
                                "key": "secondary_language",
                                "value": "Hindi"
                            },
                            {
                                "key": "ppd",
                                "value": 0
                            },
                            {
                                "key": "is_premium",
                                "value": 1
                            },
                            {
                                "key": "preview_url",
                                "value": {
                                    "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuTj0Y15yZq6uVDBQ9IzQ5w4/EDm0TtBu1YaK9RP3zMF2/qQxXSd3kTvtRYToM0j/pQ==",
                                    "expiryTime": 1696759090
                                }
                            }
                        ]
                    },
                    {
                        "language": "Hindi",
                        "seokey": "main-nikla-gaddi-leke-from-gadar-2",
                        "name": "Main Nikla Gaddi Leke (From \"Gadar 2\")",
                        "artwork": "https://a10.gaanacdn.com/gn_img/albums/koMWQBbqLE/MWQ4Dx5E3q/size_m.jpg",
                        "atw": "https://a10.gaanacdn.com/gn_img/albums/koMWQBbqLE/MWQ4Dx5E3q/size_m.jpg",
                        "atwj": "https://a10.gaanacdn.com/gn_img/albums/koMWQBbqLE/MWQ4Dx5E3q/size_m.jpg",
                        "entity_id": "53166131",
                        "entity_type": "TR",
                        "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/koMWQBbqLE/MWQ4Dx5E3q/size_l.jpg",
                        "favorite_count": 9180,
                        "premium_content": "0",
                        "user_favorite": 0,
                        "entity_info": [
                            {
                                "key": "vgid",
                                "value": "K7vOp"
                            },
                            {
                                "key": "stream_url",
                                "value": {
                                    "medium": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRGYm03cV2Dp0lpqQ2Uk6yFlKgjGcgbqRZaprN74Kb3rQOPWjjd3oMvPCthpqwcERlrUW7P1RS+8DN87dGYC6iGlleAKkgHk158JSzrz2lbV18fw9eMpLcuXpN1T47B1TP2nfa6TR13qzMMfsJeyWJWIdBbQK26N+b38D22cPL4J1M04R9iHVk/mgRGvTAk9uhJZ5xH+0sUvnkh9DxWhIZA",
                                        "bitRate": "64",
                                        "expiryTime": 1696759090
                                    },
                                    "high": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRGYm03cV2Dp0lpqQ2Uk6yFlb75NIKOPBKESSdOcBkWh38CAVG8KnBkIdv85kk5cbReEvku9PbwuRzqNVlpaVxgSQ8nd9wLaFoIHqnfIORSzv3iels4/mGz5HXWOZSdqlb/K148TOCq/f0UAKyjocGlMaxg8xCXueH9ctts6igh78IOjtBDqIXkE0NQYBUr6zSWsYjMIWVMoCyHw6QytFHc",
                                        "bitRate": "128",
                                        "expiryTime": 1696759090
                                    },
                                    "auto": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRGYm03cV2Dp0lpqQ2Uk6yF6h4qzKenTW1mqf9p2fEYQF6JKaguENXGHn0ajO3RpBWSCZt2b7MtgcUKx6RkfPh+Z5f95cjc8PueeDfPf09VxVfGZ4n5xLggF6XLMsZ25TAxLugyTRFMWdHfhkFYGwY5jxu4HhhEeaTHYymWCIze7eSeaXasu9uz0HB3Bw4LF1lsAXuJq2Zh8txGQZWuaocL",
                                        "bitRate": "",
                                        "expiryTime": 1696759090
                                    }
                                }
                            },
                            {
                                "key": "artist",
                                "value": [
                                    {
                                        "artist_id": "5",
                                        "name": "Udit Narayan",
                                        "seokey": "udit-narayan"
                                    },
                                    {
                                        "artist_id": "130",
                                        "name": "Aditya Narayan",
                                        "seokey": "aditya-narayan"
                                    },
                                    {
                                        "artist_id": "27",
                                        "name": "Mithoon",
                                        "seokey": "mithoon"
                                    },
                                    {
                                        "artist_id": "2986",
                                        "name": "Uttam Singh",
                                        "seokey": "uttam-singh"
                                    }
                                ]
                            },
                            {
                                "key": "album",
                                "value": [
                                    {
                                        "album_id": "7801106",
                                        "name": "Main Nikla Gaddi Leke (From \"Gadar 2\")",
                                        "album_seokey": "main-nikla-gaddi-leke-from-gadar-2"
                                    }
                                ]
                            },
                            {
                                "key": "operator",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Main Nikla Gaddi",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "operators",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Main Nikla Gaddi",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "lyrics_url",
                                "value": ""
                            },
                            {
                                "key": "parental_warning",
                                "value": 0
                            },
                            {
                                "key": "play_ct",
                                "value": "500K+"
                            },
                            {
                                "key": "artwork_large",
                                "value": "https://a10.gaanacdn.com/gn_img/albums/koMWQBbqLE/MWQ4Dx5E3q/size_l.jpg"
                            },
                            {
                                "key": "sap_id",
                                "value": ""
                            },
                            {
                                "key": "country",
                                "value": "1"
                            },
                            {
                                "key": "mobile",
                                "value": "1"
                            },
                            {
                                "key": "duration",
                                "value": "230"
                            },
                            {
                                "key": "isrc",
                                "value": "INZ031413424"
                            },
                            {
                                "key": "is_most_popular",
                                "value": 0
                            },
                            {
                                "key": "stream_type",
                                "value": "rtmp"
                            },
                            {
                                "key": "is_local",
                                "value": "0"
                            },
                            {
                                "key": "content_source",
                                "value": 1
                            },
                            {
                                "key": "av_ad",
                                "value": 0
                            },
                            {
                                "key": "youtube_id",
                                "value": ""
                            },
                            {
                                "key": "rest_lev",
                                "value": "0"
                            },
                            {
                                "key": "modified_on_solr",
                                "value": "1696731043000"
                            },
                            {
                                "key": "download_enabled",
                                "value": 0
                            },
                            {
                                "key": "secondary_language",
                                "value": "Hindi"
                            },
                            {
                                "key": "ppd",
                                "value": 0
                            },
                            {
                                "key": "is_premium",
                                "value": 1
                            },
                            {
                                "key": "preview_url",
                                "value": {
                                    "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuTj0Y15yZq6uVDBQ9IzQ5w4/EDm0TtBu1YaK9RP3zMF2/qQxXSd3kTvtRYToM0j/pQ==",
                                    "expiryTime": 1696759090
                                }
                            }
                        ]
                    },
                    {
                        "language": "Hindi",
                        "seokey": "main-khiladi-1",
                        "name": "Main Khiladi",
                        "artwork": "https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/V3dl92vx3R/size_m.jpg",
                        "atw": "https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/V3dl92vx3R/size_m.jpg",
                        "atwj": "https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/V3dl92vx3R/size_m.jpg",
                        "entity_id": "49790525",
                        "entity_type": "TR",
                        "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/V3dl92vx3R/size_l.jpg",
                        "favorite_count": 39570,
                        "premium_content": "0",
                        "user_favorite": 0,
                        "entity_info": [
                            {
                                "key": "vgid",
                                "value": "yYj93"
                            },
                            {
                                "key": "stream_url",
                                "value": {
                                    "medium": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRciU8HRS3R6+DSd8QJCclmaG/p6BDE3XCAUXHPQOdE7sM9AtT3U4F3rGQ/XypXMqmN0aF4I46sXAD4yosM8dTId+sk3wkJkkuTKIUVWlyB4U5FAQ5x9x1Gc14F+h6AIZnXkNqy5b6ZHcCH7iwWdTEwiHNe6HctZtRIJb85YxjOk+v/cP0skbERAKXZ4a8cVG2SkYB3wclNtunsKlWx2SUY",
                                        "bitRate": "64",
                                        "expiryTime": 1696759090
                                    },
                                    "high": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRciU8HRS3R6+DSd8QJCclmTvT45681nCc1A0vXAHW+0v+2SZi63sTRkgxFDyh6dTIleWmlksWsfu2wDYBDteL2fj+5bUyTBKWxK+Nj+ayWz39UzExSvmzdEh7cLB4Hh5ON9iAujXoMwVeTnuJ71hiuof01IUw9TzI45hOLHeCmlyTY6sWkk+sAxLDeZA+3tFGQ4geHpwPWX9sMxf5DUWAG",
                                        "bitRate": "128",
                                        "expiryTime": 1696759090
                                    },
                                    "auto": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRciU8HRS3R6+DSd8QJCclmo8GuxuTJsLpThdCeuHvmIPrDxH6S/4GgpJbGt3gaifPf8v3OGSyY6WUBceHZC5EsKyWQnMfAbcR60rffSd7FFZ4I4J6t8D/0FQ+aYRoptS2J7VpPJqK1Wh2fUFCUet4tuf8qJ3sghJXDGZFKFxsdDKAewQk+vEAOAAuFGRlLW63bFwtogFC23do1sHheyGTT",
                                        "bitRate": "",
                                        "expiryTime": 1696759090
                                    }
                                }
                            },
                            {
                                "key": "artist",
                                "value": [
                                    {
                                        "artist_id": "5",
                                        "name": "Udit Narayan",
                                        "seokey": "udit-narayan"
                                    },
                                    {
                                        "artist_id": "245104",
                                        "name": "Abhijeet Bhattacharya",
                                        "seokey": "abhijeet-1"
                                    },
                                    {
                                        "artist_id": "767572",
                                        "name": "Tanishk Bagchi",
                                        "seokey": "tanishk"
                                    }
                                ]
                            },
                            {
                                "key": "album",
                                "value": [
                                    {
                                        "album_id": "6892578",
                                        "name": "Main Khiladi (From \"Selfiee\")",
                                        "album_seokey": "main-khiladi-from-selfiee"
                                    }
                                ]
                            },
                            {
                                "key": "operator",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Main Khiladi",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "operators",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Main Khiladi",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "lyrics_url",
                                "value": ""
                            },
                            {
                                "key": "parental_warning",
                                "value": 0
                            },
                            {
                                "key": "play_ct",
                                "value": "1M+"
                            },
                            {
                                "key": "artwork_large",
                                "value": "https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/V3dl92vx3R/size_l.jpg"
                            },
                            {
                                "key": "sap_id",
                                "value": ""
                            },
                            {
                                "key": "country",
                                "value": "1"
                            },
                            {
                                "key": "mobile",
                                "value": "1"
                            },
                            {
                                "key": "duration",
                                "value": "187"
                            },
                            {
                                "key": "isrc",
                                "value": "FR2X42317374"
                            },
                            {
                                "key": "is_most_popular",
                                "value": 0
                            },
                            {
                                "key": "stream_type",
                                "value": "rtmp"
                            },
                            {
                                "key": "is_local",
                                "value": "0"
                            },
                            {
                                "key": "content_source",
                                "value": 1
                            },
                            {
                                "key": "av_ad",
                                "value": 0
                            },
                            {
                                "key": "youtube_id",
                                "value": ""
                            },
                            {
                                "key": "rest_lev",
                                "value": "0"
                            },
                            {
                                "key": "tags",
                                "value": [
                                    {
                                        "tag_id": 100,
                                        "tag_name": "Party"
                                    }
                                ]
                            },
                            {
                                "key": "modified_on_solr",
                                "value": "1696731043000"
                            },
                            {
                                "key": "download_enabled",
                                "value": 0
                            },
                            {
                                "key": "secondary_language",
                                "value": "Hindi"
                            },
                            {
                                "key": "ppd",
                                "value": 0
                            },
                            {
                                "key": "is_premium",
                                "value": 1
                            },
                            {
                                "key": "preview_url",
                                "value": {
                                    "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuTj0Y15yZq6uVDBQ9IzQ5w4/EDm0TtBu1YaK9RP3zMF2/qQxXSd3kTvtRYToM0j/pQ==",
                                    "expiryTime": 1696759090
                                }
                            }
                        ]
                    },
                    {
                        "language": "Hindi",
                        "seokey": "dil-to-pagal-hai",
                        "name": "Dil To Pagal Hai",
                        "artwork": "https://a10.gaanacdn.com/gn_img/albums/DwPKOxB3qV/wPKOoL6KqV/size_m.jpg",
                        "atw": "https://a10.gaanacdn.com/gn_img/albums/DwPKOxB3qV/wPKOoL6KqV/size_m.jpg",
                        "atwj": "https://a10.gaanacdn.com/gn_img/albums/DwPKOxB3qV/wPKOoL6KqV/size_m.jpg",
                        "entity_id": "703934",
                        "entity_type": "TR",
                        "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/DwPKOxB3qV/wPKOoL6KqV/size_l.jpg",
                        "favorite_count": 552033,
                        "premium_content": "0",
                        "user_favorite": 0,
                        "entity_info": [
                            {
                                "key": "vgid",
                                "value": "lmqbY"
                            },
                            {
                                "key": "stream_url",
                                "value": {
                                    "medium": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszTA27ak6q2ZblOlQnfxEBEhgZNaipur88393lI0q1wJBbv1Pc6Avk3CLGv3FzyuCG53+HRkLvFPQfluUUTsqM8lhxN1hQZ4YX1g3UqiR2WQTKDf0seHNR+LQxeg51bVu6CJd0WCe3KUKEVJqKTW8QAFd9wTDvfzDW5+tTsiZlO0nFiPnrg5cW3CCRZzC4oqaGxbX5MgYwGt/vrhyJXULw9G",
                                        "bitRate": "64",
                                        "expiryTime": 1696759090
                                    },
                                    "high": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszTA27ak6q2ZblOlQnfxEBEhTyVqmJvyEQrMw2WkdtQhF2VLKsn8pVGS0Oswe+cS6nupBpLBaUYqyn/dvcO1eXW7NwACtrQw1o/Ad97s/NXxxm60pgjseIwAVXslsKXHr7RQ0IQ9xBo7fW//DXClLefYUch+folHOHNRgTB4CpfOBIxgWzFn5UGe7u0ClV0/KcD/xUuCSreiNX1oDPWXEvQr",
                                        "bitRate": "96",
                                        "expiryTime": 1696759090
                                    },
                                    "auto": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszTA27ak6q2ZblOlQnfxEBEhjvk/+WFKNf3bC6Ywd+a6IL2EeVZ4cgmiw3xRMd2X7Jw0wTWENCrWMQxwlicKVO0mX9JsaZOP/iIQmvQByoW70hpbKIybohoDBDfXN9N3fRngPben42N/vERqtfaYbgsLi7yZl5vwFRzCG+ancK3R4e8QaJmCS9jYuS3vSDUa/0IuBGGwVZUl2SQejvUB1qT4",
                                        "bitRate": "",
                                        "expiryTime": 1696759090
                                    }
                                }
                            },
                            {
                                "key": "artist",
                                "value": [
                                    {
                                        "artist_id": "155",
                                        "name": "Lata Mangeshkar",
                                        "seokey": "lata-mangeshkar"
                                    },
                                    {
                                        "artist_id": "5",
                                        "name": "Udit Narayan",
                                        "seokey": "udit-narayan"
                                    }
                                ]
                            },
                            {
                                "key": "album",
                                "value": [
                                    {
                                        "album_id": "71354",
                                        "name": "Dil To Pagal Hai",
                                        "album_seokey": "dil-to-pagal-hai-hindi"
                                    }
                                ]
                            },
                            {
                                "key": "operator",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Dil To Pagal",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "operators",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Dil To Pagal",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "lyrics_url",
                                "value": "https://gaana.com/lyrics/dil-to-pagal-hai"
                            },
                            {
                                "key": "parental_warning",
                                "value": 0
                            },
                            {
                                "key": "play_ct",
                                "value": "78M+"
                            },
                            {
                                "key": "artwork_large",
                                "value": "https://a10.gaanacdn.com/gn_img/albums/DwPKOxB3qV/wPKOoL6KqV/size_l.jpg"
                            },
                            {
                                "key": "sap_id",
                                "value": ""
                            },
                            {
                                "key": "country",
                                "value": "1"
                            },
                            {
                                "key": "mobile",
                                "value": "1"
                            },
                            {
                                "key": "duration",
                                "value": "337"
                            },
                            {
                                "key": "isrc",
                                "value": "INY099700001"
                            },
                            {
                                "key": "is_most_popular",
                                "value": 0
                            },
                            {
                                "key": "stream_type",
                                "value": "rtmp"
                            },
                            {
                                "key": "is_local",
                                "value": "0"
                            },
                            {
                                "key": "content_source",
                                "value": 1
                            },
                            {
                                "key": "av_ad",
                                "value": 0
                            },
                            {
                                "key": "youtube_id",
                                "value": ""
                            },
                            {
                                "key": "rest_lev",
                                "value": "0"
                            },
                            {
                                "key": "tags",
                                "value": [
                                    {
                                        "tag_id": 103,
                                        "tag_name": "Romance"
                                    }
                                ]
                            },
                            {
                                "key": "modified_on_solr",
                                "value": "1696731043000"
                            },
                            {
                                "key": "download_enabled",
                                "value": 0
                            },
                            {
                                "key": "secondary_language",
                                "value": "Hindi"
                            },
                            {
                                "key": "ppd",
                                "value": 0
                            },
                            {
                                "key": "is_premium",
                                "value": 1
                            },
                            {
                                "key": "preview_url",
                                "value": {
                                    "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuTj0Y15yZq6uVDBQ9IzQ5w4/EDm0TtBu1YaK9RP3zMF2/qQxXSd3kTvtRYToM0j/pQ==",
                                    "expiryTime": 1696759090
                                }
                            }
                        ]
                    },
                    {
                        "language": "Hindi",
                        "seokey": "tip-tip-barsa-paani-1",
                        "name": "Tip Tip Barsa Paani",
                        "artwork": "https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/xd3xG6JDKg/size_m_1523089210.jpg",
                        "atw": "https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/xd3xG6JDKg/size_m_1523089210.jpg",
                        "atwj": "https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/xd3xG6JDKg/size_m_1523089210.jpg",
                        "entity_id": "14723248",
                        "entity_type": "TR",
                        "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/xd3xG6JDKg/size_l_1523089210.jpg",
                        "favorite_count": 480645,
                        "premium_content": "0",
                        "user_favorite": 0,
                        "entity_info": [
                            {
                                "key": "vgid",
                                "value": "l1zPq"
                            },
                            {
                                "key": "stream_url",
                                "value": {
                                    "medium": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszQ1ap8o2l0T7sZkQ+iIt6V9WqIalu79+HXoPlQF/O7C6tvNmcV0ZdzG/BoNO+GOAvdr1U3D93944dXpCYt5Kj9ERmvC4Ksk6ltNLMGcXEIKmFRsXml7QSltpAaSl09mgeIcmanzNY+HYpy34vmfF0Cy4oW5XbjiwhkMf0Qo70lLyxvNLZIsImw+oAM2D8zwGhqXxb/R32TujW4orC7b/Wp3",
                                        "bitRate": "64",
                                        "expiryTime": 1696759090
                                    },
                                    "high": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszQ1ap8o2l0T7sZkQ+iIt6V9/RgHmsWjUb/pad8xe4ObTlSFrDITljbOxcemNk439LnDiC5t3olVYfy0cQZQpTnHG38vOqPewfHpyzfCpcK8sVJTpfOZIwKq0GIOldz9obmyLiOCt8MqvHPCoTu6qpBZX914rxvopCvf3kVVWDAa4aD1akuO8StiRB25pVc6OwNwU2nd6xwGlHsgeE/zD0t1",
                                        "bitRate": "128",
                                        "expiryTime": 1696759090
                                    },
                                    "auto": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszQ1ap8o2l0T7sZkQ+iIt6V9haKZYCj/rU2QmFdvEIgzQv1ATeOSKss/n5o/EG4ZfKQjEuQXky65wSTfJvp7VTZvUILEmZsKBjia6jIwige6FU+0gt117N3LOTxDdPuCLNFSIoweqxNsPGOjpVUKRbImxoCJDLHLyoHZST5+uw2dv28xavlLhgcunBcfhqFPas7qPQjdkhPQynaFnsv3Te6P",
                                        "bitRate": "",
                                        "expiryTime": 1696759090
                                    }
                                }
                            },
                            {
                                "key": "artist",
                                "value": [
                                    {
                                        "artist_id": "10",
                                        "name": "Alka Yagnik",
                                        "seokey": "alka-yagnik"
                                    },
                                    {
                                        "artist_id": "5",
                                        "name": "Udit Narayan",
                                        "seokey": "udit-narayan"
                                    }
                                ]
                            },
                            {
                                "key": "album",
                                "value": [
                                    {
                                        "album_id": "1405230",
                                        "name": "Mohra",
                                        "album_seokey": "mohra"
                                    }
                                ]
                            },
                            {
                                "key": "operator",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Tip Tip Barsa",
                                        "short_code": "56789"
                                    },
                                    {
                                        "name": "IDEA",
                                        "st": 1301941800000,
                                        "et": 1617129000000,
                                        "message": "DT 5560",
                                        "short_code": "56789"
                                    },
                                    {
                                        "name": "VODAFONE",
                                        "st": 1136053800000,
                                        "et": 1614623400000,
                                        "message": "CT 1834658",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "operators",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Tip Tip Barsa",
                                        "short_code": "56789"
                                    },
                                    {
                                        "name": "IDEA",
                                        "st": 1301941800000,
                                        "et": 1617129000000,
                                        "message": "DT 5560",
                                        "short_code": "56789"
                                    },
                                    {
                                        "name": "VODAFONE",
                                        "st": 1136053800000,
                                        "et": 1614623400000,
                                        "message": "CT 1834658",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "lyrics_url",
                                "value": "https://gaana.com/lyrics/tip-tip-barsa-paani-1"
                            },
                            {
                                "key": "parental_warning",
                                "value": 0
                            },
                            {
                                "key": "play_ct",
                                "value": "67M+"
                            },
                            {
                                "key": "artwork_large",
                                "value": "https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/xd3xG6JDKg/size_l_1523089210.jpg"
                            },
                            {
                                "key": "sap_id",
                                "value": ""
                            },
                            {
                                "key": "country",
                                "value": "1"
                            },
                            {
                                "key": "mobile",
                                "value": "1"
                            },
                            {
                                "key": "duration",
                                "value": "364"
                            },
                            {
                                "key": "isrc",
                                "value": "IN-V11-94-00084"
                            },
                            {
                                "key": "is_most_popular",
                                "value": 0
                            },
                            {
                                "key": "stream_type",
                                "value": "rtmp"
                            },
                            {
                                "key": "is_local",
                                "value": "0"
                            },
                            {
                                "key": "content_source",
                                "value": 1
                            },
                            {
                                "key": "av_ad",
                                "value": 0
                            },
                            {
                                "key": "youtube_id",
                                "value": "j7tD6Arkv4I"
                            },
                            {
                                "key": "rest_lev",
                                "value": "0"
                            },
                            {
                                "key": "tags",
                                "value": [
                                    {
                                        "tag_id": 103,
                                        "tag_name": "Romance"
                                    }
                                ]
                            },
                            {
                                "key": "modified_on_solr",
                                "value": "1696731043000"
                            },
                            {
                                "key": "download_enabled",
                                "value": 0
                            },
                            {
                                "key": "secondary_language",
                                "value": "Hindi"
                            },
                            {
                                "key": "ppd",
                                "value": 0
                            },
                            {
                                "key": "is_premium",
                                "value": 1
                            },
                            {
                                "key": "preview_url",
                                "value": {
                                    "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuTj0Y15yZq6uVDBQ9IzQ5w4/EDm0TtBu1YaK9RP3zMF2/qQxXSd3kTvtRYToM0j/pQ==",
                                    "expiryTime": 1696759090
                                }
                            }
                        ]
                    },
                    {
                        "language": "Hindi",
                        "seokey": "pehla-nasha-1",
                        "name": "Pehla Nasha",
                        "artwork": "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/aP37RJvKDy/size_m.jpg",
                        "atw": "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/aP37RJvKDy/size_m.jpg",
                        "atwj": "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/aP37RJvKDy/size_m.jpg",
                        "entity_id": "30222",
                        "entity_type": "TR",
                        "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/aP37RJvKDy/size_l.jpg",
                        "favorite_count": 733280,
                        "premium_content": "0",
                        "user_favorite": 0,
                        "entity_info": [
                            {
                                "key": "vgid",
                                "value": "YRE1R"
                            },
                            {
                                "key": "stream_url",
                                "value": {
                                    "medium": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszQxZbbjVCFbFf9BfB+h0Z+D+d3CRj6fefeOG7sYDFdx28qozkn+MXPYr3ZKwHK4KHeptKWMAHeIrhefOk5Tkmm6zKg26dVw1rW7ARrCNGdNQr6mDf1PUYyLfLb9ALer+RIncwmnYiqxhMaNpFxqjRJV5ttRXCL3Mxz6uzuiM7cLIOD1n4+m5sr3xl7ZYPTxyEZXaxvT23yl9c9O3fwuz5bQ",
                                        "bitRate": "64",
                                        "expiryTime": 1696759090
                                    },
                                    "high": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszQxZbbjVCFbFf9BfB+h0Z+DnWnAM1qU04k4wszsJsccrowC9bt+HPsiXR8d4X4QRE/PBHC5KeYGnbNJ1OzOHAb/pAi5O3TLrgBQuyAF4ip9KiI15bzlL7Nqvo+w1GvmZEm2k3bZTall8E+OzVFpFzxP5xLBSRvEJj3/DGb3FcPabJrmFC5TIkgtjQBuSDTncEDOEnS9+4kTZCPy0yK8bH+E",
                                        "bitRate": "128",
                                        "expiryTime": 1696759090
                                    },
                                    "auto": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszQxZbbjVCFbFf9BfB+h0Z+DogLtZ9qOxIv3zriqlLs+vxi3fhskYn8lj08UI1uVTTUkddDWOCocqTZ+8JaZwWbIJrpIgAS02QnA4l+9hDAShdEB4tlKYsVKCBT4ALXsiDSDKSHUy/ErR1TwY3WxA9dkKEfvyhrl9R8XA/KtGRLp1GJCmhqeuJ5teTAZD6OjUA7kkltRGO/lwWLq+egwfB0I",
                                        "bitRate": "",
                                        "expiryTime": 1696759090
                                    }
                                }
                            },
                            {
                                "key": "artist",
                                "value": [
                                    {
                                        "artist_id": "5",
                                        "name": "Udit Narayan",
                                        "seokey": "udit-narayan"
                                    },
                                    {
                                        "artist_id": "10584",
                                        "name": "Sadhana Sargam",
                                        "seokey": "sadhana-sargam-1"
                                    }
                                ]
                            },
                            {
                                "key": "album",
                                "value": [
                                    {
                                        "album_id": "22899",
                                        "name": "Jo Jeeta Wohi Sikandar",
                                        "album_seokey": "jo-jeeta-wohi-sikandar"
                                    }
                                ]
                            },
                            {
                                "key": "operator",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Pehla Nasha",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "operators",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Pehla Nasha",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "lyrics_url",
                                "value": ""
                            },
                            {
                                "key": "parental_warning",
                                "value": 0
                            },
                            {
                                "key": "play_ct",
                                "value": "87M+"
                            },
                            {
                                "key": "artwork_large",
                                "value": "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/aP37RJvKDy/size_l.jpg"
                            },
                            {
                                "key": "sap_id",
                                "value": ""
                            },
                            {
                                "key": "country",
                                "value": "1"
                            },
                            {
                                "key": "mobile",
                                "value": "1"
                            },
                            {
                                "key": "duration",
                                "value": "293"
                            },
                            {
                                "key": "isrc",
                                "value": "INH109235800"
                            },
                            {
                                "key": "is_most_popular",
                                "value": 0
                            },
                            {
                                "key": "stream_type",
                                "value": "https"
                            },
                            {
                                "key": "is_local",
                                "value": "0"
                            },
                            {
                                "key": "content_source",
                                "value": 1
                            },
                            {
                                "key": "av_ad",
                                "value": 0
                            },
                            {
                                "key": "youtube_id",
                                "value": ""
                            },
                            {
                                "key": "rest_lev",
                                "value": "0"
                            },
                            {
                                "key": "tags",
                                "value": [
                                    {
                                        "tag_id": 103,
                                        "tag_name": "Romance"
                                    }
                                ]
                            },
                            {
                                "key": "modified_on_solr",
                                "value": "1696731043000"
                            },
                            {
                                "key": "download_enabled",
                                "value": 0
                            },
                            {
                                "key": "secondary_language",
                                "value": "Hindi"
                            },
                            {
                                "key": "ppd",
                                "value": 1
                            },
                            {
                                "key": "is_premium",
                                "value": 1
                            },
                            {
                                "key": "preview_url",
                                "value": {
                                    "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuTj0Y15yZq6uVDBQ9IzQ5w4/EDm0TtBu1YaK9RP3zMF2/qQxXSd3kTvtRYToM0j/pQ==",
                                    "expiryTime": 1696759090
                                }
                            }
                        ]
                    },
                    {
                        "language": "Hindi",
                        "seokey": "main-yahaan-hoon",
                        "name": "Main Yahaan Hoon",
                        "artwork": "https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/Br3ga6QbR1/size_m.jpg",
                        "atw": "https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/Br3ga6QbR1/size_m.jpg",
                        "atwj": "https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/Br3ga6QbR1/size_m.jpg",
                        "entity_id": "704138",
                        "entity_type": "TR",
                        "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/Br3ga6QbR1/size_l.jpg",
                        "favorite_count": 456313,
                        "premium_content": "0",
                        "user_favorite": 0,
                        "entity_info": [
                            {
                                "key": "vgid",
                                "value": "lmqbY"
                            },
                            {
                                "key": "stream_url",
                                "value": {
                                    "medium": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRD0HkEtkxRxTH1D9C/FP36QMXOLhoFsxKssMsfOFK/tqOwX6mmFvmK/C8TGOfM3NxVSmowx2bnivQsNfNxFZyQTrI99KR6AlNRsraY79f9kZxZJa1SGLwtxC3QRlHMbpaT/1x1LiwYTvp9s/+JxF7f0IH7KQ9WVUOH14rHjTgRlwtoRHzQpX4BE4s/+MwGaMBDy3BkjSY22z5o2Cd0faGs",
                                        "bitRate": "64",
                                        "expiryTime": 1696759090
                                    },
                                    "high": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRD0HkEtkxRxTH1D9C/FP36MRdHbkk5qvm/h1yKm3Mol19bsd/lKiOoxzEvkqVWOwTkVuO21+fryfKQr2+AfqDdVwxT1NyxvnnMuqTXW2MV4x+e0kkYSXyujn2EN7umbFT+Uh5KHg5rmLqRbEJF6mjKmwfary1DOU87197odB2FtDpuNrw8cD8Mw405sXY3waETFDiRuclcl0iSlwjHCOdK",
                                        "bitRate": "96",
                                        "expiryTime": 1696759090
                                    },
                                    "auto": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszRD0HkEtkxRxTH1D9C/FP36siavFRotw1j3m8/xOO1nr4L7QCXxV7JbwxSl9BIrqYVv9eIPIvwbzvTzwo2WhPc7R8NqKWPpPQtUHaCer7kRrkZdZRDPn0/WtV/GAvrkKiPlegLa10piVGQxmSY0iqTFzZum1Zqkq/Dxz1cHYhcZB39C8ZI6kl6wGqI8qO85VwklXaARx9A5ubGKuOogI3Yu",
                                        "bitRate": "",
                                        "expiryTime": 1696759090
                                    }
                                }
                            },
                            {
                                "key": "artist",
                                "value": [
                                    {
                                        "artist_id": "5",
                                        "name": "Udit Narayan",
                                        "seokey": "udit-narayan"
                                    }
                                ]
                            },
                            {
                                "key": "album",
                                "value": [
                                    {
                                        "album_id": "71379",
                                        "name": "Veer-Zaara",
                                        "album_seokey": "veer-zaara"
                                    }
                                ]
                            },
                            {
                                "key": "operator",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Main Yahaan Hoon",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "operators",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Main Yahaan Hoon",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "lyrics_url",
                                "value": "https://gaana.com/lyrics/main-yahaan-hoon"
                            },
                            {
                                "key": "parental_warning",
                                "value": 0
                            },
                            {
                                "key": "play_ct",
                                "value": "40M+"
                            },
                            {
                                "key": "artwork_large",
                                "value": "https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/Br3ga6QbR1/size_l.jpg"
                            },
                            {
                                "key": "sap_id",
                                "value": ""
                            },
                            {
                                "key": "country",
                                "value": "1"
                            },
                            {
                                "key": "mobile",
                                "value": "1"
                            },
                            {
                                "key": "duration",
                                "value": "297"
                            },
                            {
                                "key": "isrc",
                                "value": "INY090400016"
                            },
                            {
                                "key": "is_most_popular",
                                "value": 0
                            },
                            {
                                "key": "stream_type",
                                "value": "rtmp"
                            },
                            {
                                "key": "is_local",
                                "value": "0"
                            },
                            {
                                "key": "content_source",
                                "value": 1
                            },
                            {
                                "key": "av_ad",
                                "value": 0
                            },
                            {
                                "key": "youtube_id",
                                "value": ""
                            },
                            {
                                "key": "rest_lev",
                                "value": "0"
                            },
                            {
                                "key": "tags",
                                "value": [
                                    {
                                        "tag_id": 103,
                                        "tag_name": "Romance"
                                    }
                                ]
                            },
                            {
                                "key": "modified_on_solr",
                                "value": "1696731043000"
                            },
                            {
                                "key": "download_enabled",
                                "value": 0
                            },
                            {
                                "key": "secondary_language",
                                "value": "Hindi"
                            },
                            {
                                "key": "ppd",
                                "value": 0
                            },
                            {
                                "key": "is_premium",
                                "value": 1
                            },
                            {
                                "key": "preview_url",
                                "value": {
                                    "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuTj0Y15yZq6uVDBQ9IzQ5w4/EDm0TtBu1YaK9RP3zMF2/qQxXSd3kTvtRYToM0j/pQ==",
                                    "expiryTime": 1696759090
                                }
                            }
                        ]
                    },
                    {
                        "language": "Hindi",
                        "seokey": "jaadu-teri-nazar-2",
                        "name": "Jaadu Teri Nazar",
                        "artwork": "https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW05ZMbo5/size_m.jpg",
                        "atw": "https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW05ZMbo5/size_m.jpg",
                        "atwj": "https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW05ZMbo5/size_m.jpg",
                        "entity_id": "66867",
                        "entity_type": "TR",
                        "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW05ZMbo5/size_l.jpg",
                        "favorite_count": 463056,
                        "premium_content": "0",
                        "user_favorite": 0,
                        "entity_info": [
                            {
                                "key": "vgid",
                                "value": "YRE1R"
                            },
                            {
                                "key": "stream_url",
                                "value": {
                                    "medium": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszTsDp4MF7VsXegSEbZMEXsYtRA0dA81ptM0eLXhxoKdc9n8wU015iBX6Ohbd77TIW5qlKY58qcMNURSEGeXxOAoG8c6QYGLBJ3W5eBEhNSM282m8nZVEJRiTLgaZjO9Id681JDlCvvhLE1Pqr7GEfy4ekmXpgUCyR3D1sCQgBfsl+gCvipoal9xHclsAlrBtc9Zy/W+0/LnPB5ZlkVmpa4E",
                                        "bitRate": "64",
                                        "expiryTime": 1696759090
                                    },
                                    "high": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszTsDp4MF7VsXegSEbZMEXsYIz37usRzo7xZYJel7e5ODuQr91JhSyp/iNXJqCzCQHY55RE8LNwff93KbLIrsPHLiq8FQc1o/3QP3wSXWZ0euWkBrGpCDUonRx4g78eZctb2bUf6rNmZWC4mqD8KJFmCba0sWG/VAWX2tWFzHSUL20qpT43R3nOgAgT0eun3lOH/RTheYPmQXl1qyVrb4y9x",
                                        "bitRate": "128",
                                        "expiryTime": 1696759090
                                    },
                                    "auto": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszTsDp4MF7VsXegSEbZMEXsYtCKvONymZkKAnHtx2yC4Q/oJRWWV3edM8ygX7Rf1HJYybkTuEF8yxTezRCWt5tJWBhn9K+/pgqqhp/MZFot7QmUgeN2nsVKLWZrkXVr0R/B8BoxA/lvxKiIIgyiJ/WVayD/d0c9GxjIARpQtMCM6w9jrSFWF5z9Vx82MiX+I0lJaz9el8io772A1mFfyUfVW",
                                        "bitRate": "",
                                        "expiryTime": 1696759090
                                    }
                                }
                            },
                            {
                                "key": "artist",
                                "value": [
                                    {
                                        "artist_id": "5",
                                        "name": "Udit Narayan",
                                        "seokey": "udit-narayan"
                                    }
                                ]
                            },
                            {
                                "key": "album",
                                "value": [
                                    {
                                        "album_id": "14375",
                                        "name": "Darr ",
                                        "album_seokey": "darr"
                                    }
                                ]
                            },
                            {
                                "key": "operator",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Jaadu Teri Nazar",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "operators",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Jaadu Teri Nazar",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "lyrics_url",
                                "value": ""
                            },
                            {
                                "key": "parental_warning",
                                "value": 0
                            },
                            {
                                "key": "play_ct",
                                "value": "55M+"
                            },
                            {
                                "key": "artwork_large",
                                "value": "https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/dNW05ZMbo5/size_l.jpg"
                            },
                            {
                                "key": "sap_id",
                                "value": ""
                            },
                            {
                                "key": "country",
                                "value": "1"
                            },
                            {
                                "key": "mobile",
                                "value": "1"
                            },
                            {
                                "key": "duration",
                                "value": "281"
                            },
                            {
                                "key": "isrc",
                                "value": "INH109338540"
                            },
                            {
                                "key": "is_most_popular",
                                "value": 0
                            },
                            {
                                "key": "stream_type",
                                "value": "https"
                            },
                            {
                                "key": "is_local",
                                "value": "0"
                            },
                            {
                                "key": "content_source",
                                "value": 1
                            },
                            {
                                "key": "av_ad",
                                "value": 0
                            },
                            {
                                "key": "youtube_id",
                                "value": ""
                            },
                            {
                                "key": "rest_lev",
                                "value": "0"
                            },
                            {
                                "key": "tags",
                                "value": [
                                    {
                                        "tag_id": 103,
                                        "tag_name": "Romance"
                                    }
                                ]
                            },
                            {
                                "key": "modified_on_solr",
                                "value": "1696731043000"
                            },
                            {
                                "key": "download_enabled",
                                "value": 0
                            },
                            {
                                "key": "secondary_language",
                                "value": "Hindi"
                            },
                            {
                                "key": "ppd",
                                "value": 1
                            },
                            {
                                "key": "is_premium",
                                "value": 1
                            },
                            {
                                "key": "preview_url",
                                "value": {
                                    "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuTj0Y15yZq6uVDBQ9IzQ5w4/EDm0TtBu1YaK9RP3zMF2/qQxXSd3kTvtRYToM0j/pQ==",
                                    "expiryTime": 1696759090
                                }
                            }
                        ]
                    },
                    {
                        "language": "Hindi",
                        "seokey": "kuch-kuch-hota-hai-4",
                        "name": "Kuch Kuch Hota Hai",
                        "artwork": "https://a10.gaanacdn.com/gn_img/albums/Bp1bAnK029/p1bAExnb02/size_m.jpg",
                        "atw": "https://a10.gaanacdn.com/gn_img/albums/Bp1bAnK029/p1bAExnb02/size_m.jpg",
                        "atwj": "https://a10.gaanacdn.com/gn_img/albums/Bp1bAnK029/p1bAExnb02/size_m.jpg",
                        "entity_id": "553996",
                        "entity_type": "TR",
                        "artwork_medium": "https://a10.gaanacdn.com/gn_img/albums/Bp1bAnK029/p1bAExnb02/size_l.jpg",
                        "favorite_count": 494318,
                        "premium_content": "0",
                        "user_favorite": 0,
                        "entity_info": [
                            {
                                "key": "vgid",
                                "value": "AK9OR"
                            },
                            {
                                "key": "stream_url",
                                "value": {
                                    "medium": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszSxlf+WTP96Xi2yTtXt9hBu+f8W0DqN/p/V4osh4RmoMpHif92Km8/boVy14EyyaVYjPAroI520tZFEU+v5mhT5ZvCZtgkMK3GefKSLdsVJcZ+g7K297jJ7DG4rzKZDNokOQI75dNDQ1W/22lzMDoLB8q5M16qR+YQOfD2DunXLXlNflITKjdl4PL1zCfPqkIFCpN071TLBXDrg5WuVuDpS",
                                        "bitRate": "64",
                                        "expiryTime": 1696759090
                                    },
                                    "high": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszSxlf+WTP96Xi2yTtXt9hBugD4uI9Cw4OdaPBwuw5g/jyzC+la1gNp37TNZnLZNNTS/NsNBKqn61EKRmT/447Egf13ZKcntFPQNTZBtdQtgUfraA06PM1PQGVKGdFmVHmE4cNWI6dwDQKNRhqcQpOPsHEX+KUTULHhjZFgvbLX31mp9pPgjuedulZAmwFzc2/q79c1iNVlwW39YnSC/nYmM",
                                        "bitRate": "96",
                                        "expiryTime": 1696759090
                                    },
                                    "auto": {
                                        "message": "/PXDlMo67L4ssymkjHOGPNgaoh8Ou9LKJSyF01YhszSxlf+WTP96Xi2yTtXt9hBussDW6lFE3uRKLnPBL2YXdgz4CT2GiD2GrPGcbPsicBtdw9WTHV48brN7tERqBIPR6OynpKhtSzfjUIbIpwJ7GfHwXX+fmE4Qh1adtMwapWSkW7Oz/cYL/VGDl/4c71ET4ZYNKrcXdj/5tJhG8Ro/YN2Wt0Be0k0opttyNFaqdbYq2YdB2y0Uetw7YtCR4O8Q",
                                        "bitRate": "",
                                        "expiryTime": 1696759090
                                    }
                                }
                            },
                            {
                                "key": "artist",
                                "value": [
                                    {
                                        "artist_id": "5",
                                        "name": "Udit Narayan",
                                        "seokey": "udit-narayan"
                                    },
                                    {
                                        "artist_id": "10",
                                        "name": "Alka Yagnik",
                                        "seokey": "alka-yagnik"
                                    },
                                    {
                                        "artist_id": "55969",
                                        "name": "Jatin-Lalit",
                                        "seokey": "jatin-lalit"
                                    }
                                ]
                            },
                            {
                                "key": "album",
                                "value": [
                                    {
                                        "album_id": "57219",
                                        "name": "Kuch Kuch Hota Hai (Original Motion Picture Soundtrack)",
                                        "album_seokey": "kuch-kuch-hota-hai"
                                    }
                                ]
                            },
                            {
                                "key": "operator",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Kuch Kuch Hota",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "operators",
                                "value": [
                                    {
                                        "name": "JIO",
                                        "st": 1590019200000,
                                        "et": 1747785600000,
                                        "message": "Kuch Kuch Hota",
                                        "short_code": "56789"
                                    }
                                ]
                            },
                            {
                                "key": "lyrics_url",
                                "value": ""
                            },
                            {
                                "key": "parental_warning",
                                "value": 0
                            },
                            {
                                "key": "play_ct",
                                "value": "55M+"
                            },
                            {
                                "key": "artwork_large",
                                "value": "https://a10.gaanacdn.com/gn_img/albums/Bp1bAnK029/p1bAExnb02/size_l.jpg"
                            },
                            {
                                "key": "sap_id",
                                "value": ""
                            },
                            {
                                "key": "country",
                                "value": "1"
                            },
                            {
                                "key": "mobile",
                                "value": "1"
                            },
                            {
                                "key": "duration",
                                "value": "298"
                            },
                            {
                                "key": "isrc",
                                "value": "INS179900049"
                            },
                            {
                                "key": "is_most_popular",
                                "value": 0
                            },
                            {
                                "key": "stream_type",
                                "value": "rtmp"
                            },
                            {
                                "key": "is_local",
                                "value": "0"
                            },
                            {
                                "key": "content_source",
                                "value": 1
                            },
                            {
                                "key": "av_ad",
                                "value": 0
                            },
                            {
                                "key": "youtube_id",
                                "value": "-ijfNEF7-JY"
                            },
                            {
                                "key": "rest_lev",
                                "value": "0"
                            },
                            {
                                "key": "tags",
                                "value": [
                                    {
                                        "tag_id": 103,
                                        "tag_name": "Romance"
                                    }
                                ]
                            },
                            {
                                "key": "modified_on_solr",
                                "value": "1696731043000"
                            },
                            {
                                "key": "download_enabled",
                                "value": 0
                            },
                            {
                                "key": "secondary_language",
                                "value": "Hindi"
                            },
                            {
                                "key": "ppd",
                                "value": 0
                            },
                            {
                                "key": "is_premium",
                                "value": 1
                            },
                            {
                                "key": "preview_url",
                                "value": {
                                    "message": "pSFO08Pw4dp3VRAsttmfT0IAjKH9TD83ae87pFTzfpQKPtv+O7ka7drzLSEJ1QK2j6HrvxqTNCEz1oEz5OCGuTj0Y15yZq6uVDBQ9IzQ5w4/EDm0TtBu1YaK9RP3zMF2/qQxXSd3kTvtRYToM0j/pQ==",
                                    "expiryTime": 1696759090
                                }
                            }
                        ]
                    }
                ],
                "user_token_status": "0"
            }
            ).as('artistName')
            cy.visit('https://gaana.com/')
            cy.get('.t_wrap [href="/song/udd-jaa-kaale-kaava-from-gadar-2"]').click()
            cy.get('@artistName').then((response) => {
                cy.log(response)
            })

        })
    })
})

