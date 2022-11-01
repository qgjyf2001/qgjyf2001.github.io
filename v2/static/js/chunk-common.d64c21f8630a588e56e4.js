(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-common"], {
		"025e": function(e, t, a) {
			"use strict";
			var i = a("4350"),
				T = a("9230"),
				n = (a("4de4"), a("d3b7"), a("ac1f"), a("00b4"), a("14d9"), a("8bbf")),
				o = a.n(n),
				s = a("e644"),
				r = (a("159b"), {
					setAjaxNumKey: 0,
					setFreeAjax: [],
					init: function() {
						this.setAjaxNumKey = 0, this.setFreeAjax = []
					},
					add: function() {
						this.setAjaxNumKey++
					},
					reduce: function() {
						var e = this;
						1 == this.setAjaxNumKey && setTimeout((function() {
							0 == e.setAjaxNumKey && e.todoFreeAjx()
						}), 200), this.setAjaxNumKey > 0 && this.setAjaxNumKey--
					},
					addFreeAjax: function(e) {
						this.setFreeAjax.push(e)
					},
					todoFreeAjx: function() {
						this.setFreeAjax.forEach((function(e) {
							e()
						})), this.init()
					}
				}),
				Y = r,
				c = a("6128"),
				B = a("8237"),
				l = a.n(B),
				P = function(e) {
					var t = this;
					e instanceof Array || (e = [e]);
					var a = [],
						i = this;
					e.forEach((function(e) {
						a.push(t.$appConfig.staticUrl + e)
					}));
					var T = function(e, t) {
						var a = l()(e),
							T = $('[data-id="' + a + '"]');
						if (T.length) {
							T.attr("page-path", i.$route.path);
							var n = setInterval((function() {
								"loaded" == T.attr("source-status") && (clearInterval(n), t())
							}), 200)
						} else {
							var o = document.createElement("link");
							o.href = e, o.setAttribute("data-id", a), o.type = "text/css", o.rel = "stylesheet", o.setAttribute("source-type", "other"), o.setAttribute("source-status", "loading"), o.setAttribute("page-path", i.$route.path), o.onload = function() {
								o.setAttribute("source-status", "loaded"), t()
							}, document.getElementsByTagName("body")[0].appendChild(o)
						}
					}, n = function(e, t) {
							var a = l()(e),
								T = $('[data-id="' + a + '"]');
							if (T.length) {
								T.attr("page-path", i.$route.path);
								var n = setInterval((function() {
									"loaded" == T.attr("source-status") && (clearInterval(n), t())
								}), 200)
							} else {
								var o = document.createElement("script");
								o.src = e, o.setAttribute("data-id", a), o.type = "text/javascript", o.async = !1, o.setAttribute("source-type", "other"), o.setAttribute("source-status", "loading"), o.setAttribute("page-path", i.$route.path), o.onload = function() {
									o.setAttribute("source-status", "loaded"), t()
								}, document.getElementsByTagName("body")[0].appendChild(o)
							}
						}, o = function(e, t) {
							var a = e.split(".");
							switch (a[a.length - 1]) {
								case "js":
									n(e, t);
									break;
								case "css":
									T(e, t);
									break
							}
						}, s = 0;
					return new Promise((function(e, t) {
						a.forEach((function(t) {
							o(t, (function() {
								s += 1, a.length == s && e()
							}))
						}))
					}))
				}, u = (a("b0c0"), function() {
					var e = this,
						t = e._self._c;
					return t("div", {
						directives: [{
							name: "loading",
							rawName: "v-loading.fullscreen",
							value: e.loading,
							expression: "loading",
							modifiers: {
								fullscreen: !0
							}
						}],
						class: e.boxClass
					}, [t("div", {
						staticClass: "header",
						style: e.headerStyle
					}, [t("div", {
						staticClass: "content"
					}, [0 == e.minLogoSkipLink.indexOf("http") ? t("a", {
						attrs: {
							href: e.minLogoSkipLink
						}
					}, [t("img", {
						staticClass: "logo",
						attrs: {
							src: e.siteConfig.logo_src
						}
					})]) : t("router-link", {
						attrs: {
							to: e.minLogoSkipLink
						}
					}, [t("img", {
						staticClass: "logo",
						attrs: {
							src: e.siteConfig.logo_src
						}
					})]), e._v(" "), t("div", {
						staticClass: "menu"
					}, [t("ul", [e._l(e.mixLayoutOneTab, (function(a) {
						return [t("a", {
							attrs: {
								href: "javascript:;"
							},
							on: {
								click: function(t) {
									return e.toPage(a)
								}
							}
						}, [t("li", {
							class: {
								active: e.activePage == a.active
							}
						}, [e._v("\n                " + e._s(a.name) + "\n                "), t("span")])])]
					}))], 2)]), e._v(" "), t("search"), e._v(" "), t("div", {
						staticClass: "user"
					}, [e.$authH.checkLogin() ? [e.mixHidelognOutButton ? t("button", {
						class: ["logout", "logout_" + e.mixLogoutStyle],
						on: {
							click: function(t) {
								return e.$authH.loginOut()
							}
						}
					}, [t("i", {
						staticClass: "iconfont icontuichu2"
					}), e._v("退出\n          ")]) : e._e(), e._v(" "), t("div", {
						staticClass: "user_open",
						style: e.mixOneUserOpenStyle
					}, [t("i", {
						staticClass: "iconfont icon-yonghu11"
					}), e._v(" "), t("span", {
						on: {
							click: function(t) {
								return t.stopPropagation(), t.preventDefault(), e.mixClickUserName.apply(null, arguments)
							}
						}
					}, [e._v(e._s(e.$authH.getUserInfo().name))]), e._v(" "), e.showUserNamePop ? [t("i", {
						staticClass: "iconfont iconarrowdown"
					}), t("i", {
						staticClass: "iconfont iconxiangshangjiantouarrowup"
					}), e._v(" "), t("div", {
						staticClass: "menu_jianxi"
					}), e._v(" "), t("ul", {
						staticClass: "select_menu"
					}, [e.$authH.isAdmin() ? t("li", {
						staticClass: "to_backhome",
						on: {
							click: e.toBackHome
						}
					}, [e._v("进入后台")]) : e._e(), e._v(" "), e.mixLayoutShowHomepage ? t("li", {
						staticClass: "to_backhome"
					}, [t("router-link", {
						attrs: {
							to: "/homepage/index"
						}
					}, [e._v("个人主页")])], 1) : e._e(), e._v(" "), e._l(e.nowGetIdentityslist, (function(a) {
						return 1 != a.isCurrent ? t("li", {
							staticClass: "identity",
							attrs: {
								title: a.identity_name + "(" + a.number + ")"
							},
							on: {
								click: function(t) {
									return e.changeidentity(a)
								}
							}
						}, [e._v("\n                  " + e._s(a.identity_name) + "(" + e._s(a.number) + ")\n              ")]) : e._e()
					})), e._v(" "), e._l(e.nowGrantMeLists, (function(a) {
						return t("li", {
							on: {
								click: function(t) {
									return e.changeuser(a)
								}
							}
						}, [e._v("\n                " + e._s(a.name) + "\n              ")])
					}))], 2)] : e._e()], 2)] : [e.mixHidelognButton ? [e.showOutsideButton ? t("div", {
						staticClass: "login_open"
					}, [t("button", {
						staticClass: "logout logout_one",
						on: {
							click: function(t) {
								return e.$authH.toLogin()
							}
						}
					}, [t("i", {
						staticClass: "iconfont iconicon-denglu"
					}), e._v("登录\n              "), t("i", {
						staticClass: "iconfont iconarrowdown"
					}), e._v(" "), t("i", {
						staticClass: "iconfont iconxiangshangjiantouarrowup"
					})]), e._v(" "), t("div", {
						staticClass: "menu_jianxi"
					}), e._v(" "), t("ul", {
						staticClass: "select_menu"
					}, [t("li", {
						on: {
							click: function(t) {
								return e.$authH.toLogin()
							}
						}
					}, [e._v("校内用户")]), e._v(" "), t("li", {
						on: {
							click: e.outsideLogo
						}
					}, [e._v("校外用户")])])]) : t("button", {
						staticClass: "logout logout_one",
						on: {
							click: function(t) {
								return e.$authH.toLogin()
							}
						}
					}, [t("i", {
						staticClass: "iconfont iconicon-denglu"
					}), e._v("登录\n          ")])] : e._e()]], 2)], 1)]), e._v(" "), e.ShowImg ? t("commonCarousel") : t("div", {
						staticClass: "padding_box"
					}), e._v(" "), t("div", {
						staticClass: "content"
					}, [e._t("default")], 2), e._v(" "), e.mixRightNavShowPage ? t("rightNav") : e._e(), e._v(" "), t("frontFooter")], 1)
				}),
				d = [],
				p = a("2e8c"),
				X = (a("5c8e"), function() {
					var e = this,
						t = e._self._c;
					return t("div", {
						staticClass: "search-box"
					}, [t("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.searchKeywords,
							expression: "searchKeywords"
						}],
						ref: "searchInput",
						attrs: {
							placeholder: "请输入想搜索的关键词"
						},
						domProps: {
							value: e.searchKeywords
						},
						on: {
							focus: e.searchFocus,
							blur: e.searchBlur,
							input: [
								function(t) {
									t.target.composing || (e.searchKeywords = t.target.value)
								},
								e.searchChange
							]
						}
					}), e._v(" "), e.searchKeywords ? t("i", {
						staticClass: "iconfont iconsearchclose search-box_close",
						on: {
							click: e.clearKeywords
						}
					}) : e._e(), e._v(" "), e.showList ? t("div", {
						staticClass: "search-list",
						on: {
							click: e.clickList
						}
					}, [e.isEmpty ? e._e() : t("div", {
						staticClass: "tab-names"
					}, [t("ul", e._l(e.types, (function(a) {
						return "all" == a.key || e.searchData[a.key] && e.searchData[a.key].length ? t("li", {
							class: {
								active: e.type == a.key
							},
							on: {
								click: function(t) {
									return e.changeType(a.key)
								}
							}
						}, [e._v("\n            " + e._s(a.name)), t("span")]) : e._e()
					})), 0)]), e._v(" "), t("div", {
						staticClass: "tab-boxs"
					}, ["all" == e.type ? [e.isEmpty ? t("div", {
						staticClass: "empty",
						class: {
							emptyV2: 2 == e.$appConfig.pageVersion
						}
					}, [1 == e.$appConfig.pageVersion ? t("span", [e._v("没有找到相关内容")]) : [t("img", {
						attrs: {
							src: a("7bd1")
						}
					}), e._v(" "), t("p", [e._v("暂无搜索结果，换个关键词试试吧~")])]], 2) : e._l(e.types, (function(a) {
						return [e.searchData[a.key] && e.searchData[a.key].length ? t("div", [t("h5", [e._v(e._s(a.name))]), e._v(" "), t("ul", e._l(e.searchData[a.key], (function(i) {
							return t("li", {
								domProps: {
									innerHTML: e._s(e.mixSearchTextName ? i.name : i.origin_name)
								},
								on: {
									click: function(t) {
										return t.stopPropagation(), e.toPage(i.id, a.key, i)
									}
								}
							})
						})), 0)]) : e._e()]
					}))] : [e.searchData[e.type] ? t("div", [t("ul", e._l(e.searchData[e.type], (function(a) {
						return t("li", {
							domProps: {
								innerHTML: e._s(e.mixSearchTextName ? a.name : a.origin_name)
							},
							on: {
								click: function(t) {
									return t.stopPropagation(), e.toPage(a.id, e.type, a)
								}
							}
						})
					})), 0)]) : e._e()]], 2)]) : e._e(), e._v(" "), e.currThird.json_small_data ? t("miniProgramQrcode", {
						ref: "miniProgramQrcode",
						attrs: {
							data: e.currThird.json_small_data
						}
					}) : e._e()], 1)
				}),
				m = [],
				h = (a("466d"), a("4d63"), a("c607"), a("2c3e"), a("25f0"), a("5319"), a("e9c4"), a("e003"), a("c25c")),
				f = a("5961"),
				S = a("e48e"),
				g = {
					name: "layoutSearch",
					data: function() {
						return {
							showList: !1,
							searchKeywords: "",
							searchData: {},
							type: "all",
							changTypeed: !1,
							clearBar: null,
							types: [{
								key: "all",
								name: "综合"
							}, {
								key: "apps",
								name: "服务"
							}, {
								key: "reports",
								name: "报表"
							}, {
								key: "notify",
								name: "公告"
							}, {
								key: "reservation",
								name: "预约"
							}, {
								key: "office_notice",
								name: "办公公告"
							}],
							lastTime: 0,
							currThird: {}
						}
					},
					mixins: [f["a"], S["a"]],
					components: {
						miniProgramQrcode: h["a"]
					},
					props: {
						keywords: {
							type: String,
							default: ""
						}
					},
					watch: {
						keywords: function(e) {
							this.searchKeywords = e.split("$_$")[0], this.clickList()
						}
					},
					computed: {
						isEmpty: function() {
							var e = this,
								t = !0;
							return this.types.forEach((function(a) {
								e.searchData[a.key] && e.searchData[a.key].length && (t = !1)
							})), t
						}
					},
					methods: {
						searchFocus: function() {
							this.showList || this.searchInfo()
						},
						clearKeywords: function() {
							this.searchKeywords = "", this.searchInfo()
						},
						searchChange: function() {
							var e = this;
							setTimeout((function() {
								e.searchInfo()
							}), 30)
						},
						searchInfo: function() {
							var e = this;
							if (!this.searchKeywords) return this.showList = !1, this.setSearchData((new Date).getTime(), {}), !1;
							this.showList = !0, this.type = "all";
							var t = (new Date).getTime();
							this.$appFetch({
								url: "allSearch",
								method: "get",
								data: {
									keyword: this.searchKeywords
								}
							}, (function(a) {
								if (0 == a.e) {
									var i = {};
									e.types.forEach((function(t) {
										a.d[t.key] && a.d[t.key].length && (i[t.key] = [], a.d[t.key].forEach((function(a, T) {
											e.mixSearchTextName ? a.name = e.getName(a.name) : a.origin_name = e.getName(a.origin_name), a.name && i[t.key].push(a)
										})))
									})), e.setSearchData(t, i)
								} else e.$message({
									message: a.m,
									showClose: !0
								})
							}))
						},
						setSearchData: function(e, t) {
							e > this.lastTime && (this.lastTime = e, this.searchData = t)
						},
						toPage: function(e, t, a) {
							t = t || this.type;
							var i = "";
							switch (this.$appFetch({
								url: "setSearchService",
								method: "get",
								data: {
									name: a.origin_name
								}
							}), t) {
								case "apps":
									if (4 == a.type) this.thirdAppToUrl(a);
									else {
										if (7 == a.type || 8 == a.type) {
											i = this.$router.resolve({
												path: "/matter/start",
												query: {
													id: e
												}
											});
											break
										}
										this.$appCommonH.appDetail(a)
									}
									break;
								case "reports":
									i = this.$router.resolve({
										path: "/report/detail",
										query: {
											id: e
										}
									});
									break;
								case "notify":
									i = this.$router.resolve({
										path: "/site/informDetails",
										query: {
											id: e
										}
									});
									break;
								case "reservation":
									1 == a.type ? i = this.$router.resolve({
										path: "/reserve/hallView",
										query: {
											id: e
										}
									}) : 2 == a.type && (i = this.$router.resolve({
										path: "/reserve/reserveDetail",
										query: {
											id: e
										}
									}));
									break;
								case "office_notice":
									this.$router.push({
										path: "/site/billboarddetails",
										query: {
											wid: e
										}
									})
							}
							this.showList = !1, i && window.open(i.href)
						},
						getName: function(e) {
							return e.match(new RegExp(this.searchKeywords, "gi")) ? e.replace(new RegExp(this.searchKeywords, "gi"), '<span class="redColor">' + this.searchKeywords + "</span>") : e
						},
						changeType: function(e) {
							this.type = e
						},
						clickList: function() {
							var e = this;
							this.changTypeed = !0, this.$refs["searchInput"].focus(), this.clearBar && clearTimeout(this.clearBar), this.clearBar = setTimeout((function() {
								e.changTypeed = !1
							}), 1e3)
						},
						searchBlur: function() {
							var e = this;
							setTimeout((function() {
								e.changTypeed || (e.showList = !1)
							}), 300)
						},
						thirdAppToUrl: function(e) {
							var t = this;
							this.currThird = {}, this.$appFetch({
								url: "recentappssave",
								method: "post",
								data: {
									appId: e.id
								}
							}, (function(e) {
								0 == e.e || console.error(e.m)
							}), (function(e) {
								console.error(e)
							})).then((function() {
								t.$appFetch({
									url: "thirdClickNum",
									method: "get",
									data: {
										app_id: e.id
									}
								}, (function(e) {
									0 == e.e || console.error(e.m)
								}), (function(e) {
									console.error(e)
								}))
							})).then((function() {
								var a = !(1 != e.jump_type || !(0 == e.terminal && e.url || 1 == e.terminal && e.url_pc));
								if (e.details_page && (a || 2 == e.jump_type))
									if (2 == e.jump_type) e.json_small_data = JSON.parse(e.json_small_data), t.currThird = e, window.setTimeout((function() {
										var a = navigator.userAgent.toLowerCase();
										"micromessenger" == a.match(/MicroMessenger/i) ? wx.miniProgram.getEnv((function(a) {
											a.miniprogram ? t.$appFetch({
												url: "getUserCode",
												method: "get",
												data: {}
											}, (function(a) {
												0 == a.e ? (e.json_small_data.code = a.d, wx.miniProgram.navigateTo({
													url: "../thirdmini/thirdmini?data=" + JSON.stringify(e.json_small_data)
												})) : t.$message.error(a.m)
											}), (function(e) {
												t.$message.error("数据请求失败，请重新进入页面或点击按钮")
											})) : t.$refs.miniProgramQrcode.show()
										})) : t.$refs.miniProgramQrcode.show()
									}), 100);
									else {
										var i = 0 == e.terminal ? e.url : e.url_pc;
										window.open(i, "_blank")
									} else window.open(window.location.origin + "/v2/matter/m_detail?id=" + e.id, "_blank")
							}))
						}
					},
					beforeDestroy: function() {
						clearTimeout(this.clearBar)
					}
				}, A = g,
				v = a("0b56"),
				D = Object(v["a"])(A, X, m, !1, null, null, null),
				R = D.exports,
				M = (a("4e82"), {
					template: '\n    <div class="top-img">\n      <div class="img-carousel">\n        <div class="img-box">\n          <div class="img-left"></div>\n          <div class="img-content">\n            <template v-if="bannerList.length > 1">\n              <el-carousel @change="carouselChange" :interval="5000" height="240px" indicator-position="none" arrow="never">\n                <el-carousel-item v-for="banner in bannerList">\n                  <img :src="banner.logo_url" />\n                </el-carousel-item>\n              </el-carousel>\n            </template>\n            <template v-else-if="bannerList.length == 1">\n              <img :src="bannerList[0].logo_url" />\n            </template>\n          </div>\n          <div class="img-right"></div>\n        </div>\n        <div v-if="siteConfig.system_setting.is_home_background == \'yes\'" class="mantle"></div>\n      </div>\n      \n      <div class="substance">\n        <div class="title" v-if="siteConfig.system_setting.is_showWebTitle == \'yes\'">\n          <span></span>{{ mixLayOutOne }}<span></span>\n        </div>\n        <div class="pad-div" v-else></div>\n\n        \x3c!-- 搜索 --\x3e\n        <search :keywords="searchWords"></search>\n\n        \x3c!-- 关键字 --\x3e\n        <p :class="{\'keywords\': true, \'keywords1\': mixKeywordsStyle}" v-if="keywords.length">\n          {{siteConfig.system_setting.search_type==\'keyword\'?\'搜索关键词\':\'热搜服务\'}}：\n          <span v-for="keywordOne in keywords" @click="selectWord(keywordOne.keyword)">\n            {{ keywordOne.keyword }}\n          </span>\n        </p>\n\n        \x3c!-- 底部轮播图是否可以点击 --\x3e\n        <div class="carousel-link" v-if="bannerList.length && bannerList[carouselIndex] && bannerList[carouselIndex].linkurl">\n          <div></div>\n          <div>\n            <a target="_blank" :href="bannerList[carouselIndex].linkurl">点击查看 >></a>\n          </div>\n        </div>\n      </div>\n    </div>',
					data: function() {
						return {
							bannerList: [],
							keywords: [],
							searchWords: "",
							carouselIndex: 0
						}
					},
					mixins: [f["a"], S["a"]],
					props: {},
					components: {
						search: R
					},
					created: function() {
						this.getBanners(), this.getWords(), this.mixSetLayOutOneTitle()
					},
					methods: {
						getBanners: function() {
							var e = [];
							this.siteConfig.system_setting.home_banner_list.forEach((function(t) {
								1 == t.is_show && e.push(t)
							})), e.sort((function(e, t) {
								return e.sort - t.sort
							})), this.carouselIndex = 0, this.bannerList = e
						},
						carouselChange: function(e) {
							this.carouselIndex = e
						},
						getWords: function() {
							var e = this;
							this.$appFetch({
								url: "searchWords",
								method: "get",
								data: {
									search_type: this.siteConfig.system_setting.search_type
								}
							}, (function(t) {
								0 == t.e && (e.keywords = t.d)
							}))
						},
						selectWord: function(e) {
							this.searchWords = e + "$_$" + (new Date).getTime()
						}
					}
				}),
				V = a("82f2"),
				C = (a("a9e3"), a("2f62")),
				b = {
					data: function() {
						return {}
					},
					computed: Object(p["a"])(Object(p["a"])({}, Object(C["d"])("common", ["grantMeLists", "getIdentityslist"])), {}, {
						nowGrantMeLists: function() {
							return this.grantMeLists[this.$authH.getCookieUid()] ? this.grantMeLists[this.$authH.getCookieUid()] : []
						},
						nowGetIdentityslist: function() {
							return this.getIdentityslist[this.$authH.getCookieUid()] ? this.getIdentityslist[this.$authH.getCookieUid()] : []
						},
						showUserNamePop: function() {
							return this.$authH.isAdmin() || this.nowGrantMeLists.length || this.nowGetIdentityslist.length
						},
						showOutsideButton: function() {
							return "yes" == this.siteConfig.system_setting.outside_school_button_is_show
						}
					}),
					created: function() {
						var e = this;
						this.$authH.checkLogin() && this.$freeAjaxHelper.addFreeAjax((function() {
							e.getGrantMeLists(), e.getIdentityFun()
						}))
					},
					methods: Object(p["a"])(Object(p["a"])({}, Object(C["b"])("common", ["getGrantMeLists", "getIdentityFun"])), {}, {
						toBackHome: function() {
							this.$router.push("/backHome/index")
						},
						changeuser: function(e) {
							var t = this;
							this.$appFetch({
								method: "get",
								url: "changeUserLogin",
								data: {
									to_uid: e.uid
								}
							}, (function(e) {
								0 == e.e && (t.$authH.delControl(), window.location.reload())
							}))
						},
						changeidentity: function(e) {
							var t = this;
							this.$appFetch({
								url: "setIdentity",
								method: "post",
								data: {
									uid: e.uid
								}
							}, (function(e) {
								0 == e.e ? (t.$authH.delControl(), window.location.reload()) : t.$message.error(e.m)
							}), (function(e) {
								t.$message.error("数据请求失败，请重新进入页面或点击按钮")
							}))
						},
						outsideLogo: function() {
							window.location.href = appConfig.baseUrl + "site/login"
						}
					})
				}, y = {
					props: {
						activePage: {
							type: String,
							default: "index"
						},
						scrollMax: {
							type: Number,
							default: 300
						},
						loading: {
							type: Boolean,
							default: !1
						},
						ShowImg: {
							type: Boolean,
							default: !0
						}
					},
					data: function() {
						return {
							boxClass: {
								app: !0,
								layout_one: !0,
								header_fixed: !1
							},
							headerStyle: {
								left: 0
							}
						}
					},
					created: function() {
						$(window).on("scroll", this.scrollEvent)
					},
					methods: {
						toPage: function(e) {
							if (!e.path) return !1;
							0 == e.path.indexOf("http") ? e.openNew ? window.open(e.path) : window.location.href = e.path : e.openNew ? window.open(this.$router.resolve({
								path: e.path,
								query: e.query
							}).href) : this.$router.push({
								path: e.path,
								query: e.query
							})
						},
						scrollEvent: function(e) {
							var t = $(window).scrollTop();
							this.headerStyle = {
								left: "-" + $(window).scrollLeft() + "px"
							}, this.$set(this.boxClass, "header_fixed", t >= this.scrollMax)
						}
					},
					beforeDestroy: function() {
						$(window).off("scroll", this.scrollEvent)
					},
					mixins: [f["a"], S["a"], b]
				}, w = Object(p["a"])({
					components: {
						search: R,
						commonCarousel: M,
						rightNav: V["a"]
					}
				}, y),
				U = w,
				W = Object(v["a"])(U, u, d, !1, null, null, null),
				_ = W.exports,
				E = function() {
					var e = this,
						t = e._self._c;
					return t("div", {
						staticClass: "layoutOneV2"
					}, [t("div", {
						staticClass: "layoutOneV2_bg"
					}), e._v(" "), t("layoutHeader"), e._v(" "), t("div", {
						staticClass: "layoutOneV2_main content_w"
					}, [t("div", {
						staticClass: "main_search"
					}, [t("div", {
						staticClass: "main_search_title"
					}, [t("span", [e._v(e._s(e.siteConfig.site_name))])]), e._v(" "), t("div", {
						staticClass: "main_search_box"
					}, [t("searchCom", {
						attrs: {
							keywords: e.keywords
						}
					}), e._v(" "), e._m(0)], 1), e._v(" "), t("div", {
						staticClass: "main_search_keyword"
					}, [t("span", [e._v(e._s(e.keywordName) + "：")]), e._v(" "), e._l(e.keywordList, (function(a) {
						return [t("aside", {
							on: {
								click: function(t) {
									return e.selectKeyword(a.keyword)
								}
							}
						}, [e._v(e._s(a.keyword))])]
					}))], 2)]), e._v(" "), t("div", {
						staticClass: "main_hot"
					}, [t("div", {
						staticClass: "main_hot_tab"
					}, [t("span", {
						class: {
							active: 1 == e.appTab
						},
						on: {
							click: function(t) {
								e.appTab = 1
							}
						}
					}, [1 == e.appTab ? t("img", {
						attrs: {
							src: a("1c69"),
							alt: ""
						}
					}) : t("img", {
						attrs: {
							src: a("6553"),
							alt: ""
						}
					}), e._v("\n          热门服务\n        ")]), e._v(" "), e.$authH.checkLogin() ? t("span", {
						class: {
							active: 2 == e.appTab
						},
						on: {
							click: function(t) {
								e.appTab = 2
							}
						}
					}, [t("i", {
						staticClass: "iconfont icona-zu841"
					}), e._v("\n          最近办理\n        ")]) : e._e()]), e._v(" "), 1 == e.appTab && e.hotApps.length ? t("div", {
						staticClass: "main_hot_app"
					}, [e._l(e.hotApps, (function(a) {
						return [t("a", {
							staticClass: "elps",
							attrs: {
								title: a.name,
								href: "javascript:;"
							},
							on: {
								click: function(t) {
									return e.mixAllAppsJump(a)
								}
							}
						}, [e._v(e._s(a.name))])]
					}))], 2) : e._e(), e._v(" "), 2 == e.appTab && e.lastApps.length ? t("div", {
						staticClass: "main_hot_app"
					}, [e._l(e.lastApps, (function(a) {
						return [t("a", {
							staticClass: "elps",
							attrs: {
								title: a.name,
								href: "javascript:;"
							},
							on: {
								click: function(t) {
									return e.mixAllAppsJump(a)
								}
							}
						}, [e._v(e._s(a.name))])]
					}))], 2) : e._e(), e._v(" "), 1 != e.appTab || e.hotApps.length ? e._e() : t("div", {
						directives: [{
							name: "loading",
							rawName: "v-loading",
							value: e.hotLoading,
							expression: "hotLoading"
						}],
						staticClass: "main_hot_nodata"
					}, [e.hotLoading ? e._e() : [1 != e.appTab || e.hotApps.length ? e._e() : t("img", {
						attrs: {
							src: a("7ad9")
						}
					}), e._v(" "), t("p", [e._v("暂无热门应用，前往全部应用~")]), e._v(" "), t("routerLink", {
						attrs: {
							to: "/site/serviceList"
						}
					}, [e._v("\n            应用中心"), t("i", {
						staticClass: "el-icon-arrow-right"
					})])]], 2), e._v(" "), 2 != e.appTab || e.lastApps.length ? e._e() : t("div", {
						staticClass: "main_hot_nodata"
					}, [2 != e.appTab || e.lastApps.length ? e._e() : t("img", {
						attrs: {
							src: a("1cd2")
						}
					}), e._v(" "), t("p", [e._v("您还没有使用记录，前往全部应用~")]), e._v(" "), t("routerLink", {
						attrs: {
							to: "/site/serviceList"
						}
					}, [e._v("\n          应用中心"), t("i", {
						staticClass: "el-icon-arrow-right"
					})])], 1)])]), e._v(" "), e._t("default"), e._v(" "), e._e(), e._v(" "), t("div", {
						staticClass: "layoutOneV2_footer"
					}, [t("p", [t("span", [e._v("地址：" + e._s(e.siteConfig.site_address))]), e._v(" "), t("span", [e._v("电话：" + e._s(e.siteConfig.site_mobile))]), e._v(" "), t("span", [e._v("邮编：" + e._s(e.siteConfig.site_postal))]), e._v(" "), t("span", [e._v("邮箱：" + e._s(e.siteConfig.site_email))])]), e._v(" "), t("p", [t("span", [e._v(e._s(e.siteConfig.site_copyright))]), e._v(" "), t("span", [e._v(e._s(e.siteConfig.site_archival))])])]), e._v(" "), t("rightNavV2"), e._v(" "), e._m(1), e._v(" "), e.hFolder ? t("folder", {
						attrs: {
							folderData: e.folderData
						},
						on: {
							clearFolder: e.clearFolder
						}
					}) : e._e(), e._v(" "), e.currThird && e.currThird.json_small_data ? t("miniProgramQrcode", {
						ref: "miniProgramQrcode",
						attrs: {
							data: e.currThird.json_small_data
						}
					}) : e._e()], 2)
				}, x = [
					function() {
						var e = this,
							t = e._self._c;
						return t("aside", [t("i", {
							staticClass: "iconfont icon31sousuo"
						}), e._v("\n          查询\n        ")])
					},
					function() {
						var e = this,
							t = e._self._c;
						return t("section", {
							staticClass: "layoutV2_toTop"
						}, [t("img", {
							attrs: {
								src: a("755a"),
								alt: ""
							}
						}), e._v(" "), t("img", {
							attrs: {
								src: a("db08"),
								alt: ""
							}
						}), e._v(" "), t("p", [e._v("返回顶部")])])
					}
				],
				I = (a("c6b5"), a("fb6a"), a("0481"), a("4069"), a("d81d"), a("fa89")),
				k = {
					data: function() {
						return {
							bottomLinks: [],
							keywordList: [],
							keywords: "",
							appTab: 1,
							hotApps: [],
							hotLoading: !1,
							lastApps: [],
							banner: "",
							hFolder: !1,
							folderData: []
						}
					},
					props: ["hideContact"],
					computed: {
						keywordName: function() {
							return "keyword" == this.siteConfig.system_setting.search_type ? "搜索关键词" : "热搜服务"
						},
						loginConfig: function() {
							return null === this.$store.state.common.loginConfig ? (this.GET_LOGINCONFIG(), {}) : this.$store.state.common.loginConfig
						},
						footerLinks: function() {
							return null === this.$store.state.common.footerLinks ? (this.GET_FOOTERlINKS(), []) : this.$store.state.common.footerLinks
						}
					},
					created: function() {
						this.getWords(), this.getHotApps(), this.getLastApps()
					},
					mounted: function() {
						this.getBanners(), $(".layoutV2_toTop").toTop({
							right: 0,
							bottom: 100
						})
					},
					methods: Object(p["a"])(Object(p["a"])({}, Object(C["b"])("common", ["GET_LOGINCONFIG", "GET_FOOTERlINKS"])), {}, {
						getBanners: function() {
							var e = this,
								t = I["a"].getSItem("pcSiteBg");
							t ? $(".layoutOneV2_bg").css({
								backgroundImage: "url(".concat(t, ")")
							}) : this.$appFetch({
								url: "cHomeGetBanners",
								method: "get"
							}).then((function(t) {
								t.e ? e.$message.error("数据请求失败，请重新进入页面或点击按钮") : t.d[0] && t.d[0].path && ($(".layoutOneV2_bg").css({
									backgroundImage: "url(".concat(t.d[0].path, ")")
								}), I["a"].setSItem("pcSiteBg", t.d[0].path))
							}), (function(t) {
								e.$message.error("数据请求失败，请重新进入页面或点击按钮")
							}))
						},
						getWords: function() {
							var e = this;
							this.$appFetch({
								url: "searchWords",
								method: "get",
								data: {
									search_type: this.siteConfig.system_setting.search_type
								}
							}, (function(t) {
								0 == t.e && (e.keywordList = t.d)
							}))
						},
						selectKeyword: function(e) {
							this.keywords = e + "$_$" + (new Date).getTime()
						},
						getHotApps: function() {
							var e = this;
							this.hotLoading = !0, this.$appFetch({
								url: "homehotapps",
								method: "get",
								data: {
									more: 0
								}
							}, (function(t) {
								e.hotLoading = !1, t.e ? e.$message.error("数据请求失败，请重新进入页面或点击按钮") : e.hotApps = t.d.map((function(e) {
									return e.data
								})).flat().slice(0, 5)
							}), (function(t) {
								e.hotLoading = !1, e.$message.error("数据请求失败，请重新进入页面或点击按钮")
							}))
						},
						getLastApps: function() {
							var e = this;
							this.$authH.checkLogin() && this.$appFetch({
								url: "siteLastApps",
								method: "get"
							}).then((function(t) {
								t.e ? e.$message.error("数据请求失败，请重新进入页面或点击按钮") : e.lastApps = t.d.slice(0, 5)
							})).
							catch ((function(t) {
								e.$message.error("数据请求失败，请重新进入页面或点击按钮")
							}))
						},
						showFolder: function(e) {
							if (!e.apps && 0 == e.apps.length) return this.$message({
								message: "应用组暂无事项",
								type: "warning"
							}), !1;
							this.folderData = e, this.hFolder = !0
						},
						clearFolder: function(e) {
							this.hFolder = e
						}
					})
				}, O = function() {
					var e = this,
						t = e._self._c;
					return t("div", {
						staticStyle: {
							position: "relative",
							"z-index": "2"
						}
					}, [t("div", {
						staticClass: "layoutV2_header content_w"
					}, [t("a", {
						attrs: {
							href: "/v2/site/index"
						}
					}, [t("img", {
						attrs: {
							src: e.siteConfig.logo_src
						}
					})]), e._v(" "), t("div", {
						staticClass: "header_link"
					}, [t("section", {
						staticClass: "link"
					}, [e._l(e.headerLinks, (function(a) {
						return [t("a", {
							attrs: {
								href: a.url,
								target: "_blank"
							}
						}, [e._v(e._s(a.name))]), e._v(" "), t("i")]
					}))], 2), e._v(" "), e.$authH.checkLogin() ? [t("el-popover", {
						attrs: {
							placement: "bottom",
							width: "130",
							trigger: "click",
							"popper-class": "layoutV2_header_pop",
							disabled: !e.showUserNamePop
						}
					}, [t("section", [e.$authH.isAdmin() ? t("a", {
						staticClass: "elps",
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: e.toBackHome
						}
					}, [e._v("进入后台")]) : e._e(), e._v(" "), e._l(e.nowGetIdentityslist, (function(a) {
						return [1 != a.isCurrent ? t("a", {
							staticClass: "elps",
							attrs: {
								href: "javascript:;",
								title: a.identity_name + "(" + a.number + ")"
							},
							on: {
								click: function(t) {
									return e.changeidentity(a)
								}
							}
						}, [e.mixIsShowSwitchTo ? t("span", [e._v("切换至")]) : e._e(), e._v("  " + e._s(a.identity_name) + "(" + e._s(a.number) + ")\n                ")]) : e._e()]
					})), e._v(" "), e._l(e.nowGrantMeLists, (function(a) {
						return [t("a", {
							staticClass: "elps",
							attrs: {
								href: "javascript:;"
							},
							on: {
								click: function(t) {
									return e.changeuser(a)
								}
							}
						}, [e.mixIsShowSwitchTo ? t("span", [e._v("切换至")]) : e._e(), e._v("  " + e._s(a.name) + "\n                ")])]
					}))], 2), e._v(" "), t("div", {
						staticClass: "user",
						attrs: {
							slot: "reference"
						},
						slot: "reference"
					}, [e._v("\n              " + e._s(e.$authH.getUserInfo().name) + "\n              "), e.showUserNamePop ? t("i", {
						staticClass: "el-icon-arrow-down"
					}) : e._e()])]), e._v(" "), t("span", {
						staticClass: "logout",
						on: {
							click: function(t) {
								return e.$authH.loginOut()
							}
						}
					}, [t("i", {
						staticClass: "iconfont icontuichu2"
					}), e._v("退出\n          ")])] : [t("el-popover", {
						attrs: {
							placement: "bottom",
							width: "130",
							trigger: "hover",
							"popper-class": "layoutV2_header_pop",
							disabled: !e.showOutsideButton
						}
					}, [t("section", [t("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(t) {
								return e.$authH.toLogin()
							}
						}
					}, [e._v("校内用户")]), e._v(" "), t("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: e.outsideLogo
						}
					}, [e._v("校外用户")])]), e._v(" "), t("span", {
						staticClass: "login",
						attrs: {
							slot: "reference"
						},
						on: {
							click: function(t) {
								return e.$authH.toLogin()
							}
						},
						slot: "reference"
					}, [t("i", {
						staticClass: "iconfont iconicon-denglu"
					}), e._v("登录\n              "), e.showOutsideButton ? t("i", {
						staticClass: "el-icon-arrow-down"
					}) : e._e()])])]], 2)]), e._v(" "), t("div", {
						staticClass: "layoutV2_nav"
					}, [t("nav", {
						staticClass: "content_w"
					}, e._l(e.menuLists, (function(a, i) {
						return t("div", {
							key: i
						}, [t("a", {
							class: {
								active: a.path && a.path == e.nowPath || a.childrens && a.childrens.some((function(t) {
									return t.path == e.nowPath
								}))
							},
							on: {
								click: function(t) {
									return e.toPage(a)
								}
							}
						}, [e._v("\n            " + e._s(a.name) + "\n          ")]), e._v(" "), a.childrens && a.childrens.length ? t("div", {
							staticClass: "children"
						}, e._l(a.childrens, (function(a, i) {
							return t("a", {
								key: i,
								class: {
									active: a.path && a.path == e.nowPath
								},
								on: {
									click: function(t) {
										return e.toPage(a)
									}
								}
							}, [e._v("\n                " + e._s(a.name) + "\n              ")])
						})), 0) : e._e()])
					})), 0)])])
				}, Q = [],
				N = (a("0e2c"), a("caad"), {
					props: {
						className: String
					},
					data: function() {
						return {
							menu: [{
								name: "首页",
								path: "/site/index"
							}, {
								name: "服务大厅",
								path: "/site/serviceList"
							}, {
								name: "我的申请",
								path: "/matter/launch"
							}, {
								name: "我的任务",
								path: "/matter/todo"
							}, {
								name: "公文协同",
								path: "",
								children: [{
									name: "我的公文",
									path: "/reserve/myOfficial"
								}, {
									name: "公文中心",
									path: "/reserve/officialCenter"
								}, {
									name: "公文管理",
									path: "/reserve/dispatchManage"
								}]
							}, {
								name: "数据中心",
								path: "/report/index"
							}, {
								name: "效能监督",
								path: "/site/monitoring"
							}, {
								name: "个人主页",
								path: "/site/ucenter"
							}],
							topLinks: []
						}
					},
					created: function() {
						this.$authH.checkLogin() ? this.mixGetTopNav() : this.UPDATA_MENULIST(this.mixLayoutTwoTab.filter((function(e) {
							return !["公文协同", "效能监督", "数据中心"].includes(e.name)
						})))
					},
					computed: {
						headerLinks: function() {
							return null === this.$store.state.common.headerLinks ? (this.GET_HEADERlINKS(), []) : this.$store.state.common.headerLinks
						},
						nowPath: function() {
							return this.$route.path
						}
					},
					methods: Object(p["a"])(Object(p["a"])({}, Object(C["b"])("common", ["GET_HEADERlINKS"])), {}, {
						toPage: function(e) {
							if (!e.path) return !1;
							0 == e.path.indexOf("http") ? e.openNew ? window.open(e.path) : window.location.href = e.path : e.openNew ? window.open(this.$router.resolve({
								path: e.path,
								query: e.query
							}).href) : this.$router.push({
								path: e.path,
								query: e.query
							})
						}
					}),
					mixins: [b, f["a"], S["a"]]
				}),
				L = Object(p["a"])({}, N),
				j = L,
				F = Object(v["a"])(j, O, Q, !1, null, null, null),
				Z = F.exports,
				H = a("91b4"),
				G = function() {
					var e = this,
						t = e._self._c;
					return t("div", [t("section", {
						staticClass: "layoutOneV2_sidebar"
					}, [t("div", [t("router-link", {
						attrs: {
							to: "/site/ucenter"
						}
					}, [t("img", {
						staticClass: "default_img",
						attrs: {
							src: a("6a27"),
							alt: ""
						}
					}), e._v(" "), t("img", {
						staticClass: "hover_img",
						attrs: {
							src: a("ed52"),
							alt: ""
						}
					}), e._v(" "), t("p", [e._v("通知消息")]), e._v(" "), e.unreadCount.messagge > 0 ? t("span") : e._e()]), e._v(" "), t("router-link", {
						attrs: {
							to: "/matter/todo"
						}
					}, [t("img", {
						staticClass: "default_img",
						attrs: {
							src: a("2abc"),
							alt: ""
						}
					}), e._v(" "), t("img", {
						staticClass: "hover_img",
						attrs: {
							src: a("a3aa"),
							alt: ""
						}
					}), e._v(" "), t("p", [e._v("我的审批")]), e._v(" "), e.unreadCount.my_todo > 0 ? t("span") : e._e()]), e._v(" "), t("router-link", {
						attrs: {
							to: "/matter/launch"
						}
					}, [t("img", {
						staticClass: "default_img",
						attrs: {
							src: a("555d"),
							alt: ""
						}
					}), e._v(" "), t("img", {
						staticClass: "hover_img",
						attrs: {
							src: a("cec0"),
							alt: ""
						}
					}), e._v(" "), t("p", [e._v("我的申请")])]), e._v(" "), e.loginConfig.qrcode ? [t("el-popover", {
						attrs: {
							placement: "left",
							width: "150",
							trigger: "hover",
							"visible-arrow": !1
						}
					}, [t("img", {
						staticStyle: {
							width: "100%",
							height: "100%"
						},
						attrs: {
							src: e.loginConfig.qrcode,
							alt: ""
						}
					}), e._v(" "), t("a", {
						attrs: {
							slot: "reference",
							href: "javascript:;"
						},
						slot: "reference"
					}, [t("img", {
						staticClass: "default_img",
						attrs: {
							src: a("097b"),
							alt: ""
						}
					}), e._v(" "), t("img", {
						staticClass: "hover_img",
						attrs: {
							src: a("06cfc"),
							alt: ""
						}
					}), e._v(" "), t("p", [e._v("公众号")])])])] : e._e(), e._v(" "), t("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(t) {
								e.feedShow = !0
							}
						}
					}, [t("img", {
						staticClass: "default_img",
						attrs: {
							src: a("edd4"),
							alt: ""
						}
					}), e._v(" "), t("img", {
						staticClass: "hover_img",
						attrs: {
							src: a("5e5f"),
							alt: ""
						}
					}), e._v(" "), t("p", [e._v("意见反馈")])])], 2)]), e._v(" "), e.feedShow ? t("feedback", {
						on: {
							cancel: e.cancel
						}
					}) : e._e()], 1)
				}, K = [],
				z = (a("fad0"), a("bfbc")),
				J = {
					components: {
						feedback: z["a"]
					},
					data: function() {
						return {
							unreadCount: {},
							feedShow: !1
						}
					},
					computed: {
						loginConfig: function() {
							return null === this.$store.state.common.loginConfig ? (this.GET_LOGINCONFIG(), {}) : this.$store.state.common.loginConfig
						}
					},
					created: function() {
						this.getUnreadCount()
					},
					methods: Object(p["a"])(Object(p["a"])({}, Object(C["b"])("common", ["GET_LOGINCONFIG"])), {}, {
						getUnreadCount: function() {
							var e = this;
							this.$authH.checkLogin() && this.$appFetch({
								url: "getunreadData",
								method: "get"
							}, (function(t) {
								0 == t.e ? e.unreadCount = t.d : e.$message.error(t.m)
							}), (function(t) {
								e.$message.error({
									message: "数据请求失败，请重新进入页面或点击按钮"
								})
							}))
						},
						cancel: function() {
							this.feedShow = !1
						}
					})
				}, q = Object(p["a"])({}, J),
				ee = q,
				te = Object(v["a"])(ee, G, K, !1, null, null, null),
				ae = te.exports,
				ie = Object(p["a"])({
					components: {
						layoutHeader: Z,
						searchCom: R,
						miniProgramQrcode: h["a"],
						folder: H["a"],
						rightNavV2: ae
					}
				}, k),
				Te = ie,
				ne = Object(v["a"])(Te, E, x, !1, null, null, null),
				oe = ne.exports,
				se = {
					1: _,
					2: oe
				};
			o.a.component("layoutOne", se[appConfig.pageVersion]);
			a("2532");
			var re = a("33c0"),
				Ye = function() {
					var e = this,
						t = e._self._c;
					return t("div", {
						staticClass: "change_version"
					}, [t("div", {
						staticClass: "zl_alert_box"
					}, [t("div", {
						staticClass: "zl_alert_header"
					}, [t("div", {
						staticClass: "mengcheng"
					}), e._v(" "), t("span", [e._v("请选择布局模板")]), e._v(" "), t("i", {
						staticClass: "iconfont iconguanbi1",
						on: {
							click: function(t) {
								return e.$emit("hidetemplate", !1)
							}
						}
					}), e._v(" "), t("div", {
						staticClass: "clearboth"
					})]), e._v(" "), t("div", {
						staticClass: "zl_alert_content"
					}, [t("div", {
						staticClass: "select_version"
					}, [t("div", {
						staticClass: "version_one main_version"
					}, [e._m(0), e._v(" "), t("p", [t("el-radio", {
						attrs: {
							label: "inst"
						},
						model: {
							value: e.version,
							callback: function(t) {
								e.version = t
							},
							expression: "version"
						}
					}, [e._v(" ")])], 1)]), e._v(" "), t("div", {
						staticClass: "version_one task_version"
					}, [e._m(1), e._v(" "), t("p", [t("el-radio", {
						attrs: {
							label: "task"
						},
						model: {
							value: e.version,
							callback: function(t) {
								e.version = t
							},
							expression: "version"
						}
					}, [e._v(" ")])], 1)])]), e._v(" "), t("div", {
						staticClass: "select_tips"
					}, [t("span", [e._v("操作提示：")]), e._v(" "), t("div", {
						staticClass: "tips_content"
					}, [t("div", {
						staticClass: "operation operation_one"
					}, [t("span", [e._v("1.鼠标长按区块底部可上下拖动排序")]), e._v(" "), t("img", {
						attrs: {
							src: e.$appConfig.staticUrl + "img/operation1.jpeg",
							alt: ""
						}
					})]), e._v(" "), t("div", {
						staticClass: "operation operation_two"
					}, [t("span", [e._v("2.点击区块右下角可向下添加新区块或隐藏当前区块")]), e._v(" "), t("img", {
						attrs: {
							src: e.$appConfig.staticUrl + "img/operation2.png",
							alt: ""
						}
					})])])])]), e._v(" "), t("div", {
						staticClass: "zl_alert_footer"
					}, [t("zl-button", {
						attrs: {
							widthType: "fixed",
							type: "line"
						},
						on: {
							click: function(t) {
								return e.$emit("hidetemplate", !1)
							}
						}
					}, [e._v("取消")]), e._v(" "), t("zl-button", {
						attrs: {
							widthType: "fixed",
							selfClass: "is_ok"
						},
						on: {
							click: e.isOk
						}
					}, [e._v("确定")])], 1)])])
				}, ce = [
					function() {
						var e = this,
							t = e._self._c;
						return t("div", {
							staticClass: "cover"
						}, [t("div", {
							staticClass: "offset"
						}), e._v(" "), t("h1", [e._v("大众版")]), e._v(" "), t("span", [e._v("专注于服务申请")]), e._v(" "), t("i", {
							staticClass: "iconfont iconshenqing"
						})])
					},
					function() {
						var e = this,
							t = e._self._c;
						return t("div", {
							staticClass: "cover"
						}, [t("div", {
							staticClass: "offset"
						}), e._v(" "), t("h1", [e._v("任务版")]), e._v(" "), t("span", [e._v("专注于审批任务")]), e._v(" "), t("i", {
							staticClass: "iconfont icongaizhang"
						})])
					}
				],
				Be = (a("77c7"), {
					mixins: [f["a"], S["a"]],
					data: function() {
						return {
							version: "inst"
						}
					},
					inject: ["homepage"],
					created: function() {
						this.version = this.homepage.versionType
					},
					methods: {
						isOk: function() {
							var e = this;
							if (this.version == this.homepage.versionType) return this.$emit("hidetemplate", !1);
							this.homepage.versionType ? this.$confirmTips("是否切换到“".concat("inst" === this.version ? "大众版" : "任务版", "”布局"), "当前布局配置已保存").then((function(t) {
								e.homepage.versionType = e.version, e.$emit("hidetemplate", !1)
							})) : (this.homepage.versionType = this.version, this.$emit("hidetemplate", !1))
						}
					}
				}),
				le = Be,
				Pe = Object(v["a"])(le, Ye, ce, !1, null, null, null),
				ue = Pe.exports,
				de = a("ea73"),
				pe = (a("6aac"), a("1332")),
				Xe = '\n<div :class="boxClass">\n  <headerCom v-if="showSearchHeader"></headerCom>\n\n  <div class="content" :style="nuaaHeader">\n    <slot></slot>\n  </div>\n\n  <div class="footer">\n    <p>\n      <span v-if="siteConfig.site_name">{{ siteConfig.site_name }} <span>|</span></span>\n      <span v-if="siteConfig.site_address">地址：{{ siteConfig.site_address }} <span>|</span></span>\n      <span v-if="siteConfig.site_email"> 邮箱：{{ siteConfig.site_email }} <span>|</span></span>\n      <span v-if="siteConfig.site_copyright">{{ siteConfig.site_copyright }} <span>|</span></span>\n      <span v-if="siteConfig.site_archival">{{ siteConfig.site_archival }} <span>|</span></span>\n    </p>\n  </div>\n  \n  <resetPwd ref="resetPwd"></resetPwd>\n\n  <div class="homepage_sidebar" v-if="isShowHomepageSidebar">\n    <ul class="nav_ul">\n      <li class="nav_ul_li" @click="setTemplate(true)">\n        <div class="nav_div">\n          <div class="img img_1"></div>\n          <p>模板</p>\n          <div class="dian"></div>\n        </div>\n      </li>\n      <el-popover\n        placement="left-start"\n        width="110"\n        trigger="hover"\n        popper-class="homepage_sidebar_msg">\n        <div class="homepage_sidebar_msg_main">\n          <router-link to="/site/ucenter">\n            消息中心\n          </router-link>\n          <router-link v-for="messageType in messageTypes" :to="{ path: \'/site/ucenter\', query: { mtype: messageType.value} }">\n            {{ messageType.name }}<span class="redColor">（{{ getNumByType(messageType.value) }}）\n          </router-link>\n          <a href="javascript:;" @click="setMessage(true)">\n            <i class="iconfont icon-shezhi" />消息接收设置\n          </a>\n        </div>\n        <li class="nav_ul_li" slot="reference">\n          <div class="nav_div">\n            <div class="img img_2"></div>\n            <p>消息</p>\n            <div class="dian"></div>\n          </div>\n        </li>\n      </el-popover>\n    </ul>\n  </div>\n\n  \x3c!-- 消息设置 --\x3e\n  <messageSet @hidemessage="setMessage" v-if="showMessage"></messageSet>\n\n  \x3c!-- 模板切换 --\x3e\n  <changeVersion @hidetemplate="setTemplate" v-if="showTemplate"></changeVersion>\n</div>\n';
			o.a.component("layoutTwo", {
				data: function() {
					return {
						menus: [{
							name: "首页",
							path: "/site/index",
							openNew: 0,
							query: {}
						}, {
							name: "服务大厅",
							path: "/site/service",
							openNew: 0,
							query: {}
						}, {
							name: "我的主页",
							path: "/homepage/index",
							openNew: 0,
							query: {}
						}, {
							name: "我的申请",
							childrens: [{
								name: "我的申请",
								path: "/matter/launch",
								openNew: 0,
								query: {}
							}]
						}, {
							name: "我的任务",
							childrens: [{
								name: "我的待办",
								path: "/matter/todo",
								openNew: 0,
								query: {}
							}, {
								name: "我的知会",
								path: "/matter/read",
								openNew: 0,
								query: {}
							}, {
								name: "我的督办",
								path: "/matter/oversee",
								openNew: 0,
								query: {}
							}]
						}, {
							name: "数据中心",
							childrens: [{
								name: "统计报表",
								path: "/report/index",
								openNew: 0,
								query: {}
							}]
						}],
						boxClass: {
							app: !0,
							layout_two: !0,
							search_open: !1,
							header_fixed: !1,
							hide_header: !1
						},
						messageTypes: [{
							name: "申请",
							value: 1
						}, {
							name: "审批",
							value: 2
						}, {
							name: "知会",
							value: 3
						}, {
							name: "催办",
							value: 4
						}],
						showMessage: !1,
						showTemplate: !1,
						headerStyle: {
							left: 0
						},
						nuaaHeader: {},
						logoutStatus: "no",
						showLists: []
					}
				},
				mixins: [f["a"], S["a"]],
				props: {
					hasTemplate: {
						type: Boolean,
						default: !1
					},
					scrollHideTop: {
						type: Boolean,
						default: !1
					},
					scrollMax: {
						type: Number,
						default: 70
					},
					hideHeader: {
						type: Boolean,
						default: !1
					}
				},
				components: {
					search: R,
					messageSet: re["a"],
					changeVersion: ue,
					resetPwd: de["a"],
					headerCom: pe["a"]
				},
				computed: Object(p["a"])(Object(p["a"])(Object(p["a"])({}, Object(C["d"])("common", ["grantMeLists", "messageCount", "getIdentityslist"])), {
					nowGrantMeLists: function() {
						return this.grantMeLists[this.$authH.getCookieUid()] ? this.grantMeLists[this.$authH.getCookieUid()] : []
					},
					nowGetIdentityslist: function() {
						return this.getIdentityslist[this.$authH.getCookieUid()] ? this.getIdentityslist[this.$authH.getCookieUid()] : []
					}
				}), {}, {
					showSearchHeader: function() {
						return "/matter/start" != this.$route.path && "/matter/examine" != this.$route.path
					},
					isShowHomepageSidebar: function() {
						return "/homepage/index" == this.$route.path
					}
				}),
				created: function() {
					var e = this;
					this.getLoginConfig(), this.boxClass.hide_header = this.hideHeader, this.scrollHideTop && ($(window).on("scroll", this.scrollEvent), this.scrollEvent()), this.$authH.checkLogin() && this.$freeAjaxHelper.addFreeAjax((function() {
						e.getGrantMeLists(), e.getMessageCount(), e.getIdentityFun()
					})), this.mixNuaaHideHeader() ? this.nuaaHeader = {} : this.nuaaHeader = {
						paddingTop: 0,
						minHeight: "calc(100% - 50px)"
					}
				},
				mounted: function() {
					this.mixhithideHeader()
				},
				methods: Object(p["a"])(Object(p["a"])(Object(p["a"])({}, Object(C["b"])("common", ["getGrantMeLists", "getMessageCount", "getIdentityFun"])), Object(C["c"])("common", ["UPDATE_MESSAGE_TYPE"])), {}, {
					getShowModels: function() {
						var e = this;
						this.$appFetch({
							method: "get",
							url: "showModels",
							data: {
								names: ["my-todo", "inst-list", "my-read", "service-count", "apps-report-lists"]
							}
						}, (function(t) {
							if (0 == t.e)
								for (var a in t.d) "Y" == t.d[a] && e.showLists.push(a)
						}))
					},
					checkShow: function(e) {
						var t = this;
						return !e.parentShow || e.parentShow && e.parentShow.filter((function(e) {
							return t.showLists.includes(e)
						})).length
					},
					toBackHome: function() {
						this.$router.push("/backHome/index")
					},
					scrollEvent: function(e) {
						var t = $(window).scrollTop() > this.scrollMax;
						this.boxClass.header_fixed != t && this.$emit("updateFixed", t), this.headerStyle = {
							left: "-" + $(window).scrollLeft() + "px"
						}, this.$set(this.boxClass, "header_fixed", t)
					},
					getNumByType: function(e) {
						return this.messageCount[e] ? this.messageCount[e] : 0
					},
					setTemplate: function(e) {
						this.showTemplate = e
					},
					setMessage: function(e) {
						this.showMessage = e
					},
					changeSearch: function() {
						this.boxClass.search_open = !this.boxClass.search_open
					},
					toPage: function(e) {
						if (!e.path) return !1;
						e.openNew ? window.open(this.$router.resolve({
							path: e.path,
							query: e.query
						})) : this.$router.push({
							path: e.path,
							query: e.query
						})
					},
					changeuser: function(e) {
						var t = this;
						this.$appFetch({
							method: "get",
							url: "changeUserLogin",
							data: {
								to_uid: e.uid
							}
						}, (function(e) {
							0 == e.e && (t.$authH.delControl(), window.location.reload())
						}))
					},
					changeidentity: function(e) {
						var t = this;
						this.$appFetch({
							url: "setIdentity",
							method: "post",
							data: {
								uid: e.uid
							}
						}, (function(e) {
							0 == e.e ? (t.$authH.delControl(), window.location.reload()) : t.$message.error(e.m)
						}), (function(e) {
							t.$message.error("数据请求失败，请重新进入页面或点击按钮")
						}))
					},
					outsideLogo: function() {
						window.location.href = appConfig.baseUrl + "site/login"
					},
					getLoginConfig: function() {
						var e = this;
						this.$appFetch({
							url: "getLoginConfig",
							method: "get"
						}).then((function(t) {
							0 == t.e ? e.logoutStatus = t.d.outside_school_button_is_show : e.$message({
								type: "error",
								message: t.m
							})
						})).
						catch ((function(t) {
							e.$message({
								type: "error",
								message: "数据请求失败，请重新进入页面或点击按钮"
							})
						}))
					}
				}),
				beforeDestroy: function() {
					this.scrollHideTop && $(window).off("scroll", this.scrollEvent)
				},
				template: Xe
			});
			var me = '\n<div class="app layout_three">\n  <div class="content">\n    <slot></slot>\n  </div>\n</div>\n';
			o.a.component("layoutThree", {
				data: function() {
					return {}
				},
				template: me
			});
			a("281c");
			var he = '\n<button :class="nowClass" v-on="$listeners">\n  <slot></slot>\n  <i class="iconfont iconarrowdown"></i>\n</button>\n';
			o.a.component("zlButton", {
				data: function() {
					return {}
				},
				computed: {
					nowClass: function() {
						var e = {
							"zl-button": !0
						};
						return e["zl-button-" + this.type] = !0, e["zl-button-" + this.widthType] = !0, e["zl-button-" + this.size] = !0, this.showDown && (e["zl-button-showdown"] = !0), this.disable && (e["zl-button-disable"] = !0), this.selfClass && (e[this.selfClass] = !0), e
					}
				},
				props: {
					size: {
						type: String,
						default: "mini"
					},
					selfClass: {
						type: String,
						default: ""
					},
					widthType: {
						type: String,
						default: "auto"
					},
					type: {
						type: String,
						default: "primary"
					},
					showDown: {
						type: Boolean,
						default: !1
					},
					disable: {
						type: Boolean,
						default: !1
					}
				},
				template: he
			});
			a("99af"), a("ca6d");
			var fe = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "提示",
					a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				return o.a.prototype.$MessageBox.confirm('\n    <div class="message_tip_com">\n      <p class="message_tip_com_title">\n        <i class="el-icon-warning"></i>\n        '.concat(t, '\n      </p>\n      <p class="message_tip_com_content">').concat(e, "</p>\n    </div>\n    "), Object(p["a"])({
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					cancelButtonClass: "message_tip_cancel_button",
					dangerouslyUseHTMLString: !0,
					center: !0,
					customClass: "message_tip",
					lockScroll: !1
				}, a))
			};
			o.a.prototype.$messageTips = fe;
			a("9352");
			var Se = function(e, t) {
				return o.a.prototype.$MessageBox.confirm('\n    <div class="zl-confirm_tip_com">\n      <p class="tit">'.concat(e, '</p>\n      <p class="subtit">').concat(t || "", "</p>\n    </div>\n    "), {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					dangerouslyUseHTMLString: !0,
					center: !0,
					customClass: "zl-confirm_tip",
					lockScroll: !1
				})
			};
			o.a.prototype.$confirmTips = Se;
			a("e613");
			var ge = '\n<div class="big_Img_preview">\n  <img :src="url" alt="">\n  <i @click="closeImg" class="el-icon-circle-close"></i>\n</div>\n';
			o.a.component("bigPreview", {
				data: function() {
					return {
						show: !1
					}
				},
				methods: {
					closeImg: function() {
						this.$emit("close")
					}
				},
				props: {
					url: {
						type: String,
						default: ""
					}
				},
				template: ge
			}), o.a.authH = o.a.prototype.$authH = s["a"], o.a.appFetch = o.a.prototype.$appFetch = c["a"], o.a.freeAjaxHelper = o.a.prototype.$freeAjaxHelper = Y, o.a.loadExternalSource = o.a.prototype.$loadExternalSource = P, o.a.filter("Urlfilter", (function(e, t) {
				var a = e || t;
				if (a && "" != a) return -1 != a.indexOf("http") ? a : o.a.prototype.siteConfig.imghost + a
			})), o.a.checkUrl = o.a.prototype.$getImgUrl = function(e) {
				var t = /^(http|https):\/\//;
				return t.test(e) ? e : o.a.prototype.siteConfig.imghost + "/" + e
			}, o.a.mixin({
				methods: {
					mixAllAppsJump: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
							a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
						if (4 == e.type) this.maxThirdAppToUrl(e);
						else if (e.source_type) 1 == e.source_type ? this.$router.push({
							path: "/reserve/m_hallView",
							query: {
								id: e.id
							}
						}) : this.$router.push({
							path: "/reserve/m_reserveDetail",
							query: {
								id: e.id
							}
						});
						else if (1 == e.is_folder) this.showFolder(e);
						else if (e.details_page) {
							if (1 == e.mobile_limit && t) return void this.$message.warning("请前往pc端发起");
							if (2 == e.mobile_limit && !t) return void this.$message.warning("请前往移动端发起");
							var i = this;
							this.$appFetch({
								method: "get",
								url: "getProcessInfoNew",
								data: {
									app_id: e.id
								}
							}, (function(a) {
								if (0 == a.e) {
									if (a.d.nodes)
										if (a.d.nodes.filter((function(e) {
											return "StartEvent" == e.node_type && !e.node_parent_id
										}))[0].steps) T = window.location.origin + (t ? "/v2/matter/m_startStep?id=" : "/v2/matter/startStep?id=") + e.id;
										else T = window.location.origin + (t ? "/v2/matter/m_start?id=" : "/v2/matter/start?id=") + e.id;
										else var T = window.location.origin + (t ? "/v2/matter/m_start?id=" : "/v2/matter/start?id=") + e.id;
										"pku" == i.$appCommonH.getWebId() && (T += "y" == sessionStorage.getItem("pku_hiddenHeader") ? "&hiddenHeader=y" : ""), i.$appCommonH.isWeixin().isPhone ? location.href = T : window.open(T, "_blank")
								} else i.$message({
									message: a.m,
									type: "error"
								})
							}), (function() {
								i.loading = !1
							}))
						} else {
							var T = window.location.origin + (t ? "/v2/matter/m_detail?id=" : "/v2/matter/detail?id=") + e.id;
							a && window.sessionStorage.setItem("isSearchApp", 1), "pku" == this.$appCommonH.getWebId() && (T += "y" == sessionStorage.getItem("pku_hiddenHeader") ? "&hiddenHeader=y" : ""), this.$appCommonH.isWeixin().isPhone ? location.href = T : window.open(T, "_blank")
						}
					},
					maxThirdAppToUrl: function(e) {
						var t = this;
						return Object(T["a"])(Object(i["a"])().mark((function a() {
							return Object(i["a"])().wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										t.currThird = {}, t.$appFetch({
											url: "recentappssave",
											method: "post",
											data: {
												appId: e.id
											}
										}).then((function() {
											return t.$appFetch({
												url: "thirdClickNum",
												method: "get",
												data: {
													app_id: e.id
												}
											})
										})).then((function() {
											var a = !(1 != e.jump_type || !(0 == e.terminal && e.url || 1 == e.terminal && e.url_pc));
											if (e.details_page && (a || 2 == e.jump_type))
												if (2 == e.jump_type) t.currThird = e, window.setTimeout((function() {
													t.$refs.miniProgramQrcode.show()
												}), 100);
												else {
													var i = 0 == e.terminal ? e.url : e.url_pc;
													window.open(i, "_blank")
												} else window.open(window.location.origin + "/v2/matter/detail?id=" + e.id, "_blank")
										}));
									case 2:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					}
				}
			}), $.fn.toTop = function(e) {
				var t = this,
					a = $(window),
					i = $("html, body"),
					T = $.extend({
						autohide: !0,
						position: !0,
						offset: 300,
						speed: 200,
						right: 0,
						bottom: 162
					}, e);
				T.autohide && t.css("display", "none"), t.css({
					cursor: "pointer"
				}), T.position && t.css({
					right: T.right,
					bottom: T.bottom
				}), t.click((function() {
					i.animate({
						scrollTop: 0
					}, T.speed)
				})), a.scroll((function() {
					var e = a.scrollTop();
					T.autohide && (e > T.offset ? t.fadeIn(T.speed) : t.fadeOut(T.speed))
				}))
			}
		},
		"06cfc": function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAA9dJREFUaEPtmv9V1EAQx2cqECpAKlAqUCsQK1ArECoQKxAqUCsQKxArECoQKhArGN/n3L2X7G0us0vuLjlv3uMPLpvNfPc7vxOVRMzssYi8E5HnIvI0vT7S/69F5EpELlT1tqmjNv8xs48icjJSEF61zlX1NC6eAzSznxNirA/staoesWgG0MzOg1n23Til65jriQaf+zUlzQt0PQTgNrIXz+ACgNvkeym51wC0Asont3QHcHKUJQrvGNwxuHgCNyJyn/z8bFMHNYSJ/hGRzyJyqaoUvFkxM4p3/t6IyMG6AD8EIMAozAGWMrZUfzMD5Nk6gNYC/CEix6XAks5lL4CkNVuZ1AD8oqowMIgENj8Nsllmk1KAg4KL+qwSZAnAO/rF1CzNDFN7LSJMAhY66gYI1hBkvqnqZXrYZsZvL4dmsgTgW1UlWrYkUQzljzNrMOm5Gapqa5LA+nBQjBseDQnSC/BOVWFoQWoAish+LkCtonXzApx1xx0AMVGucQDMQxgA5Q4CFjFR0sqCiQYWGXLRvg0mXoBZ83yIFmaGv2HOgMJkm7mUQ3vykP3jvV6AL5ZVKSWKmBmgmN5R0uHTVx3mikXEyqe61FsbwBBEAHZIuZbOL5cdUijzOIziEs8L8FRVmd1USQD3PaQISrRiCXugA+nGLV6AnUHG8yQzI0UQiavANZ9hZjDpBukFeK+q+x4w6ZpgXmeqij8NImZGpHYFIS9AFKuKpGbGzJUg1XpnYGZET8yW6Jm7zjXW4B6tAiPc60onJQBR5KgwOMTcmKtuyJ0EHaTl48kwuqs6crFYAhBF5jN/j62ZGSAw71yJF9ul21wAC+kEs6Z4aLHPs80Mf37fp0cpQPajCsFce5vcoAR5rrPT71Ow63rwbcx4qdQAnDEpIq/6zNXMAEaAmRxAV9BZMYNNH+5ksZZBNpx3BCEoHKgqo4y5BB/cGyL/ZdKPKx/WApxFtgAMR2+OMAgIMSgQSABIeTaYhKrmt2fDWoAfQl3onc3gr9kWyaNkhj33K79agKV6wSg5tDfy9m1cOr9ZF8AYealYqkGG1PAVs+87iHh9nQAjSHJotutfpnQpc5sCyHNhEB+iQ3GzWTt1WzeDKUkEHooAGKWdug2FNJM1yjRMcTaKDCkn1q5eC5VNA/QqSs67qBlITQVgNG13cNmkD3pZG2TdlBisArwDWHVsI7rpv2DQNdsYESklqtzAoLsyL9l5JGtnH+Mx+drezyk56S1l8d8HsdGUSqbFIzG/ZWrMZ6npR+nb4I+t9yi5d+X4JBMrqnnX/H8EjPKuka5kYUj8F/ghJ5x3vBdzAAAAAElFTkSuQmCC"
		},
		"08b5": function(e, t, a) {},
		"097b": function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABEBJREFUaEPtmu1Z2zAQx+/kAUgnIEzQMEHDBMTIfAYmIEzQdALCBE0/I+EwAWECYALCBG0HiK7PUZnHcUUiOc6LU/QtT2T5fvqfTqeTEQotTdOmMeaciNqI2Cr+v4m/iegREUdCiKs4jsd5GzH/Q2t9CQDdTYQIsKkvpbzI+r8BKqUe6qLYPFhWNEmSfe73CqiU6iPi+bwH6/Q/EV0lSdJFu+ae62S8r61CiD3cRvWyCWAVGXBr1l5R2dfoqrUmX8nr2O8DsI6qTW30Hy5acwmXsQafAOBXYV6+rGueFgYkot8AMCCi4fHx8eg9kOvr67YQog0ApwCwuyrg0oAMhohdIcQwjuOiYjPt11ozZG8VoGUB74UQnVCwPHWapo3JZNJbdg4cDEhEP5IkYQUqaVbN75UM5hgkCLBquMyeZUKGAL4IIVpFt7SudoKITdeJOoNQSnGfNhHdJkkyLE62UmqIiIdVKxkCeCalHMwyzBrfKfYpKiSlnKokcH87UWNE3KkS0hfwRUrZdL04P/O+gEKIT64AtYyjmxdgdjp2AfLMG2O6RNSMoqgfx/Gjqx+ryIUsABi6XNSq2DLGPKxDQad7LmLIzc3NIRF1iKiFiOyy+b20AQCfFxk/e9ZLQWPMwawsJcQQpVQHES+JiFO6QRRFI5e72lJKlvmUTvVWBmhdmcuSe0KI02L9ctYk2TSPA1xwiucFCAAXUsp+iFKOrOUOEW+llJyiBTcbZbn6dxLysBfgrCDj8zKtNWcqHIlLweXfoZQahEB6AXIAkFJ+8oEp9rHu1ZNS8nqqpGmtOVJ7BSFfQDasVCTVWj8LIQ6Kay5NU94S7njyXP8rpdil+W6El8dUgmGf9dpOQgDZkP2Q4MCRcDKZ9JMkcWU3fAfCQYfb1BrPF6NnJA9eKoYAQr7m7+NrWmuGYPf+J8XLHZfGrgDG2wkAtG3yMHVjxO/WWvN6/jrPjiBAHoxP7lEUnfmcBdkIY8yoqj00D2PXNrv4zBYMaCEfoyiK57mr1npkjOnVDtBO2dygs0wFrftna/hdFUspyKPlTwQcFIho9+jo6D7/JmtEo4r9r0jgux+WAswim412vNDzJYwxEWVBoYGIDLg3b62E/G/Tvp8+z5QCBIBvNi/0qs0QUfzeEcnHSId63he2ZQFD7RrbPTSovOh6SWj9ZlWAr3toFEWc0ZSGtFtDCgB8XvRqKwPMbS+8hzpP/bMsDlUuG2ulgPalrGDfVuC81SxbdVsH4JtQnBUBAH/Awx/yvHDiwIk0Ee3Y+k0jK0X67ntFL1groNci+ttpwKBlClJ1AWRIdmfv4LLONRgg3OJd66RgKdoPwFLTtkEP/RcKetU2NkiUEFOetv9jvK3/nJL1Xsa9XIgfLaPv2wex2eAh1eJlGFTlmPla6tRV8jYoWbxHcd2VczW6yx8M+Nb/q5z9kmM9EdHIVST+A6SDvH/ytL8wAAAAAElFTkSuQmCC"
		},
		"0e2c": function(e, t, a) {},
		1: function(e, t) {},
		1332: function(e, t, a) {
			"use strict";
			a("b0c0");
			var i = function() {
				var e = this,
					t = e._self._c;
				return t("div", {
					staticClass: "buaaSearch"
				}, [t("div", {
					staticClass: "searchtop"
				}, [t("div", {
					staticClass: "div1"
				}, [t("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.inputdata,
						expression: "inputdata"
					}],
					attrs: {
						type: "text",
						placeholder: "输入服务关键词"
					},
					domProps: {
						value: e.inputdata
					},
					on: {
						keyup: function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getsearch.apply(null, arguments)
						},
						input: function(t) {
							t.target.composing || (e.inputdata = t.target.value)
						}
					}
				}), e._v(" "), t("span", {
					on: {
						click: e.getsearch
					}
				}, [e._v("搜索服务")])]), e._v(" "), t("router-link", {
					staticClass: "div2",
					attrs: {
						tag: "div",
						to: {
							path: e.BtnLink
						}
					}
				}, [t("i"), e._v(e._s(e.BtnName) + "\n        ")])], 1), e._v(" "), t("div", {
					staticClass: "searchbtm"
				}, e._l(e.keyname, (function(a, i) {
					return i < 3 ? t("a", {
						key: i,
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(t) {
								return e.ratefun(a.name)
							}
						}
					}, [e._v(e._s(a.name))]) : e._e()
				})), 0)])
			}, T = [],
				n = a("2e8c"),
				o = (a("534e"), a("14d9"), {
					data: function() {
						return {
							keyname: [],
							inputdata: ""
						}
					},
					props: {
						BtnName: {
							default: "返回首页"
						},
						BtnLink: {
							default: "/site/index"
						}
					},
					mounted: function() {},
					created: function() {
						this.hotkeyword()
					},
					methods: {
						getsearch: function() {
							"" != this.inputdata && this.$router.push({
								path: "/site/searchUse",
								query: {
									key: this.inputdata
								}
							})
						},
						hotkeyword: function() {
							var e = this;
							this.$appFetch({
								url: "keywordshot",
								method: "POST"
							}, (function(t) {
								0 == t.e && (e.keyname = t.d)
							}), (function(t) {
								e.$message.error({
									message: "系统异常"
								})
							}))
						},
						ratefun: function(e) {
							this.$router.push({
								path: "/site/searchUse",
								query: {
									key: e
								}
							})
						}
					}
				}),
				s = Object(n["a"])({}, o),
				r = s,
				Y = a("0b56"),
				c = Object(Y["a"])(r, i, T, !1, null, null, null);
			t["a"] = c.exports
		},
		"138e": function(e, t, a) {
			a("ac1f"), a("5319"), e.exports = [{
				name: "登录",
				type: 1,
				pcPath: "/site/login",
				mobilePath: "/site/m_login"
			}, {
				name: "服务大厅",
				type: 1,
				pcPath: "/site/service",
				mobilePath: "/site/m_service"
			}, {
				name: "应用组",
				type: 1,
				pcPath: "/site/appGroup",
				mobilePath: "/site/m_appGroup"
			}, {
				name: "首页",
				type: 1,
				pcPath: "*",
				mobilePath: "/site/m_index"
			}, {
				name: "首页",
				type: 1,
				pcPath: "/site/index",
				mobilePath: "/site/m_index"
			}, {
				name: "个人信息",
				type: 1,
				pcPath: "/site/personal",
				mobilePath: "/site/m_perIndex"
			}, {
				name: "个人信息中心",
				type: 1,
				pcPath: "/site/upcPersonal",
				mobilePath: "/site/m_upcPersonal"
			}, {
				name: "公告",
				type: 1,
				pcPath: "/site/inform",
				mobilePath: "/site/m_inform"
			}, {
				name: "公告",
				type: 1,
				pcPath: "/site/informDetails",
				mobilePath: "/site/m_informDetails"
			}, {
				name: "个人中心",
				type: 1,
				pcPath: "/site/ucenter",
				mobilePath: "/site/m_perIndex"
			}, {
				name: "应用搜索",
				type: 1,
				pcPath: "/site/searchUse",
				mobilePath: "/site/m_searchUse"
			}, {
				name: "添加流程图",
				type: 1,
				pcPath: "/bpmn/addBpmn",
				mobilePath: "/from/m_addBpmn"
			}, {
				name: "编辑流程图",
				type: 2,
				pcPath: "/bpmn/editBpmn",
				mobilePath: "/bpmn/m_editBpmn",
				changeFunc: function(e, t, a, i) {
					"launch" == a.query.showRoute ? (e.replace({
						path: "/matter/index" == t ? "/matter/index" : "/matter/m_launch",
						query: a.query
					}), i && i()) : (e.replace({
						path: "/matter/index" == t ? "/matter/index" : "/matter/m_index",
						query: a.query
					}), i && i())
				}
			}, {
				name: "服务详情",
				type: 1,
				pcPath: "/matter/detail",
				mobilePath: "/matter/m_detail"
			}, {
				name: "事项发起",
				type: 2,
				pcPath: "/matter/start",
				mobilePath: "/matter/m_start",
				changeFunc: function(e, t, a, i) {
					"/matter/m_start" == t ? (delete a.query["isStep"], e.replace({
						path: "1" == a.query.isStep ? "/matter/m_startStep" : "/matter/m_start",
						query: a.query
					}), i && i()) : (e.replace({
						path: t,
						query: a.query
					}), i && i())
				}
			}, {
				name: "分步发起",
				type: 1,
				pcPath: "/matter/startStep",
				mobilePath: "/matter/m_startStep"
			}, {
				name: "驳回分步",
				type: 1,
				pcPath: "/matter/rejectStep",
				mobilePath: "/matter/m_rejectStep"
			}, {
				name: "事项审批",
				type: 1,
				pcPath: "/matter/examine",
				mobilePath: "/matter/m_examine"
			}, {
				name: "我的事项",
				type: 1,
				pcPath: "/matter/read",
				mobilePath: "/matter/m_index"
			}, {
				name: "我的事项",
				type: 1,
				pcPath: "/matter/oversee",
				mobilePath: "/matter/m_index"
			}, {
				name: "我的事项",
				type: 1,
				pcPath: "/matter/todo",
				mobilePath: "/matter/m_index"
			}, {
				name: "我的事项",
				type: 2,
				pcPath: "/matter/launch",
				mobilePath: "/matter/m_launch",
				changeFunc: function(e, t, a, i) {
					"fudan" == appConfig.webId ? (e.replace({
						path: "/matter/m_launch" == t ? "/matter/m_index" : "/matter/launch",
						query: a.query
					}), i && i()) : (e.replace({
						path: t,
						query: a.query
					}), i && i())
				}
			}, {
				name: "我的填报",
				type: 1,
				pcPath: "/fillForm/mission",
				mobilePath: "/matter/m_index"
			}, {
				name: "我的事项",
				type: 1,
				pcPath: "/matter/index",
				mobilePath: "/matter/m_index"
			}, {
				name: "数据中心",
				type: 1,
				pcPath: "/report/index",
				mobilePath: "/report/m_index"
			}, {
				name: "报表详情",
				type: 1,
				pcPath: "/report/detail",
				mobilePath: "/report/m_detail"
			}, {
				name: "数据表",
				type: 1,
				pcPath: "/backHome/b_tableDataCopy",
				mobilePath: "/backHome/m_reportTable"
			}, {
				name: "个人主页",
				type: 1,
				pcPath: "/homepage/index",
				mobilePath: "/homepage/m_index"
			}, {
				name: "预约大厅",
				type: 1,
				pcPath: "/reserve/hallView",
				mobilePath: "/reserve/m_hallView"
			}, {
				name: "预约详情",
				type: 1,
				pcPath: "/reserve/reserveDetail",
				mobilePath: "/reserve/m_reserveDetail"
			}, {
				name: "专题",
				type: 1,
				pcPath: "/reserve/special_info",
				mobilePath: "/reserve/m_special"
			}]
		},
		1543: function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5MjFhNWYwNC00YWMyLTQ4YTYtYWNiZi05NTRiOWRhNmQxMzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjE1M0JFN0VFNTUwMTFFOEI4N0VDN0FGODM0OTFFMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjE1M0JFN0RFNTUwMTFFOEI4N0VDN0FGODM0OTFFMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MjFhNWYwNC00YWMyLTQ4YTYtYWNiZi05NTRiOWRhNmQxMzYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiZDZmMDMzZS0yZGJhLTExN2MtYTQyZC1iNjUwN2U3ZDc5NWEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7T2Uj4AAAE7UlEQVR42rSWWUxcVRjHz8CwzbDI0gCiLEnhZUwhRZuoqDSFECshVBNs1WJiNMYlILE2PmkCPmgNtsQ0VSNCaEwphr7pgzbNWHyoGhUxDGTQB2Qve2BYB8bfR+6dXKfD3IHoSU7uueee+f7f//8tZyw+n0/J6O7uVmZDzkZFRam1tTU1PDx8cGtrqz4iIuIJPiUy+/j+pc1ma11dXVXR0dEqNTVV1dbWBrVl1Rebm5umwBaLRW1vb6ulpaWHvF7vt7zbdccZR1kfxannOXOWb7dC2fIDLy8vmwJHRkaqhYWFJM5etVqtdnEk0DFUeARgJ068xNZlU+D19fWwgDHayPOeQFAjOPLHwLxjZmbGxdYvIYEXFxdVGOMQRuuYRqB52CUHgksIIHOG11PBDPktIF3IKUkF0xbdMDkxRJzLSaYDGxsbx2D4m1EFWTMf3I2BH1gM7zYlQ2H5ODKXytmVlZX5nJyckqKioutjY2Nb1dXVNwoLC48Q30FJPsOwmQLzI7NZpZ9DgcaysrLbmZmZj+FE38TExDMAepltAazdpsmFbHfUbMBIl72YmJiBjIyMCz09PWpycvJiWlqag5q+V/vNRgBwhymwMWH0d5nCUDO6LGuM1c/Ozqrp6enXCIGD/eHKysqW/v5+NT4+flryQYtvP/OLPQFLnFJSUnZKTEpIjJH1PwGcj7Hv6Ey2hISEJlGJs29RNmsDAwPPocZhnTFPyX6vKXCwISUWFxen0tPTld1u/wyWn4szGH0fJ5Ix7CSpvkpKSopl/0PdaZrMVZY3wupcwfqyMJWOJr05KytrQ7Lb4/E4MP66OOBwOOoEqLOzs5FnhvRoymu8qqqqYZc8MQcWiWFmg1UxwIskUp+wZ5wXJZG1lVL6g3o+InKLg4COFhQUPFlSUjJh1okidmt7yHWWGPbi9U1kfpTSEQbHaRblfJ+LjY1tkIsFUAeOXcvPz6+rqKg4xPPnubk50xZoNUqrJwbrC0har/XmQSS+yDMCgBY5hyMfxMfHL+GchKED2dvy8vIUCafm5+fVbn08KLB0KIkXLJ/luQOq3b8vk0i+0dHRN3g/iBODsD4nANrFslNvEl/J8nBA/yW1lBM/SgD0vHa9SVZ3U1Y3YZKK0XdkH0felLOAniTOhTCX2Pp7uuSB7IXNWLwHtInlAfEco+uUytuwk38b59i/C/mdOPGN3MWsr+BIM8r8npycrFwul2T8jtxDQ0N+8OzsbNMYF4rEwkqcyM3N7SguLv6zq6vrAZi/gCPbNTU1L7rdbtXb2/uesOPc3VJq8htxln3/Wi+lpqYmU+AGPT4i19TU1I/t7e0i+QkyWGT8hAvhr5GRkXyOvKq1RZ9eBZIj4owMqfe9ZHW5Md4wKcVgK0w/Rgk3s8PpdArLSxiOllKiY/2amJh4xwUTzjA2kHhjaQF+kvk1604caNcYvsLnY5qMHpy5LGHRL5L9Av/NvM/4DcNXeJ4A8AfAHkbqp0UNASaJ3oX4bUm+/Qyr4a9PG/I1B6nDGoBqjDcYDrm4k5slg/cjc+C1+CmgpwC536wJ4GS99GaJ835kDkwuD4ClOHCJ9elgN4vsUbfNJNx1aZfS6cLtVCEvCQGnLGoBf4pXVyAu+x/xPKM54C+hUHNP1yKGr8Hke4COw+owW9O8y8V+S/1HwxLqsv4/xz8CDADf4efu9apjdwAAAABJRU5ErkJggg=="
		},
		1747: function(e, t, a) {},
		1928: function(e, t, a) {},
		"1b63": function(e, t, a) {
			"use strict";
			var i = a("8bbf"),
				T = a.n(i),
				n = {
					getApi: function(e) {
						var t = T.a.appConfig.apis[e];
						return t ? T.a.appConfig.apiBaseUrl + t : ""
					}
				};
			t["a"] = n
		},
		"1c69": function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAhCAYAAADOHBvaAAAAAXNSR0IArs4c6QAAA7JJREFUWEfFV81OGlEU/s4ALnBRfQJ1qUNSfILqrhGawhMoTyAmhXRX3DUzTcQnUJ+gNDJNd+ITiImjS/UJKou6EJjT3Ovc8c4wIGObyAaYufd853z3/HyXkODzoX5ZYvYOmOgO4IZj5Y4SbA8tpSQbizW3A8K7YA9zZ5BKVX59Xb5JYkesTQRcqLvXBCwy0CPgjQRjvvNA6z9ts5sEPBFwse6yb3zX//6iwNP92aVWc+luWvCpgd9/vlpMe961NOwZ6+1vy52NmrtlEA588E7bzq2L3xs1N2+A9xh0k+lnd+Icmhq4WHcbAGSE6YfsvDKmP2fQjmOtNPVcYEY308+uR8FDwCKqzBALx/byaZSy4HwZPxzbLOnvi/WLLkBvxXkLygeZ+1YoCYFW2zLL+p4AWFI5HJ6BaE546djmqlqoU0qg8rG10goBf7pag+GdqPNnYDOahIoNtS8ALoY3gxmHjm1WxEIt2lvHNhfjEqhQvzgk0KaIWjgvU4FRMYirOhuK8rHAKok88hZVAglDP23zMA446rgPLFkzCGeKjbZlilx5quO4jWDuAMg/RsDnbSuXn1QuwVmL8gZ6jmXKyHU22nZuPgQcLg3sg7AdAvFLaBJwoX5ZJfDeY3lhv22b1aC8/KgVawHVyitm3Gb62fxg5v53AKIZmQSs17rHWNW7WaHm3hBhgcFHjpXbksCh5gDsinN4oo3P0w+za9N2JQkA3LRtcy2U+TW3KVlkvhN0S+AgWqA3NIy8aPriGUAl9X9SpPo7actLHYrOpj+Xkw38XSUdxUUrXsqO5BmdqIHnHBDtMm5glKrXc+r4RC8gPSH0VvgcwEve60OGVF/lmFb4EuMTy+1pnu+S7oUq7v8NqOxpw+OVgBmnrxix4n3KJvEvxxBKrkLNbRHhY3QUxgHoKpM8o5Kk1CJdrUJ6jx4YxtIkxRinMtP92fI0XS1atmMbSFzEhZp7RoS8rjIFU8OUUX5O4kYVTKhlCrBJUb9UZYamlj/lRobEOHEmlaM/2pT8CY3SGF0VHYlgnKrhEYzFqFSNnt241qqrzKhC8WXuidRx2gAKCYGQUpAXBHQZUurIG0ISlSmSrVi73Aa8htJfSour3BnR1YFM8VcI0UegLoib/kgb0V26bBLrhVwSSfgoRNBjRjWq1WIFvaBV3AaD+9GTE2NV5kipPbJ2y0ApbkyOvUmI+dmf+dOUktX/TKsyfcDGOEU6csZxtSsceMjcl4h4TWilZ8Zek4g6UcEft+cvImOIWSQGASwAAAAASUVORK5CYII="
		},
		"1cd2": function(e, t, a) {
			e.exports = a.p + "static/img/recently-used.23f677ff.png"
		},
		"1f64": function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5MjFhNWYwNC00YWMyLTQ4YTYtYWNiZi05NTRiOWRhNmQxMzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkZCMEE0RTlFNTUwMTFFOEI4N0VDN0FGODM0OTFFMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkZCMEE0RThFNTUwMTFFOEI4N0VDN0FGODM0OTFFMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MjFhNWYwNC00YWMyLTQ4YTYtYWNiZi05NTRiOWRhNmQxMzYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiZDZmMDMzZS0yZGJhLTExN2MtYTQyZC1iNjUwN2U3ZDc5NWEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4i3VPyAAACdklEQVR42uxXzWsTURCf3Ww2MZDYNCGeDBYq8R+IFw8eKlX8D6IUPOi1FyEHoacWIULPIvTuUakKQi8eAl6UXEUSiEksKUnMpvne5sPfLLvBbnc121gUmoFhZt+bN7+Z9zVvhfF4TEypVOrdcDjMud3udUmSqNPpUDwev5HP529WKpUVl8u1BLOL4JEgCMpgMMiHw+EPkUjkfSwW+5zJZCiXy5HX6yW/30+hUIiKxaLmG7aEMZqeTCY1KZFOCODuaDQqBoPBdcjr3W53M51Or8qyTAiGjAB12zCCW65Wq7cKhcJWs9ncURRlG3ZfuF8URW2MAaaTD3wb/MoMTB6P5xDAVC6XHyP7VZ/PN+kzE7dhFigQCFA2m32IsfcRzGu0f+z3+xUEAhdDGaaL4GtI5g7kZbB8DNjwx9E6IQ5AD/AC9ARkotVqUaPRIF4ypl8ybxqKZOWIl4VmIA7eJoGjiQ39I5oDz4HnwOcE2O6utmqfliSb9snlinu2C/4KkCw+Fegi9AUUiKuQy2CvA7xFS2C+zLnicNmD/h3yBerrS+jf2u32kXH/qqpK0WhUxvcV1Os1lM5HaL40xR3+5gQwg7JDVBUBVeUJvkvgst3Uw4mKIHkmNtD0HLYPIO+Bo2iTdVMVXEPfHuQu5FtLYHZYr9ehCp/+VB5Na7wPfopx28h+AXWYp1RA/w+8Pg6hd367xvxq4CcPO2QdDpzumT7ADyAPHG0ufQqPZWR6vpz9cZrlqMxynCYviV6vp+n6bj9nV+bfXO//JmO3k+xnmQHRtIvZ01Q7iO1Pcc7J6uZ6BlGaBhh/DVSr1bSMWT8NCWd9Xu3opwADAIOWG8lmOH8AAAAAAElFTkSuQmCC"
		},
		"27b4": function(e, t, a) {
			"use strict";
			var i = a("2e8c"),
				T = (a("caad"), a("8bbf")),
				n = a.n(T),
				o = a("e8d2"),
				s = a("eebb"),
				r = a("138e"),
				Y = a("a4d9"),
				c = a("e425");
			Y = Object(i["a"])({}, Y), s.port = location.port, s.domainName = location.hostname, s.baseUrl = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + s.routeBasePath, s.apiBaseUrl = location.protocol + "//" + location.hostname + (["", "80", "8883"].includes(location.port) ? "" : ":" + location.port), s.apiBaseUrl += "", s.upFileUrl = s.apiBaseUrl + "/site/attach?file=all/", s.uploadUrl = s.apiBaseUrl, s.staticUrl = s.baseUrl + "static/", s.apis = Object(i["a"])(Object(i["a"])({}, s.apis), JSON.parse(o["a"].toCodeHelper("decode", c))), s.pcMobileChange = r, Y.customConfig = Object(i["a"])(Object(i["a"])({}, s.customConfig), Y.customConfig), s = Object(i["a"])(Object(i["a"])({}, s), Y), window.appConfig = n.a.appConfig = n.a.prototype.$appConfig = s
		},
		"27ea": function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5MjFhNWYwNC00YWMyLTQ4YTYtYWNiZi05NTRiOWRhNmQxMzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkZCMEE0RURFNTUwMTFFOEI4N0VDN0FGODM0OTFFMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkZCMEE0RUNFNTUwMTFFOEI4N0VDN0FGODM0OTFFMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MjFhNWYwNC00YWMyLTQ4YTYtYWNiZi05NTRiOWRhNmQxMzYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiZDZmMDMzZS0yZGJhLTExN2MtYTQyZC1iNjUwN2U3ZDc5NWEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5VpAFDAAAB20lEQVR42uxWPUvDQBi+JE2CFhS0UvAHiKOrP8DVrZsuxclFHCw4OCgoFkEUJwc3J0cRBGfBSRwFB6cKIkjQWpvv+JwmUsTkrr0cdfCFhzdt7t7n3s+cEkURoVKv1w+hKoAPfP3JJzpA914BU8BG8kJRFFKr1X7dVEgecIAFKJX0ICAYhhqEjXU8+8BW4lCaqB2bLdK72IAVO7AJLLM2dHoYCRBHcciT6O1CLfESi4j/0xbI94CVtA2FnIjLwDkwF/8OgCLwIpUYnlVQIy083gMaLZk49COyPaYVvZjybkdmjtPE6tpjhO4Vah5ocByQVvU4vD6GHuLplEJG3jyQn7IGwXfoVPUayuVdn5XjURi5hX4GDIYdNwxDWkgl3hywimtSVvKziNsIX1XTtDt4PsCw08aaiSAIjmiFixK/AScIYcjpxA2wnwdxCV5cgveJI8ceMBZDONQKiKf7keMW2mkV+iEeg1kSYC3t422gKEQMA++GYRyYpklYaUYREtd1iW3bazhAUTjHqNILx3EecQiTcQNxsLacSx8r9A7j+zOe5/Fefz6RywDp1lg3Ivvr9E/8t4hNCfZNHuKmBOIms510Xa9iWMyifVzBy30y5w1MtLOsBX3J8YcAAwBrN7TzpcFHpAAAAABJRU5ErkJggg=="
		},
		"281c": function(e, t, a) {},
		"2abc": function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAA2pJREFUaEPtWu1RGzEQ3dUVEDqIU0GggkAFyY3Eb0gFmApCKoipAPIbaQ4qCKkAXEHSQUgBp82s5445H3bQx57H9lgz/GAsrd7TO0n7IYReq6pq5L0/I6JDRNzv/76O/xPRIyLeK6Uuy7L83cWI3X+cc98AYLyOJCIwTbTW523/Z4LW2odNUew1sqyoMeaA+80IWmsniHj22sBN+p2ILo0xY2z23K9NAh+KVSn1DrdRvXYBWEUmuDV7r6/s7HR1zlGo5JvYb0dwE1Wbu+iH/kSJ6A4Rb5VSj2VZPvLkVVXt13U9AoBP/IeIb4ZayME+USZWFMW47zotcg3rur5AxJMhSA5F8LPW+joGsHPuFACuYsaE9B2CYDS5Fqi1lj/XKgR4aB9RgkT03RjDSiQ359wFAHxJNtAbKEaQiP4WRTEqy/IpF5xzjkOet7l2Zs621CnaOrcSoCT3oxhBpdRBew3kkqyqas97/yfXjqiCWuu54DkXnHOO78z3uXakFJxqrUXTG865ewD4sC4Ef2qtD3PBdMdba28R8WOuTREFuymCXEDt+HVTEAbYg5xlYH81q4koyAiIqDTG3GahaQZLplEkCd4ZYzg6yG6SaRQxgszKe390fHzMp19ya9R7AIC9ZCOdgaIE+bApiuIox12z1v5ARLETWZRgs3DXSqnzFJLOOQ6Xspz1vupDEOQDh5UsXwt2WzDsmtV1fYWIInu4S3IQgs0EHFVMmoLI0gjDWnuCiBOpPbcSBXuTfNVac4z3oknHfovmGFLBdr4dQYnrYJmNVAWnABAUuXvvL5bdjTc3N4dKqYWf7wLAfC9Gh0+xBKdKqVOpwDZWOc6neu85WxdMNIqgZNQeS65zpTBJ9nSCWjBBTioZY0TcpyBk/+lkrX0KzYYHEwQA8aA2lWhMrLgj2K7yEFF7qoIxRdsYBRkPu1RB10Mq+IBxfA4EP3WJJRgw/3p1iSLItQdEnHtJtGo6RDSKKbXFEBTPfaYuTkxSOIbg1l8TT/ywJiVST1Vq0bimbsEpxSCnI0ZBSZwrs7UjuLKlHmgiVlCkTDUQvlyz0+1/jCdZB8hdbunxs+eUbFSyFiANMtXe84PY1sA27UV+ZdUWgubq6tugZP+1x4uHA7wn67oeNwWQ4ORO6qckNG5KRPdFUUz65YJ/LlPscKZp3MkAAAAASUVORK5CYII="
		},
		"2e94": function(module, exports, __webpack_require__) {
			__webpack_require__("a15b"), module.exports = function(type, str, key) {
				return key = key || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", "toCode" == type ? toCode(str) : fromCode(str);

				function toCode(e) {
					for (var t, a, i, T, n = key.length, o = key.split(""), s = "", r = 0; r < e.length; r++) t = e.charCodeAt(r), a = t % n, t = (t - a) / n, i = t % n, t = (t - i) / n, T = t % n, s += o[T] + o[i] + o[a];
					return s
				}

				function fromCode(str) {
					var len = key.length,
						b, b1, b2, b3, d = 0,
						s;
					s = new Array(Math.floor(str.length / 3)), b = s.length;
					for (var i = 0; i < b; i++) b1 = key.indexOf(str.charAt(d)), d++, b2 = key.indexOf(str.charAt(d)), d++, b3 = key.indexOf(str.charAt(d)), d++, s[i] = b1 * len * len + b2 * len + b3;
					return b = eval("String.fromCharCode(" + s.join(",") + ")"), b
				}
			}
		},
		"31d9": function(e, t, a) {
			"use strict";
			var i, T, n, o = a("8bbf"),
				s = a.n(o),
				r = a("2f62"),
				Y = a("9b8c"),
				c = a("2e8c"),
				B = a("29b5"),
				l = (a("99af"), "UPDATA_GRANTMELISTS"),
				P = "UPDATE_SHOWDATACENTER",
				u = "UPDATE_IDENTITY",
				d = "UPDATA_SECONDARYNAV",
				p = "UPDATA_MENULIST",
				X = (i = {}, Object(Y["a"])(i, p, (function(e, t) {
					e.menuLists = t
				})), Object(Y["a"])(i, d, (function(e, t) {
					e.secondaryNav = [].concat(Object(B["a"])(e.secondaryNav), Object(B["a"])(t))
				})), Object(Y["a"])(i, l, (function(e, t) {
					e.grantMeLists = Object(c["a"])(Object(c["a"])({}, e.grantMeLists), t)
				})), Object(Y["a"])(i, P, (function(e, t) {
					e.showDataCenter = t
				})), Object(Y["a"])(i, u, (function(e, t) {
					e.getIdentityslist = Object(c["a"])(Object(c["a"])({}, e.getIdentityslist), t)
				})), Object(Y["a"])(i, "UPDATE_MESSAGECOUNT", (function(e, t) {
					e.messageCount = t
				})), Object(Y["a"])(i, "UPDATE_MESSAGE_TYPE", (function(e, t) {
					e.messageType = t
				})), Object(Y["a"])(i, "SET_LOGINCONFIG", (function(e, t) {
					e.loginConfig = t
				})), Object(Y["a"])(i, "SET_HEADERLINKS", (function(e, t) {
					e.headerLinks = t
				})), Object(Y["a"])(i, "GET_FOOTERLINKS", (function(e, t) {
					e.footerLinks = t
				})), i),
				m = {
					getSecondaryNav: function(e, t) {
						var a = e.commit;
						e.state;
						return s.a.appFetch({
							method: "get",
							url: "getUserWebShow"
						}, (function(e) {
							0 == e.e ? a("UPDATA_SECONDARYNAV", e.d) : console.error(e.m)
						}), (function(e) {
							console.error(e)
						}))
					},
					getGrantMeLists: function(e, t) {
						var a = e.commit,
							i = e.state,
							T = s.a.authH.getCookieUid();
						i.grantMeLists && i.grantMeLists[T] || s.a.appFetch({
							url: "getGrantMeLists",
							method: "get"
						}, (function(e) {
							if (0 == e.e) {
								var t = {};
								t[T] = e.d, a("UPDATA_GRANTMELISTS", t)
							}
						}))
					},
					getIdentityFun: function(e) {
						var t = e.commit,
							a = e.state,
							i = s.a.authH.getCookieUid();
						a.getIdentityslist && a.getIdentityslist[i] || s.a.appFetch({
							url: "getIdentitys",
							method: "get"
						}, (function(e) {
							if (0 == e.e || 1 == e.e) {
								var a = {};
								a[i] = e.d, t("UPDATE_IDENTITY", a)
							}
						}))
					},
					getMessageCount: function(e, t) {
						var a = e.commit,
							i = e.state;
						(s.a.appCommonH.isEmptyObj(i.messageCount) || t) && s.a.appFetch({
								url: "messageCount",
								method: "get"
							}, (function(e) {
								0 == e.e && a("UPDATE_MESSAGECOUNT", e.d.num)
							}))
					},
					GET_LOGINCONFIG: function(e) {
						var t = this;
						s.a.appFetch({
							method: "get",
							url: "getLoginConfig"
						}, (function(a) {
							a.e ? t.$message.error("数据请求失败，请重新进入页面或点击按钮") : e.commit("SET_LOGINCONFIG", a.d)
						}), (function(e) {
							t.$message.error("数据请求失败，请重新进入页面或点击按钮")
						}))
					},
					GET_HEADERlINKS: function(e) {
						var t = e.commit;
						s.a.appFetch({
							url: "cHomeGetLinks",
							method: "get",
							data: {
								type: 1
							}
						}, (function(e) {
							0 == e.e ? t("SET_HEADERLINKS", e.d) : t("SET_HEADERLINKS", [])
						}), (function(e) {
							t("SET_HEADERLINKS", [])
						}))
					},
					GET_FOOTERlINKS: function(e) {
						var t = e.commit;
						s.a.appFetch({
							url: "cHomeGetLinks",
							method: "get",
							data: {
								type: 2
							}
						}, (function(e) {
							0 == e.e ? t("GET_FOOTERLINKS", e.d) : t("SET_FOOTERLINKS", [])
						}), (function(e) {
							t("SET_FOOTERLINKS", [])
						}))
					}
				}, h = {
					namespaced: !0,
					state: function() {
						return {
							grantMeLists: {},
							getIdentityslist: {},
							showDataCenter: null,
							messageCount: {},
							messageType: 0,
							secondaryNav: [],
							menuLists: [],
							loginConfig: null,
							headerLinks: null,
							footerLinks: null
						}
					},
					mutations: X,
					actions: m
				}, f = (a("14d9"), a("d3b7"), a("ddb0"), a("e9c4"), "SET_ALLPLUGINS"),
				S = "ADD_STARTLOADING",
				g = "REDUCE_STARTLOADING",
				A = "SET_ALLPRINTMAKE",
				v = "SET_PRINTMAKE",
				D = "DEL_PRINTMAKE",
				R = "SET_PRIMARYUID",
				M = "SET_STARTERDEPARID",
				V = "SET_ISPRINTMAKE",
				C = "SET_TABLEPAGEINFO",
				b = "SET_PRINTSTYLE",
				y = "SET_FORMLOADED",
				w = "ADD_WARNING",
				U = "CLEAR_WARNING",
				W = "SET_CHILDTABLE",
				_ = "CHILDDATASOURCE",
				E = "CHILDNOCANSOURCE",
				x = "CHILDNOCANSOURCEKEYS",
				I = "REPEAT_OPERATIONALERT",
				k = "SET_SELECTTD",
				O = "REFRESH_RTABLE",
				Q = "SET_FORMSTATUS",
				N = "REFRESH_DATASOURCE",
				L = "RETABLE_IDS",
				j = "SET_SORT",
				F = "SET_FORM_NEW",
				Z = "ADD_DATASOURCELOADING",
				H = "REDUCE_DATASOURCELOADING",
				G = "SET_PROVINCES",
				K = (T = {}, Object(Y["a"])(T, f, (function(e, t) {
					var a = t.id ? t.id : "0";
					s.a.set(e.allplugin, a, t.allplugin)
				})), Object(Y["a"])(T, S, (function(e) {
					e.matterLoading++
				})), Object(Y["a"])(T, g, (function(e) {
					e.matterLoading--
				})), Object(Y["a"])(T, Z, (function(e) {
					e.dataSourceLoading++
				})), Object(Y["a"])(T, H, (function(e) {
					e.dataSourceLoading--
				})), Object(Y["a"])(T, A, (function(e, t) {
					var a = t.fid ? t.fid : 0;
					s.a.set(e.repeatPrintInfo, a, t.data)
				})), Object(Y["a"])(T, v, (function(e, t) {
					var a = t.fid ? t.fid : 0,
						i = t.tid ? t.tid : 0,
						T = t.trid ? t.trid : 0;
					e.repeatPrintInfo[a] || s.a.set(e.repeatPrintInfo, a, {}), e.repeatPrintInfo[a][i] || s.a.set(e.repeatPrintInfo[a], i, {}), s.a.set(e.repeatPrintInfo[a][i], T, t.data)
				})), Object(Y["a"])(T, D, (function(e, t) {
					var a = t.fid ? t.fid : 0,
						i = t.tid ? t.tid : 0,
						T = t.trid ? t.trid : 0;
					if (!e.repeatPrintInfo[a] || !e.repeatPrintInfo[a][i]) return !1;
					s.a.delete(e.repeatPrintInfo[a][i], T)
				})), Object(Y["a"])(T, R, (function(e, t) {
					e.primaryUid = t.uid
				})), Object(Y["a"])(T, M, (function(e, t) {
					e.starterDepartId = t.starterDepartId
				})), Object(Y["a"])(T, V, (function(e, t) {
					e.isPrintMake = t.isPrintMake
				})), Object(Y["a"])(T, C, (function(e, t) {
					var a = t.fid ? t.fid : "0";
					s.a.set(e.tablePageInfo, a, t.data)
				})), Object(Y["a"])(T, b, (function(e, t) {
					var a = t.fid ? t.fid : "0";
					s.a.set(e.printStyle, a, t.data)
				})), Object(Y["a"])(T, y, (function(e, t) {
					var a = t.fid ? t.fid : "0";
					s.a.set(e.formLoaded, a, t.status)
				})), Object(Y["a"])(T, w, (function(e, t) {
					e.warningErrors.push(t)
				})), Object(Y["a"])(T, U, (function(e, t) {
					e.warningErrors = []
				})), Object(Y["a"])(T, W, (function(e, t) {
					e.childTable = t
				})), Object(Y["a"])(T, _, (function(e, t) {
					s.a.set(e.childDataSource, t.fid, t.params)
				})), Object(Y["a"])(T, E, (function(e, t) {
					s.a.set(e.childNoCanSource, t.fid, t.ids)
				})), Object(Y["a"])(T, x, (function(e, t) {
					s.a.set(e.childNoCanSourceKeys, t.fid, t.keys)
				})), Object(Y["a"])(T, I, (function(e, t) {
					e.repeatOperationAlert = t
				})), Object(Y["a"])(T, k, (function(e, t) {
					var a = {};
					for (var i in e.selectData) a[i] = t[i] ? t[i] : e.selectData[i];
					e.selectData = a
				})), Object(Y["a"])(T, O, (function(e, t) {
					s.a.set(e.refreshRTable, t.fid, t.params)
				})), Object(Y["a"])(T, Q, (function(e, t) {
					s.a.set(e.formStatus, t.fid, t)
				})), Object(Y["a"])(T, N, (function(e, t) {
					s.a.set(e.refreshDataSource, t.fid, t.params)
				})), Object(Y["a"])(T, L, (function(e, t) {
					var a = e.retableIds[t.fid] || {};
					a[t.key] = t.params, s.a.set(e.retableIds, t.fid, JSON.parse(JSON.stringify(a)))
				})), Object(Y["a"])(T, j, (function(e, t) {
					var a = {};
					a[t.key] = t.data, s.a.set(e.setSortInfo, t.fid, a)
				})), Object(Y["a"])(T, F, (function(e, t) {
					e.formNews = t
				})), Object(Y["a"])(T, G, (function(e, t) {
					e.provinceLists = t
				})), T),
				z = (a("caad"), a("2532"), a("a15b"), a("4e82"), {
					toReduceStartLoading: function(e) {
						setTimeout((function() {
							e.state.matterLoading > 0 && e.commit("REDUCE_STARTLOADING")
						}), 300)
					},
					initFormStatus: function(e, t) {
						var a = {
							fid: t.fid,
							status: 1,
							initSourceList: [],
							usedSourceList: []
						};
						for (var i in t.plugins) {
							var T = t.plugins[i];
							1 == T.classtype && "dDataSource" == T.type && (T.attr.data.runStatus.includes(1) && a.initSourceList.push(T.key))
						}
						a.status = a.initSourceList.length ? 1 : 2, e.commit("SET_FORMSTATUS", a)
					},
					formSourceRun: function(e, t) {
						var a = e.state.formStatus[t.fid];
						if (!a.initSourceList.includes(t.sourceKey) || 2 == a.status) return !1;
						a.usedSourceList.includes(t.sourceKey) || a.usedSourceList.push(t.sourceKey), a.usedSourceList.sort().join("_") == a.initSourceList.sort().join("_") && (a.status = 2), e.commit("SET_FORMSTATUS", a)
					},
					onlySetFormStatus: function(e, t) {
						var a = e.state.formStatus[t.fid];
						a.status = t.status, e.commit("SET_FORMSTATUS", a)
					},
					clearPkuAgent: function(e, t) {
						e.commit("SET_STARTERDEPARID", {
							starterDepartId: ""
						}), e.commit("SET_PRIMARYUID", {
							uid: ""
						})
					}
				}),
				J = {
					namespaced: !0,
					state: function() {
						return {
							allplugin: {},
							matterLoading: 0,
							dataSourceLoading: 0,
							isPrintMake: !1,
							repeatPrintInfo: {},
							tablePageInfo: {},
							printStyle: {},
							formLoaded: {},
							warningErrors: [],
							childTable: {},
							childDataSource: {},
							childNoCanSource: {},
							childNoCanSourceKeys: {},
							repeatOperationAlert: {},
							selectData: {
								tableid: "",
								start: {
									id: "",
									row: 0,
									col: 0
								},
								end: {
									id: "",
									row: 0,
									col: 0
								},
								selectIds: []
							},
							refreshRTable: {},
							formStatus: {},
							refreshDataSource: {},
							retableIds: {},
							setSortInfo: {},
							formNews: {
								method: "",
								data: {}
							},
							provinceLists: []
						}
					},
					mutations: K,
					actions: z
				}, q = "UPDATA_SAVEDATA",
				$ = "UPDATE_NODEID",
				ee = "UPDATE_FORMS",
				te = "UPDATE_EVARLIST",
				ae = "UPDATE_FLOWVARLIST",
				ie = "UPDATE_FORMSHELPER",
				Te = "UPDATE_EVARLISTHELPER",
				ne = "UPDATE_RELATIVESHELPER",
				oe = "UPDATE_RELATIVEAHELPER",
				se = "UPDATE_FORMSCOMPONENT",
				re = "UPDATE_FORMINFO",
				Ye = "UPDATE_SHOWAGAINdDATA",
				ce = "UPDATE_SHOWDRAFTDATA",
				Be = (n = {}, Object(Y["a"])(n, q, (function(e, t) {
					e.saveData = t
				})), Object(Y["a"])(n, $, (function(e, t) {
					e.currNodeId = t
				})), Object(Y["a"])(n, ee, (function(e, t) {
					e.forms = t
				})), Object(Y["a"])(n, te, (function(e, t) {
					e.evarList = t
				})), Object(Y["a"])(n, ae, (function(e, t) {
					e.flowVarList = t
				})), Object(Y["a"])(n, ie, (function(e, t) {
					e.formsHelper = t
				})), Object(Y["a"])(n, Te, (function(e, t) {
					e.evarHelper = t
				})), Object(Y["a"])(n, ne, (function(e, t) {
					e.evarHelper = t
				})), Object(Y["a"])(n, oe, (function(e, t) {
					e.evarHelper = t
				})), Object(Y["a"])(n, se, (function(e, t) {
					e.formComponent = t
				})), Object(Y["a"])(n, re, (function(e, t) {
					e.formInfo = t
				})), Object(Y["a"])(n, Ye, (function(e, t) {
					e.formAgainInfo = t
				})), Object(Y["a"])(n, ce, (function(e, t) {
					e.formDraftInfo = t
				})), n),
				le = {
					namespaced: !0,
					state: function() {
						return {
							saveData: {},
							forms: {},
							currNodeId: "",
							evarList: [],
							flowVarList: [],
							formsHelper: [],
							evarHelper: [],
							relationSHelper: [],
							relationAHelper: [],
							formComponent: {},
							formInfo: {},
							formAgainInfo: {},
							formDraftInfo: {}
						}
					},
					mutations: Be
				}, Pe = {
					SET_EXAM_DEPART: function(e, t) {
						e.exam_depart = t
					},
					CLEAR_EXAM_DEPART: function(e, t) {
						e.exam_depart = {}
					},
					SET_NODEDATAS: function(e, t) {
						e.nodeDatas = t
					},
					SET_SELECTUIDS: function(e, t) {
						e.selectNodeUid = t
					},
					SET_SMSSEND: function(e, t) {
						e.sms_send = t
					},
					My_TAST: function(e, t) {
						e.task = t
					},
					My_SPONSOR: function(e, t) {
						e.sponsor = t
					},
					SET_AGENT_INFO: function(e, t) {
						e.agent_info = t
					},
					CLEAR_AGENT_INFO: function(e, t) {
						e.agent_info = {}
					},
					FORM_MATTER: function(e, t) {
						s.a.set(e.formMatter, t.type, t.data)
					},
					SET_FORCE_USERNAME: function(e, t) {
						e.forceUserName = t
					},
					SET_EXAMINE_ACTION: function(e, t) {
						e.examineAction = t
					},
					SET_SYSTEMUPYEAR: function(e, t) {
						e.systemUpYear = t
					}
				}, ue = {
					clearUserSelectInfo: function(e) {
						e.commit("SET_NODEDATAS", []), e.commit("SET_SELECTUIDS", {}), e.commit("SET_SMSSEND", 0)
					},
					GET_SYSTEMUPYEAR: function(e) {
						s.a.appFetch({
							url: "systemUpYear",
							method: "get"
						}).then((function(t) {
							t.e ? e.commit("SET_SYSTEMUPYEAR", []) : e.commit("SET_SYSTEMUPYEAR", t.d)
						}))
					}
				}, de = {
					namespaced: !0,
					state: function() {
						return {
							nodeDatas: [],
							selectNodeUid: {},
							sms_send: {},
							sponsor: "",
							task: "",
							agent_info: {},
							formMatter: {
								startWait: ""
							},
							exam_depart: {},
							forceUserName: "",
							examineAction: "",
							systemUpYear: null
						}
					},
					mutations: Pe,
					actions: ue
				};
			s.a.use(r["a"]);
			var pe = new r["a"].Store({
				modules: {
					common: h,
					form: J,
					process: le,
					matter: de
				}
			});
			t["a"] = pe
		},
		"33c0": function(e, t, a) {
			"use strict";
			var i = function() {
				var e = this,
					t = e._self._c;
				return t("div", {
					staticClass: "message_set"
				}, [t("el-dialog", {
					attrs: {
						title: "消息设置",
						visible: e.show,
						width: "570px",
						"lock-scroll": !1,
						"close-on-click-modal": !1,
						"append-to-body": !0,
						"custom-class": "message_set_pop"
					},
					on: {
						"update:visible": function(t) {
							e.show = t
						},
						close: function(t) {
							return e.$emit("hidemessage", !1)
						}
					}
				}, [t("div", {
					directives: [{
						name: "loading",
						rawName: "v-loading",
						value: e.isLoadApi,
						expression: "isLoadApi"
					}]
				}, [t("div", {
					staticClass: "zl_alert_content"
				}, [t("div", [t("div"), e._v(" "), t("div"), e._v(" "), t("div", [e._v("实时提醒")]), e._v(" "), t("div", [e._v("定时提醒")])]), e._v(" "), !e.channels.wechat || 1 != e.channels.wechat.real.show && 1 != e.channels.wechat.timing.show ? e._e() : t("div", [t("div", [e._v("\n            " + e._s(e.mixZjMessageSet ? "接收钉钉消息" : "接收微信消息") + "\n          ")]), e._v(" "), t("el-popover", {
					attrs: {
						placement: "top",
						"popper-class": "message_qrcode",
						trigger: "click"
					}
				}, [e.mixZjMessageSet ? e._e() : t("zl-button", {
					attrs: {
						slot: "reference",
						widthType: "fixed"
					},
					slot: "reference"
				}, [e._v("关注微信")]), e._v(" "), t("p", [t("span", [e._v(e._s(e.desc))]), e._v(" "), t("br"), e._v(" "), t("img", {
					attrs: {
						src: e.qrcode,
						alt: ""
					}
				})])], 1), e._v(" "), t("div", [1 == e.channels.wechat.real.show ? t("el-select", {
					attrs: {
						placeholder: "请选择",
						disabled: 1 == e.channels.wechat.real.readonly,
						size: "mini"
					},
					model: {
						value: e.channels.wechat.real.select,
						callback: function(t) {
							e.$set(e.channels.wechat.real, "select", t)
						},
						expression: "channels.wechat.real.select"
					}
				}, [t("el-option", {
					attrs: {
						label: "关闭",
						value: "0"
					}
				}), e._v(" "), t("el-option", {
					attrs: {
						label: "开启",
						value: "1"
					}
				})], 1) : e._e()], 1), e._v(" "), t("div", [1 == e.channels.wechat.timing.show ? t("el-time-select", {
					attrs: {
						"picker-options": {
							start: "07:00",
							step: "00:30",
							end: "23:20"
						},
						disabled: 1 == e.channels.wechat.timing.readonly,
						size: "mini",
						format: "HH:mm",
						"value-format": "HH:mm",
						placeholder: "关闭"
					},
					model: {
						value: e.channels.wechat.timing.select_tim,
						callback: function(t) {
							e.$set(e.channels.wechat.timing, "select_tim", t)
						},
						expression: "channels.wechat.timing.select_tim"
					}
				}) : e._e()], 1)], 1), e._v(" "), !e.channels.mobile || 1 != e.channels.mobile.real.show && 1 != e.channels.mobile.timing.show ? e._e() : t("div", [t("div", [e._v("\n            接收短信消息"), t("br"), e._v(" "), e.channels.mobile.value ? e._e() : t("span", {
					staticClass: "redColor"
				}, [e._v("(请先设置手机号)")])]), e._v(" "), t("router-link", {
					attrs: {
						to: "/site/ucenter?showroute=personalCenter"
					}
				}, [t("zl-button", {
					attrs: {
						widthType: "fixed",
						type: "line"
					}
				}, [e._v("设置手机号")])], 1), e._v(" "), t("div", [1 == e.channels.mobile.real.show ? t("el-select", {
					attrs: {
						placeholder: "请选择",
						disabled: 1 == e.channels.mobile.real.readonly || !e.channels.mobile.value,
						size: "mini"
					},
					model: {
						value: e.channels.mobile.real.select,
						callback: function(t) {
							e.$set(e.channels.mobile.real, "select", t)
						},
						expression: "channels.mobile.real.select"
					}
				}, [t("el-option", {
					attrs: {
						label: "关闭",
						value: "0"
					}
				}), e._v(" "), t("el-option", {
					attrs: {
						label: "开启",
						value: "1"
					}
				})], 1) : e._e()], 1), e._v(" "), t("div", [1 == e.channels.mobile.timing.show ? t("el-time-select", {
					attrs: {
						"picker-options": {
							start: "07:00",
							step: "00:30",
							end: "23:20"
						},
						disabled: 1 == e.channels.mobile.timing.readonly || !e.channels.mobile.value,
						size: "mini",
						format: "HH:mm",
						"value-format": "HH:mm",
						placeholder: "关闭"
					},
					model: {
						value: e.channels.mobile.timing.select_tim,
						callback: function(t) {
							e.$set(e.channels.mobile.timing, "select_tim", t)
						},
						expression: "channels.mobile.timing.select_tim"
					}
				}) : e._e()], 1)], 1), e._v(" "), !e.channels.email || 1 != e.channels.email.real.show && 1 != e.channels.email.timing.show ? e._e() : t("div", [t("div", [e._v("\n            接收邮件消息"), t("br"), e._v(" "), e.channels.email.value ? e._e() : t("span", {
					staticClass: "redColor"
				}, [e._v("(请先设置邮箱)")])]), e._v(" "), t("router-link", {
					attrs: {
						to: "/site/ucenter?showroute=personalCenter"
					}
				}, [t("zl-button", {
					attrs: {
						widthType: "fixed",
						type: "line"
					}
				}, [e._v("设置邮箱")])], 1), e._v(" "), t("div", [1 == e.channels.email.real.show ? t("el-select", {
					attrs: {
						placeholder: "请选择",
						disabled: 1 == e.channels.email.real.readonly || !e.channels.email.value,
						size: "mini"
					},
					model: {
						value: e.channels.email.real.select,
						callback: function(t) {
							e.$set(e.channels.email.real, "select", t)
						},
						expression: "channels.email.real.select"
					}
				}, [t("el-option", {
					attrs: {
						label: "关闭",
						value: "0"
					}
				}), e._v(" "), t("el-option", {
					attrs: {
						label: "开启",
						value: "1"
					}
				})], 1) : e._e()], 1), e._v(" "), t("div", [1 == e.channels.email.timing.show ? t("el-time-select", {
					attrs: {
						"picker-options": {
							start: "07:00",
							step: "00:30",
							end: "23:20"
						},
						disabled: 1 == e.channels.email.timing.readonly || !e.channels.email.value,
						size: "mini",
						format: "HH:mm",
						"value-format": "HH:mm",
						placeholder: "关闭"
					},
					model: {
						value: e.channels.email.timing.select_tim,
						callback: function(t) {
							e.$set(e.channels.email.timing, "select_tim", t)
						},
						expression: "channels.email.timing.select_tim"
					}
				}) : e._e()], 1)], 1)])]), e._v(" "), t("div", {
					attrs: {
						slot: "footer"
					},
					slot: "footer"
				}, [t("zl-button", {
					attrs: {
						widthType: "fixed",
						type: "line"
					},
					on: {
						click: function(t) {
							return e.$emit("hidemessage", !1)
						}
					}
				}, [e._v("取消")]), e._v(" "), t("zl-button", {
					attrs: {
						widthType: "fixed",
						selfClass: "is_ok"
					},
					on: {
						click: e.setMessageSet
					}
				}, [e._v("确定")])], 1)])], 1)
			}, T = [],
				n = a("5961"),
				o = a("e48e"),
				s = (a("4709"), {
					name: "messageSet",
					data: function() {
						return {
							isLoadApi: !0,
							qrcode: "",
							desc: "",
							channels: {
								wechat: {
									real: {
										show: "",
										select: "",
										readonly: ""
									},
									timing: {
										show: "",
										select_tim: "",
										readonly: ""
									}
								},
								email: {
									real: {
										show: "",
										select: "",
										readonly: ""
									},
									timing: {
										show: "",
										select_tim: "",
										readonly: ""
									}
								},
								mobile: {
									real: {
										show: "",
										select: "",
										readonly: ""
									},
									timing: {
										show: "",
										select_tim: "",
										readonly: ""
									}
								}
							},
							show: !0
						}
					},
					mixins: [n["a"], o["a"]],
					created: function() {
						this.getMessageSet()
					},
					methods: {
						getMessageSet: function() {
							var e = this;
							this.$appFetch({
								url: "newGetSetting",
								method: "get"
							}, (function(t) {
								0 == t.e ? (e.qrcode = t.d.qrcode, e.desc = t.d.desc, e.channels = t.d.channels, delete e.channels["corp"], e.isLoadApi = !1) : e.$message.error({
									message: t.m,
									showClose: !0
								})
							}), (function() {
								e.$message.error({
									message: "获取消息设置失败，请联系管理员",
									showClose: !0
								})
							}))
						},
						setMessageSet: function() {
							var e = this,
								t = 0;
							for (var a in this.channels) 1 == this.channels[a].real.select && (t = 1);
							this.$appFetch({
								method: "post",
								url: "subNotice",
								data: {
									data: {
										status: t,
										channels: this.channels
									}
								}
							}, (function(t) {
								0 == t.e ? (e.$message.success({
									message: "保存成功",
									showClose: !0
								}), e.$emit("hidemessage", !1)) : e.$message.error({
									message: t.m,
									showClose: !0
								})
							}), (function(t) {
								e.$message.error({
									message: "保存失败，请稍后重试",
									showClose: !0
								})
							}))
						}
					}
				}),
				r = s,
				Y = a("0b56"),
				c = Object(Y["a"])(r, i, T, !1, null, null, null);
			t["a"] = c.exports
		},
		"341c": function(e, t, a) {
			"use strict";
			var i = a("8bbf"),
				T = a.n(i),
				n = a("a4d9"),
				o = a.n(n),
				s = {
					toPdfType: function(e) {
						var t = this.getConfig("isToPdf"),
							a = !(!o.a.customConfig || !o.a.customConfig.isToPdf) && o.a.customConfig.isToPdf.
						default, i = T.a.prototype.siteConfig.system_setting.cloud_print;
						return t[e] ? t[e] : a || ("yes" == i ? 2 : 1)
					},
					getConfig: function(e) {
						return !(!T.a.appConfig.customConfig || !T.a.appConfig.customConfig[e]) && T.a.appConfig.customConfig[e]
					},
					getConfigId: function(e, t) {
						var a = this.getConfig(e);
						return a[t] ? a[t] : a["default"]
					}
				};
			t["a"] = s
		},
		"3dfd": function(e, t, a) {
			"use strict";
			var i = function() {
				var e = this,
					t = e._self._c;
				return t("router-view")
			}, T = [],
				n = a("9b50"),
				o = a("a9ec"),
				s = (a("caad"), a("2532"), function() {
					function e(t) {
						Object(n["a"])(this, e), this.oDiv = document.querySelector(t), this.disX = 0, this.disY = 0, this.init()
					}
					return Object(o["a"])(e, [{
						key: "init",
						value: function() {
							this.oDiv.addEventListener("touchstart", function(e) {
								var t = e.targetTouches[0];
								this.disX = t.clientX - this.oDiv.offsetLeft, this.disY = t.clientY - this.oDiv.offsetTop, this.oDiv.addEventListener("touchmove", this.Fntouchmove.bind(this)), this.oDiv.addEventListener("touchend", function(e) {
									this.oDiv.removeEventListener("touchmove", this.Fntouchmove)
								}.bind(this))
							}.bind(this))
						}
					}, {
						key: "Fntouchmove",
						value: function(e) {
							e.preventDefault();
							var t = e.targetTouches[0],
								a = t.clientX - this.disX,
								i = t.clientY - this.disY,
								T = $(window).width() - $(this.oDiv).outerHeight(!0),
								n = $(window).height() - $(this.oDiv).outerHeight(!0);
							a > 0 && a < T && (this.oDiv.style.left = a + "px"), i > 0 && i < n && (this.oDiv.style.top = i + "px")
						}
					}]), e
				}()),
				r = function() {
					function e(t) {
						Object(n["a"])(this, e), this.ua = navigator.userAgent, this.isAndroid = -1 !== this.ua.indexOf("Android") || -1 !== this.ua.indexOf("Adr"), this.iswx = -1 !== this.ua.toLowerCase().indexOf("micromessenger"), this.isMiniprogram = "miniprogram" === window.__wxjs_environment, this.path = "", this.showReturnBtnPaths = t
					}
					return Object(o["a"])(e, [{
						key: "initReturnBtn",
						value: function() {
							this.isAndroid && this.iswx && !this.isMiniprogram && (this.removeReturnBtn(), this.showReturnBtnPaths.includes(this.path) && (window.history.length > 1 || document.referrer) && (this.createReturnBtn(), new s("#android_retrun_btn"), this.
								return ()))
						}
					}, {
						key: "createReturnBtn",
						value: function() {
							if (!$("#android_retrun_btn").length) {
								var e = $("<div>返回</div>").attr({
									id: "android_retrun_btn"
								});
								e.appendTo("body")
							}
						}
					}, {
						key: "removeReturnBtn",
						value: function() {
							$("#android_retrun_btn").remove()
						}
					}, {
						key: "return",
						value: function() {
							$("body").on("click", "#android_retrun_btn", (function() {
								window.history.length > 1 ? window.history.go(-1) : location.href = document.referrer
							}))
						}
					}]), e
				}(),
				Y = (a("99af"), a("e644")),
				c = function() {
					function e() {
						Object(n["a"])(this, e)
					}
					return Object(o["a"])(e, [{
						key: "init",
						value: function() {
							Y["a"].checkLogin() && this.createrEle()
						}
					}, {
						key: "createrEle",
						value: function() {
							this.removeEle();
							var e = "";
							document.cookie && (e = document.cookie.split("=")[1]);
							var t = $("<img />").attr({
								id: "visits_collect",
								src: "".concat(appConfig.apiBaseUrl, "/api/visits/collect?agent=").concat(location.href.includes("m_") ? "mobile" : "pc", "&uid=").concat(e),
								style: "display: none;"
							});
							t.appendTo("body")
						}
					}, {
						key: "removeEle",
						value: function() {
							$("#visits_collect").remove()
						}
					}]), e
				}(),
				B = c,
				l = {
					data: function() {
						return {
							showReturnBtnPaths: ["/site/m_search", "/site/m_message", "/site/m_changeInfo", "/site/m_addapp", "/matter/m_detail", "/matter/m_start", "/matter/m_startStep", "/matter/m_examine", "/matter/m_rejectStep", "/matter/m_launchSearch", "/matter/m_search", "/report/m_detail", "/report/m_search"],
							androidReturnBtn: null,
							visitsCollect: null
						}
					},
					created: function() {
						this.androidReturnBtn = new r(this.showReturnBtnPaths), this.visitsCollect = new B
					},
					updated: function() {
						this.androidReturnBtn.path = this.$route.path, this.androidReturnBtn.initReturnBtn(), this.visitsCollect.init()
					}
				}, P = l,
				u = a("0b56"),
				d = Object(u["a"])(P, i, T, !1, null, null, null);
			t["a"] = d.exports
		},
		4274: function(e, t, a) {},
		4709: function(e, t, a) {},
		"4bf4": function(e, t, a) {},
		"4d72": function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAAy5JREFUSA3FV81qGlEUPmrEkuouSBAUddFFdFeipl35BoFWpI/QRQshz5DspNCXKBIL6VIodWEQlcaV6Corxb9EF1q0mB97vsncwXF0Ztpqe0HOvff8fPece+6Zo4VMjNlsZj07O3vB9JB/z1nFY7FYPFDldYtJi9eX/DtPJBIFpg/g6Q2LHjOXyz3p9XrvWeaYAdx6soLHoD2ep9xu98d4PP5T7C/SlcDpdPoVg31gBe+iksl1gw9xlEwmPy+Tty5uMpiFQU+YZpj3p6Aw64UN2ZbGQdWGDPqJlZLQXONIs+dvOAIzYdMmJqB7e3snTN7O761pHq7VavZMJvNN2FM8lu8U4d3YYI9fizuX7hjZy2FGIm10AANYAJGA5SfzN4lk9sBeGYusfAqAH+tp7uzsUCQSIZtNlRIalWAwSKFQSLO/sIGaYLWx4EuevFtgqpbhcJgCgQC5XC5qtVqoVio+Fj6fTzrc9vY2XV1dLZWRlZ7W6/WvW2zkUGNlYaNSqZDdbiev9/E2SqUS3d/fK1IAjUajNJ1OqVwu08ODfsUEJkKN2qs77u7uqFgsUrPZlMABIsIuQG9vb+ni4oJubm50bYEJzC2mUrE3koaHAI/FYhI4vOp0OrS/v0+/AyrjeFAeR3wCpxGw4MNTJBo8xRiPx1QoFKjf7wsRQ8rv+YemVhtpwfN2u62IDYdDGgwGytrkZIY7xvfU9ICnCO9kMqFut0u7u7t0cHCg3LkZQ4zZxh0D+JkZBWQ1EgvJhvDCU4Bin41JGT2f7To2W1aO96WOgMKCcSQWQEX2IsFEtiMSZooMDDLmdwCfK9ZXTPx+v+SZAL2+vlYk4SHeNZ6auAa2qfCXTZj/xSr3SGhXVg6n00mj0UjydB5UKOBAAG80GuRwOOCRYGko83rAhMcoMymNxNxGtVqlbDZLy0CFmLj3fD5vVLlSwJSeExozNtAQRpZRozIodAzkGjLW42cR3SCf4kgob4oCQ3SeSgFBZ8CM0w2CnoruAxiqLOC3iBL6T5o9xWPpFNwFyt3g2jxHFGWbqo+4yuP5MMvN38Ya+pXAOMR/+Qsz7z3f/dr/tP0CZtaoNDupIXkAAAAASUVORK5CYII="
		},
		5264: function(e, t, a) {
			"use strict";
			a("d9e2");
			var i = a("8bbf"),
				T = a.n(i),
				n = {
					bind: function(e, t, a) {
						e.binding = t;
						var i = a.context;
						e.addEventListener("click", (function() {
							var t = e.binding.value;
							i.$confirm(t.title, "提示", {
								confirmButtonText: "确认",
								cancelButtonText: "取消",
								type: "warning"
							}).then((function() {
								t.callback(t.params)
							})).
							catch ((function(e) {
								return e
							}))
						}))
					},
					update: function(e, t) {
						e.binding = t
					}
				}, o = {
					bind: function(e, t) {
						e.binding = t;
						var a = e;
						document.onselectstart = function() {
							return !1
						}, a.onmousedown = function(t) {
							var i = e.binding.value;
							if (!i || i.isMove) {
								var T = t.clientX - a.offsetLeft,
									n = t.clientY - a.offsetTop;
								return document.onmousemove = function(e) {
									var t = e.clientX - T,
										o = e.clientY - n;
									a.style.left = t + "px", a.style.top = o + "px", i.callback({
										left: t,
										top: o
									})
								}, document.onmouseup = function() {
									document.onmousemove = null, document.onmouseup = null
								}, !1
							}
						}
					},
					update: function(e, t) {
						e.binding = t
					}
				}, s = {
					inserted: function(e, t, a) {
						var i = t.value,
							T = a.context,
							n = T.$authH.queryControl(i);
						if (!i) throw new Error("权限传入错误！！！");
						n || e.parentNode && e.parentNode.removeChild(e)
					}
				};
			T.a.directive("tip", n), T.a.directive("drag", o), T.a.directive("permission", s)
		},
		"534e": function(e, t, a) {},
		"555d": function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAsBJREFUaEPtm/912yAQx3UwQDNCOkGTDdwJGh7833aCuJPU2SD92+KRThBvEHuCdoO2A8D1nZ+VJ6uxBQhJSI3/0xOg+/CFO36coWj8jDGXzrlbRFwAwFXzfY7PiLgFgA1j7E4I8bNuI9QftNZfi6JY5ggRYNNKSvmlKv8MWJbl01QUa4MlRZVS11RuD1iW5QoAbtsqTuk9It4ppZZwmHM/pmS8r62MsbcwR/WqDiAVCXA2c6+p7N67aq3RV/IplnsFnKJqR4E+tyGKiH8AYCmlvCcPb62lEPYhtqOzGqIExzlfCCG2daCyLO8B4GMMZDaAp+AqqFjInAC3nPP3Qojfp5SKgcwGkKAobnlAPoTMyawAfSCNMRfOuV++83E0wMpbIiJ5yTd1g9uU1FoT4IUP5CiAdYdijLmy1m58Iam8c+7JB26/XRo6Dr7kLX0haXhaax9D9q2DAp4LBW2QpEYo3KAKtsU5MuYc5N7YiDOiQRT0gavm1ClI3znXLNc7YAhcH5C9AsbAVZDr9XrBGHuMVa6q1xtgF7gYb3mqI3oBzAWuFy+aE1xywNzgkgLmCJcMMFe4JIA5w3UGzB2uE+AU4DoBMsaum6dfPquOlEHc53uxgX4npQy+/R0aLlrB6u7NpwdrC+jgzWpI+0mXaqHDcwzlohfb5FyUUl4HPodN7CjKdQH8ppT65DN8xlSuC6BQSj20AeYAF+VkpJRHqScvgeYCFwyIiN+VUjdnoOia6wYAFr4Hs20joev70Dj4me7taq6f7u/qUF3tSV4/CJDSMkgZ5xzd1ZGSl8ktStxgEGBRFHS15R0iEtsa1VwoYNRHxqz0Cjhm76f49n+hIGU0vEvRWxm2sZt/Mt7s0ylpWM0xpfI5IbaaN1rr2czF+pr5aGcwByWbxyn/bH0OCXDLw45gKt51h4gbzvmq+beCv2Vyfn99DhJdAAAAAElFTkSuQmCC"
		},
		5961: function(e, t, a) {
			"use strict";
			var i = a("2e8c"),
				T = (a("ac1f"), a("5319"), a("14d9"), a("4de4"), a("d3b7"), a("caad"), a("2532"), a("2f62")),
				n = a("fa89"),
				o = a("e48e");
			t["a"] = {
				mixins: [o["a"]],
				data: function() {
					return {
						mixIsQuickDownload: {
							default: !1
						},
						mixNextNodeTips: {},
						mixLayoutOneTab: [{
							name: "首页",
							active: "index",
							path: "/site/index"
						}, {
							name: this.$t("system.serviceHall"),
							active: "service",
							path: "/site/service"
						}, {
							name: this.$t("system.frontMenusMyHomePage"),
							active: "userpage",
							path: "/homepage/index"
						}],
						mixLayoutTwoTab: [{
							name: "门户首页",
							path: "/site/index",
							openNew: 0,
							query: {}
						}, {
							name: this.$t("system.serviceHallTwo"),
							path: "/site/serviceList",
							openNew: 0,
							query: {}
						}, {
							name: "我的申请",
							path: "/matter/launch"
						}, {
							name: "我的任务",
							childrens: [{
								name: "我的待办",
								path: "/matter/todo",
								openNew: 0,
								query: {},
								authKey: ["my-todo"]
							}, {
								name: "我的知会",
								path: "/matter/read",
								openNew: 0,
								query: {},
								authKey: ["my-read"]
							}, {
								name: "我的填报",
								path: "/matter/fill",
								openNew: 0,
								query: {},
								authKey: ["tb-task"]
							}]
						}, {
							name: "公文协同",
							childrens: [{
								name: "我的公文",
								path: "/reserve/myOfficial",
								openNew: 0,
								query: {},
								authKey: ["document"]
							}, {
								name: "公文中心",
								path: "/reserve/officialCenter",
								openNew: 0,
								query: {},
								authKey: ["document"]
							}, {
								name: "办文管理",
								path: "/reserve/dispatchManage",
								openNew: 0,
								query: {},
								authKey: ["document"]
							}]
						}, {
							name: "效能监督",
							path: "/site/monitoring",
							openNew: 0,
							query: {},
							authKeyMo: ["ServiceSituation.webAll", "DepartService.webAll"],
							authKey: ["service-count"]
						}, {
							name: "数据中心",
							childrens: [{
								name: "报表统计",
								path: "/report/index",
								openNew: 0,
								query: {},
								authKey: ["apps-report-lists"]
							}, {
								name: "填报统计",
								path: "/fillForm/report",
								openNew: 0,
								query: {},
								authKey: ["tb-report"]
							}]
						}, {
							name: "用户中心",
							path: "/site/ucenter",
							openNew: 0,
							query: {}
						}],
						minLogoSkipLink: "/site/index",
						mixLayoutTwoSearchIcon: "iconfont iconsearchclose",
						mixShowResetPwd: !1,
						mixShowMessagePop: !0,
						mixShowHasTemplate: !0,
						mixShowSearch: !0,
						mixHeaderShowBtnBox: !0,
						mixXidianFooter: !0,
						mixFmmuHeader: !0,
						mixFmmuButtom: !0,
						mixfmmuIndexLink: !0,
						mixFmmuButtomIndex: !0,
						mixCsuSystemTree: !1,
						mixFeedbackShow: !0,
						mixGOReserveShow: !1,
						mixReportShow: !1,
						mixZjMessageSet: !1,
						authList: {},
						mixLayoutTwoShowHeader: !0,
						mixEditorShowRadio: !1,
						mixEditorValue: 1,
						mixPDFText: "下载PDF",
						mixWebShow: [],
						mixLayOutOne: this.siteConfig.site_name,
						mixShowFooterLaunchTotal: !1,
						mixLogoutStyle: "one",
						mixToPdfUrl: this.$appConfig.baseUrl.replace("test.office.rlstech.cn:8883", "dev-officeflow.rlstech.cn"),
						mixShowBottomHall: !0,
						mixShowBottomApplay: !0,
						mixIsShowOfficial: !0,
						mixSealIsShowPwdQrcode: !0,
						mixHidelognButton: !0,
						mixHidelognOutButton: !0,
						mixuserOpenStyle: {},
						mixNoLoginClass: "button_gray",
						mixSealIsShowPwdVerify: !0,
						mixShowFmmu: !0,
						mixLayoutShowHomepage: !1,
						mixSearchTextName: !0,
						mixNextNodeTitleText: {
							default: "请设置下一个节点审批人"
						},
						mixServiceTime: "事项不在服务时间",
						mixOneUserOpenStyle: {},
						mixKeywordsStyle: !1,
						mixIsShowMessage: !0,
						isShowDepartName: !0,
						mixPrintBeforeSubmit: {
							default: !1
						},
						mixBackHeaderPath: {
							path: "/site/index"
						},
						mixNextNodeOperation: {
							default: {
								modify: "返回修改",
								submit: "确定"
							}
						},
						mixIsShowSwitchTo: !1,
						mixIsShowTemplate: !0
					}
				},
				computed: Object(i["a"])(Object(i["a"])({}, Object(T["d"])("common", ["menuLists", "secondaryNav"])), {}, {
					mixRightNavShowPage: function() {
						return !1
					},
					mixHiddenFooter: function() {
						return !1
					}
				}),
				methods: Object(i["a"])(Object(i["a"])(Object(i["a"])({}, Object(T["c"])("common", ["UPDATA_SECONDARYNAV", "UPDATA_MENULIST"])), Object(T["b"])("common", ["getSecondaryNav"])), {}, {
					mixClickUserName: function() {},
					mixGetConfig: function(e, t) {
						return this[e] && this[e][t] ? this[e][t] : this[e].
						default
					},
					mixSealCheckSealType: function() {
						return !1
					},
					mixNuaaHideHeader: function() {
						return !0
					},
					mixGetTopNav: function() {
						var e = this,
							t = n["a"].getLItem("menuLists");
						t && this.UPDATA_MENULIST(t), this.getSecondaryNav().then((function() {
							e.mixWebShow = e.secondaryNav;
							for (var t = [], T = 0; T < e.mixLayoutTwoTab.length; T++) a(e.mixLayoutTwoTab[T]) && (e.mixLayoutTwoTab[T].childrens ? t.push(Object(i["a"])(Object(i["a"])({}, e.mixLayoutTwoTab[T]), {}, {
								childrens: e.mixLayoutTwoTab[T].childrens.filter(a)
							})) : t.push(e.mixLayoutTwoTab[T]));
							var o = t.filter((function(e) {
								return void 0 == e.childrens || e.childrens.length
							}));
							e.UPDATA_MENULIST(o), n["a"].setLItem("menuLists", o)
						}));
						var a = function(t) {
							if (void 0 == t.authKey && void 0 == t.authKeyMo) return !0;
							if (t.authKeyMo)
								for (var a in t.authKeyMo)
									if (e.$authH.queryControl(t.authKeyMo[a])) return !0;
							for (var i in t.authKey)
								if (e.mixWebShow.includes(t.authKey[i])) return !0;
							return !1
						}
					},
					mixhithideHeader: function() {
						return !1
					},
					mixNeedHintMethods: function() {
						return !1
					},
					mixSetLayOutOneTitle: function() {}
				}),
				components: {
					frontFooter: {
						template: '\n      <div class="footer">\n        <p>\n          <span v-if="siteConfig.site_name">{{ siteConfig.site_name }} <span>|</span></span>\n          <span v-if="siteConfig.site_address">地址：{{ siteConfig.site_address }} <span>|</span></span>\n          <span v-if="siteConfig.site_email"> 邮箱：{{ siteConfig.site_email }} <span>|</span></span>\n          <span v-if="siteConfig.site_copyright">{{ siteConfig.site_copyright }} <span>|</span></span>\n          <span v-if="siteConfig.site_archival">{{ siteConfig.site_archival }} <span>|</span></span>\n        </p>\n      </div>\n      '
					},
					myRouterLink: {
						template: ""
					}
				}
			}
		},
		"5c8e": function(e, t, a) {},
		"5e5f": function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAA0JJREFUaEPtW+1x00AQ3VcB0AGugKQCSAUkFUAqIKkAqICkApIKAhWQVIBdAekAqOAxz3PyyIqCbvdOmljjm/EPj+9j375d7YfOsM4g+dLMPpjZGzM76P7+RL8vzezWzC4B3LdlRPsLyS9mdvZEQeSKdQHgvJm8AUjy5w4xNgR2CeBQk9YASV4ksxxauEu/y1zPkHzu1y5J7pB1IYBzZK/RwaUAzsn3uuQuBZAOyndu6h7gzlHWEXhsBv+a2TczU3bRfCSCsqXmc2xmz8ZS5FgArwUMgMANDpICqc+7wcnOCbUB3inVA6Dc0D1IKvdV2HrtXvzIgpoATwFc1RCM5Hsz+1pjrxoA5WfHAJTNVxskVc3IxIv8swbAw6hJDmkjmawSkfAoBZhtliR/tKUEcJQjdam5lgC8BiBfyRrdjAnAVi36v01IylTfZh3UmRQFKL876FbPA0JupYROgIqZoYonCvAzgE8ejZYwqHNI6ryPnjM1Nwpw4WEvCRhmMK0PsRgBuALgbkaVMphAKoF45WExAvAcgLIN16gE0G2mEYBHkaBeCaCC/1a4GdLyHmBXQ57He3ttDQb7HlbVGZw9QDN7AeDPkOa6v9dgMNLi3PtgD1PZCXZtH4wk3hEGXUl2AzLVdxvMwVCjgtrV1ogAvAew8Ppgjfkkf5vZc89eEYDa322m0XqwZQGhNkYU4G1uwdoSsDTZDr1iiAKU3Ce5bcHSaiK1FW88ptnMLQGoWKiyKSsmRuMgSfmcil2X79UAqD3U3D3J0Wz0KZp8V0l2aJQw2Bx4BeA0dPrAIpLqjWb3ffq2qwFwzWR6smaZ65AyklkKnNr5RaMWQAmhlysKH0UN4GTKeqCEfK6rjZoANyab7qu43k+kJq+usYT9bUwT7dtbAJVa3T3W+U7Vgfqd8jN3nyfHdsdgsO/c3syHpB7/6paNNqYC+CB/jVQGES1MBVCybXXjpmBPh04JUCFEbT/5pu7DFYeAHEanBJgjT/U5e4DVVTrxhmLQ3e+fWMaS41YCOPvLeKHXUiVqnXDtYv4XYhttzswXvwNYx9nupfQ5+OP6KnND3IObDinD1wSVLa63qRP6VveoVfpbgW7cb/2t4B/idviN07NpcwAAAABJRU5ErkJggg=="
		},
		6128: function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return B
			}));
			var i = a("2e8c"),
				T = (a("ac1f"), a("5319"), a("d3b7"), a("13d5"), a("8bbf")),
				n = a.n(T),
				o = a("bc3a"),
				s = a.n(o),
				r = a("1b63"),
				Y = a("4328"),
				c = function(e, t) {
					try {
						e = e.replace(appConfig.apiBaseUrl, ""), n.a.appCommonH.postTimeLine(1, {
							api: e.replace(appConfig.apiBaseUrl, ""),
							useTime: (new Date).getTime() - t
						})
					} catch (a) {}
				}, B = function(e, t, a) {
					var T = e.url;
					if (void 0 === e) return console.error("必须传递参数"), !1;
					e.url.toLocaleLowerCase().indexOf("http") < 0 && (e.url = r["a"].getApi(e.url)), e.withCredentials = !0;
					var o = {
						"Content-Type": "application/x-www-form-urlencoded"
					}; - 1 === window.location.href.indexOf("local.") && (o["X-Requested-With"] = "XMLHttpRequest"), e.headers ? e.headers = Object(i["a"])(Object(i["a"])({}, o), e.headers) : e.headers = o, e.data = Object(i["a"])(Object(i["a"])({}, e.data), n.a.appStore.state.matter.agent_info), e.data = Object(i["a"])(Object(i["a"])({}, e.data), n.a.appStore.state.matter.exam_depart), "get" == e.method.toLowerCase() && (e.params = e.data, delete e.data), e.data && (e.data = Y.stringify(e.data));
					var B = (new Date).getTime();
					return new Promise((function(i, o) {
						n.a.freeAjaxHelper.add(), s()(e).then((function(a) {
							c(e.url, B);
							var T = a.data || {};
							T.e = +T.e, 10042 != T.e ? 100421 != T.e ? "ucass" == appConfig.webId && 10055 == T.e ? window.location.href = "/v2/site/index" : 10044 == T.e ? n.a.prototype.$message({
								type: "error",
								message: T.m,
								showClose: !0
							}) : (t && t(a.data), i(a.data)) : n.a.authH.loginOut() : n.a.authH.toLogin()
						})).
						catch ((function(t) {
							c(e.url, B), console.log(t.message, "API " + T), "Request aborted" !== t.message && (a && a("数据请求失败，请重新进入页面或点击按钮"), o(t))
						})).
						finally((function() {
							n.a.freeAjaxHelper.reduce()
						}))
					}))
				}
		},
		6367: function(e, t, a) {
			"use strict";
			var i = a("2e8c"),
				T = (a("ac1f"), a("1276"), a("14d9"), a("d3b7"), a("159b"), a("8bbf")),
				n = a.n(T),
				o = a("6128"),
				s = {
					_varKey: "$EVN",
					formCallbacks: [],
					getMatterEd: !1,
					init: function() {
						window[this._varKey] || (window[this._varKey] = {})
					},
					add: function(e, t) {
						var a = {};
						for (var T in e) a[t + "_" + T] = e[T];
						this.deleteByDimension(t), window[this._varKey] = Object(i["a"])(Object(i["a"])({}, window[this._varKey]), a)
					},
					get: function(e) {
						var t = e.split(".");
						return t[0] !== this._varKey ? e : window[this._varKey] && window[this._varKey][t[1]] ? 3 == t.length ? window[this._varKey][t[1]][t[2]] : window[this._varKey][t[1]] : ""
					},
					delete: function(e) {
						window[this._varKey] && window[this._varKey][e] && delete window[this._varKey][e]
					},
					deleteByDimension: function(e) {
						for (var t in window[this._varKey]) t.split(0, 4) == e + "_" && this.delete(t)
					},
					getMatterEvn: function(e, t) {
						var a = this;
						this.getMatterEd ? t() : this.formCallbacks.push(t), 1 == this.formCallbacks.length && Object(o["a"])({
							url: "getMatterEvn",
							method: "get",
							data: {
								app_id: e.appId,
								inst_id: e.instId,
								task_id: e.taskId,
								sess_id: e.sessId
							}
						}, (function(e) {
							if (a.getMatterEd = !0, 0 == e.e) {
								var t = {};
								for (var i in e.d) t[e.d[i].key] = e.d[i].value;
								a.add(t, "matter")
							} else console.error("获取事项环境变量失败：" + e.m);
							a.formCallbacks.forEach((function(e) {
								e()
							})), a.formCallbacks = []
						}), (function() {
							a.getMatterEd = !0, a.formCallbacks.forEach((function(e) {
								e()
							})), a.formCallbacks = [], console.error("获取事项环境变量失败")
						}))
					},
					deleteAll: function() {
						this.getMatterEd = !1, this.formCallbacks = [], window[this._varKey] = {}
					},
					deleteOtherUrl: function() {
						var e = {};
						for (var t in window[this._varKey]) "url" === t.split("_")[0] && (e[t] = window[this._varKey][t]);
						this.getMatterEd = !1, this.formCallbacks = [], window[this._varKey] = e
					}
				};
			s.init(), n.a.prototype.evnHelper = s, t["a"] = s
		},
		6553: function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAhCAYAAADOHBvaAAAAAXNSR0IArs4c6QAAA2hJREFUWEfFV/9V2zAQ1tkDFCYoTFAhDdAwQZMJgAkKEzRMAEzQMEHpBIQBpJgJCBMUBpCu79Oz/GTFTuy07+G/Ekt33/2+zyRGPFrrKTP/FEK8EdHcGHM/Qrx1lcYIKqWWRPQ1kVk65y6qqlqP0YO7Y4FfiOhICPEuhPgEBcz85r0/raqqGgM+ClhrzTXYdbCa6EcCflxV1dtQ8MHAUsqjsixfoNg5Bw+XSqlzIkLO8SyNMaf4IaWUZVneMPPae3/VZdBgYKXUPHronDuMytL3zHxlrb3NaqGqDW1FowUMr4jo82q1espDppSK+f1tjJmm50qpioi+1Pk+LoriISvCB2PMLJVpgAFaFMWKiA6EEJUx5iRezEI6M8Y8pEqklJOyLB+T/J91FGGIRpRLgRvhWsHCWnuB39FbZn611qKqNx6t9UIIcQava+NR8ZC/TKMRU9QLHIuoKAqEPxQQFFlrAbDxpF7HQ+dciFpZlqsYDWvtPHREvNQliEplZgkPmPnZWiu3tUvMdX3n3RiDtIk0GtbawxZwmkdmviOi7ylIbKEdwAjrTe3dnbX2Mmmv6HWIWuNxYtWr9x59+CeCwJCoZBtw1usn6TRTSq3RMUKIe2PMeQBOBZj5GnlIWuTZez8ZOpUAIIRYW2snqZFKqVtEEcWHcAfg6C1msHNOYujX76bx/zZP0zPIOecWmGzZe/T+r7poT6jLWxxiInnvl7mCXQZgXHYtDCnlQZK+GSmlmoJIR+EugH3O0yUD4LhjN0bhPsp3VH3AQh1RakVs7v8NGPVFJz8S+OnjPE7cHzQk/iUNreLSWmPFfctXYRdAyjK99yB5rV4dOtWwbFDVDX1xzoE39TLGHpY5GzLV8rbtHSA9HmPQY0M1LBORcs4BfCvFzRlMPjJB5Hq93pdlZt4GorixJGoPcNgiZzVzDKtNCBHoT0aJNnhVx0p8isujWYs5Va3D14D3jdaMZbYYCowtiuKxpkLNAmoRgWxL4S9yh8oNXwhjWCaipbXGCgQlDiwkJxIbvDpZkSGmzLwgIoAHhtjFuzKWifsowEiT3pn5MudqnYS+DitIWfg+is82ltnRajASbGbatSZ7vyTq/QkvzxLgQSwTgEKIeR8j3chxV+/CgKIopkQ0AVfasfZAb/AN1SL8XTJ/AeQsyUN77KBDAAAAAElFTkSuQmCC"
		},
		"6a27": function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAvRJREFUaEPtWtFx2zAMBakB2k5QZ4I6EzTdwDrI320niD1B6gniTND8Wzy1E9SdIPEETTZwByDRg47yyYps0RdJllTyTyZN4eHhiSBIAYWWJMnIGHNNRFdCiHGxv4vPRPQohFhLKe/CMHzK2yjyD0qpWwCYdRHECTYtEXGejd8BjOP4oS+MVYFlRqMouuRxKcA4jpdCiOuqP/apn4juoiiaCau5P30y3tVWKeWFGCJ7mQOYRQY4GO0VmU2/rkopcqW8j+M8wD6ytrfQ+xDtOYVegyUEPgPAXkLbIskjAHh/yvtOYXAjpZwUs/VTXlbHWJt5/QCADy7zOQPktOfc4DJAp6SXrgCfEZHDozNNKcUyqQxXV4C/EfGqM+gAQCm1BoCPVTZ5gNZDnsGqUKm734eo9ajXoNeg9YBS6gsA3BDRFgAWURRxtrFrSZK8NcZw/5hrmIi4KOpytVpxLfYGALZBECzCMHw8pN1WNZgkydgY85AzZmszHwabtjiO74UQn3Nj5oi4PJKdbBHxXScAxnE8EUIkeWOMMZ+m0ykvxmkryTz2lh4bAd+PzZHva5vBkdaay+dvrBEvUrsSBheI+O0Qg0T0NwiCURiGuyg4G0B+MYep1prL/qyfZTExZw1qrbnAPLKV5xdHBDYS0t+llLPOaLDuRdxlvlZD1MWgusd4gNajPpOxjvC7ibo1VjWf16DX4H6MDF6DT4h4UaWLNvuVUnwqXVnpc10mOHW6PJY6tQmuZPdy8PXOADl/JKJ5fofQJqjsXXbPeOt6I8QZ4DEwVVVvpRRvg3hD3HqrBSAAfEXE+zLrzwmO7akFYHYnpQjw3OBqA8jHafmvrN37/XLVSZNxWwuD1sD0jhif/Gitky6Aq5PBJkl41dx1MvgqQ5r6838BkIurTsfBTXm5wXk3w7+Md8p5d4OebmTq9DolzzzEK5W7C7GZ65RSg9EiEf2MomiSroP52BgCk8W0cQ8gg7WZyEwIwbcq+vJ13RDRuuzI4B9hLCB/0zIaaQAAAABJRU5ErkJggg=="
		},
		"6aac": function(e, t, a) {},
		"755a": function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAm5JREFUaEPt2+FR2zAUB3A9aQFGoBMAG6QTFJ/1vTABYQM6QcMEpZ8jndIJygbABHQEFrBe73ER5xgay7Kki13lW2Jb0k9/y04sBVjnZYw5ttZeIeICAE672w/xPSI+AsA95/y2qqo/7TZC+43W+jtjbHmIiAFtWtV1fe32fwMqpR6mklgflhKVUp7Rfq9ApdQKAK76DpzSdkS8lVIuYTvmnqfUeN+2cs4/wRzTcx1AKRJwNmOvm+zr1VVrjb6RT3G/Apxiajs3+nKKTjzCMgYnHiArCZYED7wHyikaKyBE/CWEuKHymqa5AYAvscreV06WBBHxp5Tyot0QpdQdAHxNjUwO/AjnUDmQSYH7cLmQyYA+uBzIJMAhuNTI6MAQXEpkVOAYXCpkNGAMXApkFGBMXGzkaKAvzhhzRHMeBNjOIbz03eRj3CdHAQfgTq21vxljR1vUC+f8c1VVj6mRwcAROGfKggwC0hdnKeV5X+8bY7rJdQ8ZgtyEfEEPBVZSys0+oAduUJJKqXMAMH2d2t0eBGSMXdd1vfpXZQNw3kitNc1b0vzloFcQsD3/1q0tAOeF1FrTDNjxIB3ND4548HtX1/Vlu8IRuL1IrfUPxtjO70lf6BggQ8SNEOIbXe7X6/WCc05jxN0KfNvw7sIDABcA8ISIJ9baJQAsQgsbBQytNOdxBZizt1PUVRJM0as5yywJ5uztFHWVBFP0as4yS4I5eztFXf9FgvRc5CRF7x1AmU/zX4w3++WUdBrNcUnl24JYN0601rMZi+2nfjuL0ueQpEvOBbcDpA9pTDZN4x4TTOXqSo837oUQq+7fCv4CQSDQcP/cIYMAAAAASUVORK5CYII="
		},
		"77c7": function(e, t, a) {},
		"7ad9": function(e, t, a) {
			e.exports = a.p + "static/img/popular-services.9c61949f.png"
		},
		"7bd1": function(e, t, a) {
			e.exports = a.p + "static/img/search_nodata.caf682f3.png"
		},
		"81c0": function(e, t, a) {
			"use strict";
			a("1747")
		},
		"82f2": function(e, t, a) {
			"use strict";
			var i = function() {
				var e = this,
					t = e._self._c;
				return t("div", [t("div", {
					staticClass: "Right_nav"
				}, [t("ul", {
					staticClass: "nav_ul"
				}, [t("li", {
					on: {
						click: function(t) {
							return e.skipFun("index")
						}
					}
				}, [e._m(0)]), e._v(" "), t("li", {
					on: {
						click: function(t) {
							return e.skipFun("examine")
						}
					}
				}, [t("div", {
					staticClass: "nav_div"
				}, [t("div", {
					staticClass: "img2"
				}), e._v(" "), t("p", [e._v("我的审批")]), e._v(" "), e.data.my_todo > 0 ? t("div", {
					staticClass: "dian"
				}) : e._e()])]), e._v(" "), t("li", {
					on: {
						click: function(t) {
							return e.skipFun("apply")
						}
					}
				}, [e._m(1)]), e._v(" "), t("li", {
					on: {
						click: function(t) {
							return e.skipFun("fillForm")
						}
					}
				}, [e._m(2)]), e._v(" "), t("li", {
					on: {
						click: function(t) {
							return e.skipFun("report")
						}
					}
				}, [e._m(3)]), e._v(" "), t("li", [t("div", {
					staticClass: "nav_div",
					on: {
						click: function(t) {
							e.feedShow = !0
						}
					}
				}, [t("div", {
					staticClass: "img4"
				}), e._v(" "), t("p", [e._v("我要反馈")])])]), e._v(" "), t("li", {
					staticClass: "buaa_nav_li"
				}, [e.$authH.checkLogin() ? [t("div", {
					staticClass: "nav_div",
					on: {
						click: function(t) {
							return e.$authH.loginOut()
						}
					}
				}, [t("div", {
					staticClass: "img9"
				}), e._v(" "), t("p", [e._v("退出登录")])])] : [t("div", {
					staticClass: "nav_div",
					on: {
						click: function(t) {
							return e.$authH.toLogin()
						}
					}
				}, [t("div", {
					staticClass: "img9"
				}), e._v(" "), t("p", [e._v("我要登录")])]), e._v(" "), t("div", {
					staticClass: "buaa_login"
				}, [t("div", {
					staticClass: "inSchool",
					on: {
						click: function(t) {
							return e.buaaToLogin(1)
						}
					}
				}, [t("div", {
					staticClass: "inSchool_img"
				}), e._v(" "), t("span", [e._v("校内用户登录")])]), e._v(" "), t("div", {
					staticClass: "outSchool",
					on: {
						click: function(t) {
							return e.buaaToLogin(2)
						}
					}
				}, [t("div", {
					staticClass: "outSchool_img"
				}), e._v(" "), t("span", [e._v("校外用户登录")])])])]], 2)]), e._v(" "), e.imgCode && !e.mixZjMessageSet ? [t("el-popover", {
					attrs: {
						placement: "left",
						width: "150",
						trigger: "hover",
						"visible-arrow": !1
					}
				}, [t("img", {
					staticStyle: {
						width: "100%",
						height: "100%"
					},
					attrs: {
						src: e.imgCode,
						alt: ""
					}
				}), e._v(" "), t("div", {
					staticClass: "weixin",
					attrs: {
						slot: "reference"
					},
					slot: "reference"
				}, [t("div", {
					staticClass: "weixin_bg"
				}), e._v(" "), t("p", [e._v("关注微信公众号")])])])] : e._e()], 2), e._v(" "), e.feedShow ? t("feedback", {
					on: {
						cancel: e.cancel
					}
				}) : e._e()], 1)
			}, T = [
					function() {
						var e = this,
							t = e._self._c;
						return t("div", {
							staticClass: "nav_div"
						}, [t("div", {
							staticClass: "img7"
						}), e._v(" "), t("p", [e._v("我的主页")])])
					},
					function() {
						var e = this,
							t = e._self._c;
						return t("div", {
							staticClass: "nav_div"
						}, [t("div", {
							staticClass: "img3"
						}), e._v(" "), t("p", [e._v("我的申请")])])
					},
					function() {
						var e = this,
							t = e._self._c;
						return t("div", {
							staticClass: "nav_div"
						}, [t("div", {
							staticClass: "img15"
						}), e._v(" "), t("p", [e._v("填报统计")])])
					},
					function() {
						var e = this,
							t = e._self._c;
						return t("div", {
							staticClass: "nav_div"
						}, [t("div", {
							staticClass: "img8"
						}), e._v(" "), t("p", [e._v("数据中心")])])
					}
				],
				n = a("2e8c"),
				o = (a("4bf4"), a("14d9"), a("bfbc")),
				s = a("5961"),
				r = a("e48e"),
				Y = {
					data: function() {
						return {
							feedShow: !1,
							data: {}
						}
					},
					components: {
						feedback: o["a"]
					},
					mixins: [s["a"], r["a"]],
					props: ["imgCode"],
					created: function() {
						this.$authH.checkLogin() && this.getData()
					},
					methods: {
						cancel: function() {
							this.feedShow = !1
						},
						skipFun: function(e) {
							switch (e) {
								case "index":
									this.$router.push({
										path: "/homepage/index"
									});
									break;
								case "examine":
									this.$router.push({
										path: "/matter/todo",
										query: {
											page: "todo"
										}
									});
									break;
								case "apply":
									this.$router.push({
										path: "/matter/launch",
										query: {
											page: "launch"
										}
									});
									break;
								case "report":
									this.$router.push({
										path: "/report/index"
									});
									break;
								case "fillForm":
									this.$router.push({
										path: "/fillForm/report"
									});
									break
							}
						},
						getData: function() {
							var e = this;
							this.$appFetch({
								url: "getunreadData",
								method: "get"
							}, (function(t) {
								0 == t.e ? e.data = t.d : e.$message.error(t.m)
							}), (function(t) {
								e.$message.error({
									message: "数据请求失败，请重新进入页面或点击按钮"
								})
							}))
						},
						logout: function() {
							this.$router.push({
								path: "/site/login/cas-logout"
							})
						},
						buaaToLogin: function(e) {
							1 == e ? this.$authH.toLogin() : this.$router.push({
								path: "/site/login"
							})
						}
					}
				}, c = Object(n["a"])({}, Y),
				B = c,
				l = a("0b56"),
				P = Object(l["a"])(B, i, T, !1, null, null, null);
			t["a"] = P.exports
		},
		"8cf8": function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKklEQVQ4T62TP0vEMBjG32hi0aU49MsUrhroJ9CP4SwOt3iiHOgNBx64uDha/QxJpk6ZhDo7CFIOPEinDul7BK6gvXS5u4x58/zyvP8IbHnIlnrYLUAIcUIp/UySZO5zhohEKXXOOX9v4/8cSCkpIt5RSiddSJZl+1EUjay1j2mall6Au1xBRpTSaQvRWrOqqm6stdO/YvfeWwMHAYBx0zSzMAznxpgnQsiQc/7dTa23iCvIMyIeE0IufOJeBy6Q5/lhXddjAFgAwAvn/MtXWK8DrfWRMWbCGBsOBoOFUuoSEd98kDVAURQHZVk+MMaunbj9VUp5BQCvXchaGwHgNgiC+ziOf7uWhRCuxbMkSX765uA0CIIPn9gJEHFPKXXWO0ib7MVud2ETB0sVzYARdD2FXwAAAABJRU5ErkJggg=="
		},
		9098: function(e, t, a) {
			"use strict";
			var i = a("29b5"),
				T = a("2e8c"),
				n = (a("ac1f"), a("14d9"), a("99af"), a("d3b7"), a("159b"), a("00b4"), a("7db0"), a("5319"), a("8bbf")),
				o = a.n(n),
				s = a("8c4f"),
				r = a("8237"),
				Y = a.n(r),
				c = (a("6266"), s["a"].prototype.push),
				B = s["a"].prototype.replace;
			s["a"].prototype.push = function(e) {
				return c.call(this, e).
				catch ((function(e) {
					return e
				}))
			}, s["a"].prototype.replace = function(e) {
				return B.call(this, e).
				catch ((function(e) {
					return e
				}))
			};
			var l = o.a.appConfig,
				P = function(e) {
					this.Router = null, this.template = e.template ? e.template : null, this.cssInfo = e.cssInfo ? e.cssInfo : null, this.publicCss = e.publicCss ? e.publicCss : [], this.styleCss = e.styleCss ? e.styleCss : {}, this.publicJs = e.publicJs ? e.publicJs : [], this.needLogins = e.needLogins ? e.needLogins : [], this.notneedLogins = e.notneedLogins ? e.notneedLogins : [], this.scrollConfig = e.scrollConfig ? e.scrollConfig : null
				};
			P.prototype.checkConfig = function() {
				return !(!this.template || !this.checkTemplate()) || (console.error("template 模板配置错误！"), !1)
			}, P.prototype.checkTemplate = function() {
				var e = 0;
				for (var t in this.template) {
					var a = this.template[t];
					for (var i in a) {
						var T = a[i];
						if (!T.comLoad || "function" != typeof T.comLoad) return console.error(t + "模块， " + i + "页面，comLoad函数设置错误！"), !1;
						if (!T.metaInfo || !T.metaInfo.title) return console.error(t + "模块， " + i + "页面，metainfo设置错误！"), !1;
						e++
					}
				}
				return !!e || (console.error("最少应该有一个页面！"), !1)
			}, P.prototype.getBaseRouter = function(e) {
				if (this.Router) return this.Router;
				this.Router = new s["a"]({
					mode: "history",
					routes: e,
					base: l.routeBasePath,
					scrollBehavior: function(e, t, a) {
						return {
							x: 0,
							y: 0
						}
					}
				});
				var t = this;
				return this.Router.afterEach((function(e) {
					t.progressEnd(), o.a.StHelper.init()
				})), this.pcMobileDo(this.Router), this.loadMetaInfo(this.Router), this.loadOtherSource(this.Router), this.Router
			}, P.prototype.loadRouter = function() {
				if (!this.checkConfig()) return !1;
				var e = [],
					t = this.template,
					a = null;
				for (var i in t) {
					var n = t[i];
					for (var o in n) {
						var s = {
							name: o,
							path: "/" + i + "/" + o,
							component: n[o]["comLoad"],
							caseSensitive: !0,
							meta: n[o]["metaInfo"]
						};
						e.push(s), n[o]["metaInfo"].isIndexPage && (a = Object(T["a"])(Object(T["a"])({}, {}), s))
					}
				}
				return a.path = "*", e.push(a), this.getBaseRouter(e)
			}, P.prototype.getRequire = function(e) {
				return function(t, a) {
					return e("./" + t, a)
				}
			}, P.prototype.pcMobileDo = function(e) {
				var t = this;
				e.beforeEach((function(a, i, T) {
					if (t.pcToMobile(e, a, T)) return !1;
					t.setMobileRem(a), T()
				}))
			}, P.prototype.loadMetaInfo = function(e) {
				var t = this;
				e.beforeEach((function(e, a, i) {
					t.progressStart(), e.meta.title && o.a.appCommonH.getDocumentTitle(e.meta.title, e.path), e.meta.desc && (document.desc = e.meta.desc), i()
				}))
			}, P.prototype.sourceArrs = {}, P.prototype.loadAllNum = 0, P.prototype.sourceCallBack = null, P.prototype.loadOtherSource = function(e) {
				var t = this;
				e.beforeEach((function(e, a, T) {
					t.clearSource(e);
					var n = t.publicCss ? t.publicCss : [],
						o = t.publicJs ? t.publicJs : [],
						s = e.meta.css,
						r = e.meta.js,
						Y = {
							css: [].concat(Object(i["a"])(n), Object(i["a"])(s)),
							js: [].concat(Object(i["a"])(o), Object(i["a"])(r))
						};
					Y.css.length || Y.js.length ? (t.sourceArrs = Y, t.registerSource(e, T)) : (t.deleteSource(e), T())
				}))
			}, P.prototype.registerSource = function(e, t) {
				this.sourceCallBack = t, this.loadCssSource(e), this.loadJsSource(e), this.deleteSource(e)
			}, P.prototype.clearSource = function(e) {
				this.sourceArrs = [], this.loadAllNum = 0, this.sourceCallBack = null
			}, P.prototype.loadCssSource = function(e) {
				var t = this,
					a = e.path;
				this.sourceArrs.css.forEach((function(e) {
					var i = /^(http|https):\/\//.test(e) ? e : l.staticUrl + e,
						T = Y()(i);
					if (t.loadAllNum++, $('[data-id="' + T + '"]').length) $('[data-id="' + T + '"]').attr("page-path", a), setTimeout((function() {
						t.loadSourceSuccess()
					}), 200);
					else {
						var n = '<link source-type="other" page-path="' + a + '" data-id="' + T + '" href="' + i + "?v=" + l.sourceV + '" rel="stylesheet" type="text/css"/>';
						$("head").append(n), $('[data-id="' + T + '"]').on("load", (function() {
							t.loadSourceSuccess()
						}))
					}
				}))
			}, P.prototype.loadJsSource = function(e) {
				var t = this,
					a = e.path;
				this.sourceArrs.js.forEach((function(e) {
					var i = /^(http|https):\/\//.test(e) ? e : l.staticUrl + e,
						T = Y()(i);
					if (t.loadAllNum++, $('[data-id="' + T + '"]').length) $('[data-id="' + T + '"]').attr("page-path", a), setTimeout((function() {
						t.loadSourceSuccess()
					}), 200);
					else {
						var n = document.createElement("script");
						n.src = i + "?v=" + l.sourceV, n.setAttribute("data-id", T), n.type = "text/javascript", n.async = !1, n.setAttribute("data-path", e), n.setAttribute("source-type", "other"), n.setAttribute("page-path", a), n.onload = function() {
							t.loadSourceSuccess()
						}, document.getElementsByTagName("body")[0].appendChild(n)
					}
				}))
			}, P.prototype.deleteSource = function(e) {
				$('[source-type="other"]').length && $('[source-type="other"]').each((function(t, a) {
					$(a).attr("page-path") !== e.path && $(a).remove()
				}))
			}, P.prototype.loadSourceSuccess = function() {
				this.loadAllNum--, this.loadAllNum || this.sourceCallBack()
			}, P.prototype.beforeEnterModule = function(e) {}, P.prototype.progressSelector = "progress_loading", P.prototype.progressStart = function() {
				if (!$("#" + this.progressSelector).length) {
					var e = '<div id="' + this.progressSelector + '"><div></div></div>';
					$("body").append(e)
				}
				this.clearProgress(), window.location.hash && -1 !== window.location.hash.indexOf("module_") || $("#" + this.progressSelector).show(), this.progressNum = 0, this.progressChange(98, 3e3)
			}, P.prototype.progressEnd = function() {
				$(".frame-loader").length && $(".frame-loader").remove(), this.progressChange(100, 200)
			}, P.prototype.progressClearBar = null, P.prototype.progressNum = 0, P.prototype.progressChange = function(e, t) {
				var a = 20,
					i = (e - this.progressNum) / (t / a),
					T = this;
				clearInterval(T.progressClearBar), T.progressClearBar = setInterval((function() {
					if ($("#" + T.progressSelector).find("div").width(T.progressNum + "%"), T.progressNum >= e) return clearInterval(T.progressClearBar), T.progressNum >= 100 && ($("#" + T.progressSelector).hide(), T.clearProgress()), !1;
					T.progressNum += i
				}), a)
			}, P.prototype.clearProgress = function() {
				$("#" + this.progressSelector).find("div").width("0%")
			}, P.prototype.setClientClass = function(e) {
				e ? ($("body").hasClass("site_pc_common") && $("body").removeClass("site_pc_common"), $("body").hasClass("site_mobile_common") || $("body").addClass("site_mobile_common")) : ($("body").hasClass("site_mobile_common") && $("body").removeClass("site_mobile_common"), $("body").hasClass("site_pc_common") || $("body").addClass("site_pc_common"))
			}, P.prototype.pcToMobile = function(e, t, a) {
				var i = t.matched && t.matched.length && t.matched[0];
				if (!i) return !1;
				var T = window.innerWidth <= l.mobileMaxWidth,
					n = i.path,
					o = !! t.meta.isMobile,
					s = l.pcMobileChange;
				if (l.onlyClient()) {
					var r = "mobile" == l.onlyClient();
					T = r
				}
				if (T !== o) {
					var Y = o ? "mobilePath" : "pcPath",
						c = o ? "pcPath" : "mobilePath",
						B = !1;
					s.forEach((function(i) {
						if (i[Y] == n) {
							switch (i.type) {
								case 1:
									e.replace({
										path: i[c],
										query: t.query
									}), a && a();
									break;
								case 2:
									i.changeFunc(e, i[c], t, a);
									break
							}
							B = !0
						}
					}))
				}
				return B
			}, P.prototype.setMobileRem = function(e) {
				var t = e.matched && e.matched.length && e.matched[0];
				if (!t) return !1;
				window.removeEventListener("resize", this.changSize), this.setClientClass( !! e.meta.isMobile), e.meta.isMobile ? (this.changSize(e), window.addEventListener("resize", this.changSize, !1)) : document.documentElement.style.fontSize = ""
			}, P.prototype.changSize = function(e) {
				var t = document.documentElement.clientWidth;
				t = t <= l.mobileMaxWidth ? t : 480, t = t >= 320 ? t : 320, document.documentElement.style.fontSize = 100 * t / 375 + "px", t >= l.mobileMaxWidth && (document.body.style.width = t + "px")
			}, P.prototype.init = function() {
				var e = this.loadRouter();
				return this.beforeEnterModule(e), o.a.appRouter = o.a.prototype.appRouter = e, e
			}, t["a"] = P
		},
		"91b4": function(e, t, a) {
			"use strict";
			a("b0c0"), a("fb6a");
			var i = function() {
				var e = this,
					t = e._self._c;
				return t("div", {
					attrs: {
						id: "folder"
					},
					on: {
						click: function(t) {
							return t.target !== t.currentTarget ? null : e.clear.apply(null, arguments)
						}
					}
				}, [t("div", {
					staticClass: "container"
				}, [t("img", {
					staticClass: "folder_clear",
					attrs: {
						src: a("4d72"),
						alt: ""
					},
					on: {
						click: e.clear
					}
				}), e._v(" "), t("p", {
					staticClass: "folder_tit"
				}, [e._v(e._s(e.folderData.name))]), e._v(" "), t("div", {
					staticClass: "folder_detail",
					domProps: {
						innerHTML: e._s(e.folderData.detail)
					}
				}), e._v(" "), t("div", {
					staticClass: "folder_apps"
				}, [t("ul", {
					staticClass: "list"
				}, e._l(e.folderData.apps, (function(i, T) {
					return t("li", {
						key: T
					}, [t("a", {
						attrs: {
							href: "javascript:;"
						},
						on: {
							click: function(t) {
								return e.mixAllAppsJump(i)
							}
						}
					}, [t("img", {
						attrs: {
							src: i.logo_url,
							alt: ""
						}
					}), e._v(" "), t("div", {
						staticClass: "content"
					}, [t("p", {
						staticClass: "list_tit",
						attrs: {
							title: i.name
						}
					}, [t("span", [e._v(e._s(e._f("slicestr")(i.name)))]), e._v(" "), i.name.length > 10 ? t("span", [e._v(e._s(e._f("rowtowstr")(i.name)))]) : e._e()]), e._v(" "), 4 != i.type ? t("p", ["yes" == i.star_enable ? t("el-rate", {
						attrs: {
							disabled: "",
							"disabled-void-color": "#ccc"
						},
						model: {
							value: i.star,
							callback: function(t) {
								e.$set(i, "star", t)
							},
							expression: "item.star"
						}
					}) : e._e()], 1) : e._e(), e._v(" "), t("p", {
						attrs: {
							title: i.departName
						}
					}, [e._v("\n                " + e._s(i.departName) + "\n              ")]), e._v(" "), 0 == i.show_times ? [4 == i.type ? t("p") : t("p", [e._v("访问量：" + e._s(i.views) + "人")])] : [4 == i.type ? t("p") : t("p", [e._v("已办理: " + e._s(i.times) + "人")])]], 2), e._v(" "), 4 == i.type ? t("div", {
						staticClass: "icon"
					}, [t("img", {
						attrs: {
							src: a("1543"),
							alt: ""
						}
					})]) : t("div", {
						staticClass: "icon"
					}, [1 == i.type ? t("img", {
						attrs: {
							src: a("e2a8"),
							alt: ""
						}
					}) : 2 == i.type ? t("img", {
						attrs: {
							src: a("27ea"),
							alt: ""
						}
					}) : 3 == i.type ? t("img", {
						attrs: {
							src: a("1f64"),
							alt: ""
						}
					}) : e._e(), e._v(" "), t("span", [e._v(e._s("" == i.during_upper || null == i.during_upper ? "" : "截止 : " + i.during_upper.slice(0, 10)))])])])])
				})), 0)])])])
			}, T = [],
				n = a("2e8c"),
				o = {
					name: "folder",
					data: function() {
						return {
							value1: 1
						}
					},
					props: ["folderData"],
					created: function() {},
					filters: {
						slicestr: function(e) {
							return e.slice(0, 10)
						},
						rowtowstr: function(e) {
							return e.length > 20 ? e.slice(10, 19) + "..." : e.slice(10, 20)
						}
					},
					methods: {
						clear: function() {
							this.$emit("clearFolder", !1)
						},
						thirdAppToUrl: function(e) {
							var t = this;
							this.currThird = {}, this.$appFetch({
								url: "recentappssave",
								method: "post",
								data: {
									appId: e.id
								}
							}, (function(e) {
								0 == e.e || console.error(e.m)
							}), (function(e) {
								console.error(e)
							})).then((function() {
								t.$appFetch({
									url: "thirdClickNum",
									method: "get",
									data: {
										app_id: e.id
									}
								}, (function(e) {
									0 == e.e || t.$message.error(e.m)
								}), (function(e) {
									t.$message.error("数据请求失败，请重新进入页面或点击按钮")
								})).then((function() {
									var a = !(1 != e.jump_type || !(0 == e.terminal && e.url || 1 == e.terminal && e.url_pc));
									if (e.details_page && (a || 2 == e.jump_type))
										if (2 == e.jump_type) t.currThird = e, window.setTimeout((function() {
											t.$refs.miniProgramQrcode.show()
										}), 100);
										else {
											var i = 0 == e.terminal ? e.url : e.url_pc;
											window.open(i, "_blank")
										} else window.open(window.location.origin + "/v2/matter/detail?id=" + e.id, "_blank")
								}))
							}))
						}
					}
				}, s = (a("cd33"), Object(n["a"])({}, o)),
				r = s,
				Y = a("0b56"),
				c = Object(Y["a"])(r, i, T, !1, null, null, null);
			t["a"] = c.exports
		},
		9352: function(e, t, a) {},
		"9fec": function(e, t, a) {
			"use strict";
			a("d3b7"), a("159b");
			var i = a("341c"),
				T = a("e8d2"),
				n = a("2e8c"),
				o = a("8bbf"),
				s = a.n(o),
				r = (a("caad"), a("2532"), a("14d9"), {
					_varKey: "$STATISTICS",
					loaded: !1,
					init: function() {
						window[this._varKey] = [], this.loaded = !1, s.a.appRouter.app.$route.meta.loadedApis.length || this.pageLoaded()
					},
					add: function(e) {
						s.a.appRouter.app.$route.meta.loadedApis.length && (s.a.appRouter.app.$route.meta.loadedApis.includes(e) && !window[this._varKey].includes(e) && window[this._varKey].push(e), s.a.appRouter.app.$route.meta.loadedApis.length === window[this._varKey].length && this.pageLoaded())
					}
				}),
				Y = r,
				c = Object(n["a"])(Object(n["a"])({}, Y), {}, {
					pageLoaded: function() {
						if (this.loaded) return !1;
						this.loaded = !0
					}
				}),
				B = c;

			function l(e) {
				var t = e.actionType,
					a = e.time,
					i = e.dataKey,
					T = e.newData,
					n = e.cb;
				switch (t) {
					case "setTime":
						this.$getLastTime = this.$getLastTime ? this.$getLastTime : {}, this.$getLastTime[i] = a;
						break;
					case "setData":
						a == this.$getLastTime[i] && (this.$getLastTime[i] = a, this[i] = T, n && n());
						break
				}
			}
			var P = l,
				u = a("c5e1"),
				d = a.n(u),
				p = a("8c4f"),
				X = a("1b63");
			s.a.use(p["a"]), s.a.customHelper = s.a.prototype.$customHelper = i["a"], s.a.appCommonH = s.a.prototype.$appCommonH = T["a"], s.a.setLastData = s.a.prototype.$setLastData = P, s.a.StHelper = s.a.prototype.$StHelper = B, s.a.apiHelper = s.a.prototype.$apiHelper = X["a"], window.$ = window.jQuery = d.a, s.a.prototype.$selfloadingTime = 0, s.a.prototype.$selfloadingBar = 0, s.a.prototype.$selfloading = function(e, t, a) {
				var i = this;
				switch (e = e || "show", t = t || 500, e) {
					case "show":
						this.$selfloadingTime = 0, setTimeout((function() {
							0 == i.$selfloadingTime && (i.$selfloadingTime = (new Date).getTime(), i.$selfloadingBar = i.$loading({
								lock: !0
							}))
						}), t);
						break;
					case "hide":
						this.$selfloadingTime > 0 ? (this.$selfloadingTime = -1, setTimeout((function() {
							i.$selfloadingBar && i.$selfloadingBar.close && i.$selfloadingBar.close()
						}), 200)) : (this.$selfloadingTime = -1, this.$selfloadingBar && this.$selfloadingBar.close && this.$selfloadingBar.close());
						break
				}
			}, s.a.prototype.$safeData = function(e, t, a) {
				if ("&nbsp;" == e || !t && !a) return e;
				var i = e.split(""),
					T = "";
				return i.forEach((function(e, n) {
					var o = i.length - n;
					n++, T += n > t && o > a ? "*" : e
				})), T
			}
		},
		a3aa: function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAwpJREFUaEPtmv1xEzEQxfdVQDqAVEBSAVABUAGhgjgVECogqQBSAaQCoALsCkIHkAoe84zOI198E32sbnw31kz+yFi32p9W0n5IsF4j+czMzs3spZmd9H/f0/+XZvbDzK4B/I51RPwPyU9mtthTiFS1rgBcdJ03gCR/Tchij8EuAZyq0xqQ5FVYlo99OKXftVwXCHvubkqaZ+h6LMA5Wq+bg2sBzmnv9Y27FCAzTD65rgfAyZmsp/AYFrw1s29mJt+kiENuSRGSIqY34e9Jq4lsCSiwRT90GggNL83sXQvIVoDvAXzJUZjkmZl9zvkmpW8LwGy4TlGSWrJfUxRP7eMNeANAlihuJLVcPxQLaHjI3OvgAPC3VjmSSnme1spZB9uOjn4d3Hoo5bkfPQFPOzdQC0nyyMz+1MpxtSCAreS5VjmS8pnPa+V4WXAFwLW8QVIliBf7AvgTgGo4bo2kop/XtQK9LLgpEdQqFPnEvbKgNdiDqjIoXq1qXhaUEm8BaFlVN88yiifgLQCFWtXNs4ziCSiwVwC0d4pbsJ7KKPKF1c0bUL5LkMXhGsnvoapeDScB3oCSqTTpogSSpNKlqmC9PystADWGLKlDZ+ueYMgkITQTnMsejsdpBagxtExVc1UQPrhkSSqTVz+XPTeWBeNxPgJQjvegeed+u8ZoacFuvAOgy3E5IKTUgquwx1J0uxzyjSQVoO9cvjsEa49mp0+5gAI780psU2Yn7hPqqXJDyaC5gG5Zey5c1z9AKtJJajmA9wCaHOVJmkadSMrtJFXDcwDdk9pcsMiKybniATCaZfesvcKCyZe2ORaUPgqpijOFUqDedzoHkuuvuYBOOo4nJhfwxsySMoSGCKrTJF+15QC61z5LJyGnKJwDOHs3ocPluCRTL7XUQIqlQ0YlxaSgI8eCnnqOJusAONpUNxpIFnS5pmqkX63YlQBn/xhPjnO+zym1BmZqxf8PYqMca057cXMR1H+UPof9uPXa48HDgXC7o3REFa/k4k7tcVf5vYphyvL14n4rGfgH7BmijW/2drwAAAAASUVORK5CYII="
		},
		a4d9: function(e, t, a) {
			a("8bbf");
			e.exports = {
				webId: "buaa",
				envWebId: "buaa",
				login: "",
				logout: "/site/login/cas-logout",
				userKeyPrefix: "yzs",
				pageVersion: "1",
				version: "1.0",
				env: "product",
				sourceV: 1667070177111,
				customConfig: {
					isToPdf: {
						default: 2
					},
					toPdfHttp: "http://",
					isToInfoCenter: !1
				},
				onlyClient: function() {
					return !1
				}
			}
		},
		bfbc: function(e, t, a) {
			"use strict";
			a("b0c0"), a("fb6a");
			var i = function() {
				var e = this,
					t = e._self._c;
				return t("div", {
					staticClass: "feedback_box"
				}, [t("div", {
					staticClass: "bg",
					on: {
						click: e.cancelFun
					}
				}), e._v(" "), t("div", {
					staticClass: "feedback_pop"
				}, [t("div", {
					staticClass: "feedback_title"
				}, [t("p", [e._v("\n        我要反馈\n        "), t("span", {
					staticClass: "hint"
				}, [e._v(e._s(e.$t("system.feedbackHint")))])]), e._v(" "), t("img", {
					attrs: {
						src: a("8cf8"),
						alt: ""
					},
					on: {
						click: e.cancelFun
					}
				})]), e._v(" "), t("ul", {
					staticClass: "feedback_content"
				}, [t("li", [t("p", [e._v(e._s(e.$t("system.feedbackContact")))]), e._v(" "), t("div", [t("el-input", {
					attrs: {
						type: "text",
						placeholder: e.$t("system.feedbackContactP")
					},
					model: {
						value: e.relation,
						callback: function(t) {
							e.relation = t
						},
						expression: "relation"
					}
				})], 1)]), e._v(" "), t("li", [t("p", [e._v("反馈类型")]), e._v(" "), t("div", [t("el-radio-group", {
					on: {
						change: e.radioChang
					},
					model: {
						value: e.radio,
						callback: function(t) {
							e.radio = t
						},
						expression: "radio"
					}
				}, e._l(e.FeedbackTypeData, (function(a, i) {
					return t("el-radio", {
						key: i,
						attrs: {
							label: a.type,
							title: a.name
						}
					}, [e._v(e._s(a.name.length > 7 ? a.name.slice(0, 7) + "..." : a.name))])
				})), 1)], 1)]), e._v(" "), 1 == e.radio ? t("li", [t("p", [e._v("事项名称")]), e._v(" "), t("div", [t("el-select", {
					attrs: {
						filterable: "",
						placeholder: "请选择"
					},
					model: {
						value: e.radioVal,
						callback: function(t) {
							e.radioVal = t
						},
						expression: "radioVal"
					}
				}, e._l(e.salldata, (function(e) {
					return t("el-option", {
						key: e.id,
						attrs: {
							label: e.name,
							value: e.id
						}
					})
				})), 1)], 1)]) : t("li", [t("p", [e._v("功能简述")]), e._v(" "), t("div", [t("el-input", {
					attrs: {
						type: "text"
					},
					model: {
						value: e.title,
						callback: function(t) {
							e.title = t
						},
						expression: "title"
					}
				})], 1)]), e._v(" "), t("li", {
					staticClass: "new_li"
				}, [t("p", [e._v("意见描述")]), e._v(" "), t("div", [t("textarea", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.textContent,
						expression: "textContent"
					}],
					attrs: {
						maxlength: "255",
						placeholder: "您反馈问题的网址，问题描述"
					},
					domProps: {
						value: e.textContent
					},
					on: {
						input: function(t) {
							t.target.composing || (e.textContent = t.target.value)
						}
					}
				})])])]), e._v(" "), t("div", {
					staticClass: "feedback_bottom"
				}, [t("zlButton", {
					attrs: {
						type: "line"
					},
					on: {
						click: e.cancelFun
					}
				}, [e._v("取消")]), e._v(" "), t("zlButton", {
					on: {
						click: e.confirm
					}
				}, [e._v("确定")])], 1)])])
			}, T = [],
				n = a("2e8c"),
				o = (a("1928"), {
					data: function() {
						return {
							radio: 1,
							relation: "",
							radioVal: "",
							textContent: "",
							salldata: [],
							title: "",
							FeedbackTypeData: []
						}
					},
					created: function() {
						this.getsall(), this.getFeedbackType()
					},
					methods: {
						radioChang: function(e) {
							1 == e ? this.title = "" : this.radioVal = ""
						},
						getFeedbackType: function() {
							var e = this;
							this.$appFetch({
								url: "sfeedbacktypelist",
								method: "get"
							}, (function(t) {
								0 == t.e ? e.FeedbackTypeData = t.d : e.$message.error(t.m)
							}), (function(t) {
								e.$message.error("数据请求失败，请重新进入页面或点击按钮")
							}))
						},
						getsall: function() {
							var e = this;
							this.$appFetch({
								url: "getappsall",
								method: "get"
							}, (function(t) {
								0 == t.e ? e.salldata = t.d : e.$message.error(t.m)
							}), (function(t) {
								e.$message.error("数据请求失败，请重新进入页面或点击按钮")
							}))
						},
						confirm: function() {
							var e = this;
							if (1 == this.radio) {
								if ("" == this.radioVal) return this.$message.error("请选择事项名称")
							} else if ("" == this.title) return this.$message.error("功能简述");
							if ("" == this.textContent) return this.$message.error("请填写意见描述");
							this.$appFetch({
								url: "addfeedback",
								method: "post",
								data: {
									type: this.radio,
									apps_id: this.radioVal,
									contact: this.relation,
									title: this.title,
									content: this.textContent
								}
							}, (function(t) {
								0 == t.e ? (e.$message.success(t.m), e.$emit("cancel")) : e.$message.error(t.m)
							}), (function(t) {
								e.$message.error("数据请求失败，请重新进入页面或点击按钮")
							}))
						},
						cancelFun: function() {
							this.$emit("cancel")
						}
					}
				}),
				s = Object(n["a"])({}, o),
				r = s,
				Y = a("0b56"),
				c = Object(Y["a"])(r, i, T, !1, null, null, null);
			t["a"] = c.exports
		},
		c25c: function(e, t, a) {
			"use strict";
			a("b0c0");
			var i = function() {
				var e = this,
					t = e._self._c;
				return t("el-dialog", {
					attrs: {
						title: e.data.name,
						visible: e.dialogTableVisible,
						width: "300px",
						center: "",
						"custom-class": "miniProgramQrcode",
						"lock-scroll": !1,
						"append-to-body": !0
					},
					on: {
						"update:visible": function(t) {
							e.dialogTableVisible = t
						}
					}
				}, [t("img", {
					attrs: {
						src: e.siteConfig.imghost + "/" + e.data.qrcode,
						alt: ""
					}
				}), e._v(" "), t("p", {
					staticClass: "p_tip"
				}, [e._v("请使用微信扫码")]), e._v(" "), t("a", {
					staticClass: "close",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: e.clear
					}
				}, [e._v("关闭")])])
			}, T = [],
				n = a("2e8c"),
				o = {
					data: function() {
						return {
							dialogTableVisible: !1
						}
					},
					props: ["data"],
					methods: {
						show: function() {
							this.dialogTableVisible = !0
						},
						clear: function() {
							this.dialogTableVisible = !1
						}
					}
				}, s = (a("cdcb"), Object(n["a"])({}, o)),
				r = s,
				Y = a("0b56"),
				c = Object(Y["a"])(r, i, T, !1, null, null, null);
			t["a"] = c.exports
		},
		c6b5: function(e, t, a) {},
		ca6d: function(e, t, a) {},
		cd33: function(e, t, a) {},
		cdcb: function(e, t, a) {},
		cec0: function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAntJREFUaEPtm+tVAkEMhXMr0BKkAqUDrECtQK1ArEToADvQCrQDoQLtQKkgnouznGV57Dz2kV2cf5zNQr7JJJPMBEhhqOqZiDyIyEhELorPjX6ei8i7iEwBfOV1RP6Dqj6JyNgohK9aEwCPmfAaUFU/OmSxMtg5gCGFVoCqOnHLsuzFLj3nch3D+dxnlzQP0HVAwD5aL5uDKQH75HtF484JqAEm75zoP2DnTFZQ2KIFl0w2AMxchGcQvIqdaGuAhBsBYOq1Hqo6E5HbGEhLgDvhMqhYSEuAtNolgJ99loqBtARILh/IlxCftAZYCqmqpyLy7euPbQKuoqWIMEqeFBQ+aElVJSBBS0dbgOuAoqosqlmsekE6eaaXXqMNwK1o6QvpludbSN3aNODeraAM0pkrCI7vNAl4cJ+jMiWQFAk+I2oKsBQut6Hv80kvnysKNQHoDVcHZN2AwXA5SB5b0ueSRp2AKXDc44IDyq6ZqAvQBFxdUdQMXB2ApuCqBjQHVyWgSbiqAM3CVQFoGi4V0DxcKuCwePrlk3LElDw+37tPJnajXwAIzuybhkux4OruLWRm24BLAQxanm3BxQIuAXgd+LgitrLEOWTFZLIxPvgM4M7nx9q0XArgDQAevh4cFuCiliiAjdaTXZRW4GIAXwFcH4DiNRefsxr39tOy1ZDyPNQH73lvl/2gu7/LQ6XoUsu7oYADZxne1dFSbPsyPUIBebVlYun5zmoooO/3mpH7BzRjikhFjsKCvGw8j5wg668tjqIZj3tZf9spXUnTx5bKv4bYXNrVJ19c58zFpvQ+WHLjOGWr9HEJNM9bWBF0JbouXKcGO+43/lbwC52cvI0OwZxSAAAAAElFTkSuQmCC"
		},
		cf8e: function(e, t, a) {},
		db08: function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAjpJREFUaEPtm+tRwzAQhPc6oASoAOgAKgAqACoAOoAKgAoIFUAqgA4IFUAJdLDMgp1JRBLLsqSxje5PJmNZp+9W54dONjhGchvABYADAHvu8Z7+nwF4BXBvZp+LY7TFPyRvAVz2FMJ3WHdmdlU3ngOSfBuQYk2wMzPbV6MfQJJ31bRsOnFIxzVdL63KuY8hjbzFWHcEOEb16hjcC3BMueeKOxMgW0g+uKYFcHCSOQMuChYFex6BMkV7LlDj8IqCjSHqeYOiYESBpgCuq/70exSx77Vd5VLw0czOnNWDCYDT1JA5AP/A1VAkk0OmBlwLlwsyJWAjXA7IVIDecKkhUwC2hksJGRswGC4VZEzAznApIGMBRoOLDRkD0AuO5NbC4rIWZb+abvIx7pNdAX3hVMR5ASBImeAOzUxFk43WFbILYChcDZQFMhRwambHHtF3lXNPaQP5HPKAHgp4YmZyuNZINsG1UpKkAvrUFFT3eCjglZmpprHSWsB5Q5JU3VL1y1YWCjivv7neAuC8IEmqAqbqcysLBZSTiZmdL3rrALcRkuQDgKX3SV/KLoDyoTy80eWepGr6ypH6VuA7hlUXHsG8A9itSurqO8i6AgY5zXlSAcwZ7RS+ioIpopqzz6Jgzmin8FUUTBHVnH0WBXNGO4Wvf6Gg1kX0UDtGe5eCo9+Mp5fI8W6n1LwcqYq/G2LrxCM5plycr/q5m9LHkI8/ytXCLQFW01U5qQZaJhjK1VXLG/qsQDvulz4r+Abjm32NeEQSeAAAAABJRU5ErkJggg=="
		},
		e003: function(e, t, a) {},
		e2a8: function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5MjFhNWYwNC00YWMyLTQ4YTYtYWNiZi05NTRiOWRhNmQxMzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjE1M0JFN0FFNTUwMTFFOEI4N0VDN0FGODM0OTFFMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjE1M0JFNzlFNTUwMTFFOEI4N0VDN0FGODM0OTFFMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MjFhNWYwNC00YWMyLTQ4YTYtYWNiZi05NTRiOWRhNmQxMzYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiZDZmMDMzZS0yZGJhLTExN2MtYTQyZC1iNjUwN2U3ZDc5NWEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Dp6kaAAAEzUlEQVR42sSXXWhcRRTH725usvlOTNuENmubohHUCiFSqxtoJa99UOmTKChUbJG+pFZLEasokthqfBE/igpCggrio09+UEsQIoZA9CmNUtPUPGzzvdlsks36+9/MhGm4dxP1oQOHO3O+z5kzZ+bGCoWCdztG3LtNw+/u7vbi8bi3srLitbS0eKlUyuvr6/Oam5u9xcXF9oWFhV7obfAWjKN5Mw8bMfGsra0NV1VVna6pqRnK5/Phhq1AaWlpIZ1OnxoYGKgrLy9/a25uTs58Be3u/7AdR7LZ7BcYbUM2G2X4NaAzFov9lslkjk1NTTXh6Z0I9oPbAVjeX4HPUfQ4uM5iViUD376lpaU9LMdCDcP0uiJaXV09LAFSpPmJkpKSo+CXxCQ6tEtk4hLL33Gq03EoyvgaW1QaWVwwzElxZWXljyie0J5g9BOETkKvshEAz7J3x0j/i1sZNc6WAHnpDgOl2idCr7q6ugvETtKdwoE3MSJjN8DVGkWP5HK5r60j2xhXgb8iq1o6KSxvZmbmAMr7mX9vUqtqP4kDF1jvFx+4raostu5X7E/gZea5MCYF5buLkHEZ44dIf7KwXtqFqGhN5ctoDJnrFmeDcL/ucfJsNCLKCe21iVro6+Yb0JQhez6ph6AHWLpVLL5gL33fCzvL8TDPxZxMJoMKt44IJzBDx6TXwJ4gAkM3taGa8RoaGgKHwvpAPCz/iqK+vt4rKyvbXEgNwEtEMIwyFWOX5sIZ2sY5TiQSXkVFRdQWBoat5mm33JU+6z1QReWfAYaYq9h2ORnaJZxo4hGvu13FqtpSHwTSCKmpDLGPOb4JlD3N9yyKWosdJej7+FyE/jwyb/PtI/Wq6gTQLhbT43cDI7Genp4VvPZdJaT6PYTeIOqfUPKALZztDlOAI+g5jPx51l1OK9V3XBr//hdN4X8Np8h2x1k8ilE1/kPAw6xTFMa51tbWmbq6uoNE/hyMo3bviyk19FHJUJwHGxsbZ8jWOXApdD/E/FXDnlWK/zBwixIVF98cKfuUW+ZL0vYCpFOkbW+YYehqj+9TUB8gkzEXj2e618+Gbadlj9w8NQmlX5WJkgxRXATamZ8Fn3aOTlo40cQjXsmoLnQs3SPGuMPG5kcZnp2d9ZaXlwOvrQOMmyi8gMJ+1mdMpO/wmbBHR7ySIUuei4t6gbgpCwTHx8cDAa2lwKTNOjGh5qG1ycgtdMlwy210wS0NKz225CXgFFPS9PKCPS5WmdNkNm4n9Xbb520zcegbL5DAwzCvMHxE1yLT/cZoYXPqNskFhpGx1+Jll8/ZsnXDiiykpybAfwjcu93zaZ1QG5UsAd0nHCfkfFNT0y/MRyYnJ3UHxPwi53Mv+Lu29Ub2/W8x8pmeRXqpGHQzcJS9fwLacZ7JSv+oueFW/SIdS2chv9XTVnSO3rtMf2C+Q4aNzgxZ/AhIaiupcj0mkubqrPWL3CArekxsFa2M8Op8he/9LJ9xAinH0GMYemp+fv4E3XASB7/B6AFS/Z2vezNC4Q3O8TUY79nGU1bv7E43C+BuEukV5ldov9emp6encPBjseNMwa+trfUiWmAWT5/kPPaipM251qIeeSWGR8+uYaI6LYL+SDo6OroHBwe9sbExHbHg+faPAAMAMHPigAj+7twAAAAASUVORK5CYII="
		},
		e425: function(e, t) {
			e.exports = "03F00Y02V02T03802B02X03802T01D00Y01M00Y01B03702X03802T01B02V02T03802N02R03303202U02X02V00Y01800Y02V02T03801W02T03402P03603802602T03B03700Y01M00Y01B03702X03802T01B02S02T03402P03603803102T03203801B02P03903802W01903803602T02T00Y01800Y02V02T03801W02T03402P03603802602T03B00Y01M00Y01B03703D03703802T03101B02S02T03402P03603803102T03203801B02P03903802W01903803602T02T00Y01800Y02P03003002203302Q00Y01M00Y01B03702X03802T01B02Y03302Q01B02P03003000Y01800Y02P03003002C02T02P03100Y01M00Y01B03702X03802T01B03903702T03601B03802T02P03100Y01800Y02V02T03802D03702T03602Q02T02U03303602T00Y01M00Y01B03702X03802T01B03903702T03601B03702T02P03602R02W01903903702T03600Y01800Y02V02T03802D03702T03600Y01M00Y01B03703D03703802T03101B03903702T03601B03702T02P03602R02W01903903702T03600Y01800Y02S02P03802P02R02T03203802T03600Y01M00Y01B03703D03703802T03101B02S02T03402P03603803102T03203801B02P03903802W01903803602T02T01R02P03903802W01P02S02P03802P02R02T03203802T03600Y01800Y02V02T03802502P03803802T03600Y01M00Y01B03703D03703802T03101B02P03403401B03702T02P03602R02W00Y01800Y02P03003001W02T03402P03603803102T03203800Y01M00Y01B02P03402X01B03903702T03601B02S02T03402P03603803A00Y01800Y03703D03702P03403403702S02T03402P03603800Y01M00Y01B03703D03703802T03101B02P03403401B03702T02P03602R02W00Y01800Y02V02T03802B03D03703802T03102E02P03600Y01M00Y01B03703D03703802T03101B02Q03403103201B03903702T03601903A02P03602X02P02Q03002T03700Y01800Y03102T03703702P02V02T01V03303903203800Y01M00Y01B03702X03802T01B03102T03703702P02V02T01B02R03303903203800Y01800Y03002P03E03D01T03903802W02C03602T02T00Y01M00Y01B03702X03802T01B02S02T03402P03603803102T03203801B03002P03E03D01902P03903802W01903803602T02T00Y01800Y03702W03303B02503302S02T03003700Y01M00Y01B03702X03802T01B03403603302R02T03703701B03702W03303B01903103302S02T03003700Y01800Y02V02T03802502P03802T03602X02P03001V03002P03703702X02U03D00Y01M00Y01B03703D03703802T03101B03102P03802T03602X02P03001902R03002P03703702X02U02X02R02P03802X03303201B02X03202S02T03C00Y01800Y02V02T03802502P03802T03602X02P03000Y01M00Y01B03703D03703802T03101B03102P03802T03602X02P03001903402X02R03803903602T01B02X03202S02T03C00Y01800Y03A02X03702X03803702402X03703800Y01M00Y01B02P03402X01B03A02X03702X03803701B03002X03703800Y01800Y02V02T03801Z03602P03203802502T02402X03703803700Y01M00Y01B03702X03802T01B02V03602P03203801902P02R02R03303903203801B02V03602P03203801903102T00Y01800Y02P03403403702A02T03403303603800Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B03002X03703803700Y01800Y02P03003001Z03602P02S02T00Y01M00Y01B02P03402X01B03903702T03601B02V03602P02S02T00Y01800Y03202T03B01Z02T03802B02T03803802X03202V00Y01M00Y01B03702X03802T01B03203303802X02R02T01B03402T03603703303202P03001903702T03803802X03202V00Y01800Y03703902Q02603303802X02R02T00Y01M00Y01B03702X03802T01B03203303802X02R02T01B03702P03A02T00Y01800Y03702T02P03001V02W02T02R02Z02803B02S00Y01M00Y01B03702X03802T01B03702T02P03001B03702T02P03001902R02W02T02R02Z01903402P03703703B03303602S00Y01800Y03702T02P03001V02W02T02R02Z02503302S02X03002T00Y01M00Y01B03702X03802T01B03702T02P03001B03702T02P03001902R02W02T02R02Z01903103302Q02X03002T00Y01800Y03702T02P03001V02W02T02R02Z02C03302Z02T03200Y01M00Y01B03702X03802T01B03702T02P03001B02V02T03801903703B02T02T03401902R03302S02T01903803302Z02T03200Y01800Y03702T03802B02T02P03001V02W02T02R02Z00Y01M00Y01B03702X03802T01B03702T02P03001B03702T03801903702T02P03001903203303801903A02P03002X02S02P03802T00Y01800Y02R01W03303B03203003302P02S02801W01Y00Y01M00Y01B03702X03802T01B02S03303B03203003302P02S01B03402S02U00Y01800Y02R01W03303B03202403302P02S02B03802P03803903700Y01M00Y01B03702X03802T01B02S03303B03203003302P02S01B03703802P03803903700Y01800Y02V02T03802C03302802S02U02B03802P03803903700Y01M00Y01B03402S02U01903702T03603A02T03601B03703802P03803903700Y01800Y02V02T03802102S02T03203802X03803D03700Y01M00Y01B03702X03802T01B03903702T03601B02V02T03801902X02S02T03203802X03803D03700Y01800Y03702T03802102S02T03203802X03803D00Y01M00Y01B03702X03802T01B03903702T03601B03702T03801902X02S02T03203802X03803D00Y01800Y03702T03802D03202Q02X03202S00Y01M00Y01B03702X03802T01B03903702T03601B03903202Q02X03202S01903B02T02R02W02P03800Y01800Y02R02W02P03202V02T02D03702T03602403302V02X03200Y01M00Y01B03702X03802T01B02V03602P03203801902P02R02R03303903203801B02R02W02P03202V02T01903003302V02X03201903903702T03600Y01800Y02P03003002B02T02P03602R02W00Y01M00Y01B02P03402X01B02W03303102T01B02P03003001903702T02P03602R02W00Y01800Y03702T02P03602R02W02F03303602S03700Y01M00Y01B02P03402X01B02W03303102T01B02V02T03801902W03303801902Z02T03D03B03303602S00Y01800Y03702T03802B02T02P03602R02W02B02T03603A02X02R02T00Y01M00Y01B02P03402X01B02W03303102T01B03702T02P03602R02W01903702T03603A02X02R02T00Y01800Y02R02P03802T02V03303603D03702P03A02T00Y01M00Y01B03703D03703802T03101B03102T03703702P02V02T01B03203303802X02U03D01902R02P03802T02V03303603D01903702P03A02T00Y01800Y02R02P03802T02V03303603D02S02T03002T03802T00Y01M00Y01B03703D03703802T03101B03102T03703702P02V02T01B03203303802X02U03D01902R02P03802T02V03303603D01902S02T03002T03802T00Y01800Y02Z02T03D03B03303602S02B03802P03803903700Y01M00Y01B03703D03703802T03101B02W03303801902Z02T03D03B03303602S01B03703802P03803903700Y01800Y02Z02T03D03B03303602S03702P03A02T00Y01M00Y01B03703D03703802T03101B02W03303801902Z02T03D03B03303602S01B03702P03A02T00Y01800Y03703D03703802T03102C03602T02T00Y01M00Y01B03703D03703802T03101B02S02T03402P03603803102T03203801B03703D03703802T03101902P03903802W01903803602T02T00Y01800Y02V02T03802P03403403702P03003000Y01M00Y01B03702X03802T01B02P03403403701B02V02T03801902P03403403701902P03003000Y01800Y02P02S02S02U02T02T02S02Q02P02R02Z00Y01M00Y01B03702X03802T01B02U02T02T02S02Q02P02R02Z01B02P02S02S01902U02T02T02S02Q02P02R02Z00Y01800Y03702U02T02T02S02Q02P02R02Z03803D03402T03002X03703800Y01M00Y01B03702X03802T01B02U02T02T02S02Q02P02R02Z01B03803D03402T01903002X03703800Y01800Y02V02T03803903203602T02P02S01W02P03802P00Y01M00Y01B03702X03802T01B03903702T03601B02V02T03801903903203602T02P02S01902S02P03802P00Y01800Y02V02T03802D03702T03602F02T02Q02B02W03303B00Y01M00Y01B03702X03802T01B03903702T03601B03B02T02Q01903702W03303B00Y01800Y02V02T03801W03303B03203003302P02S01Y02X03002T02D03603000Y01M00Y01B03702X03802T01B02S03303B03203003302P02S01B02U02X03002T01903903603000Y01800Y02V02T03801W03003302P02S02503403603302V03602P03102D03603000Y01M00Y01B03702X03802T01B02P03803802P02R02W01B02V02T03801903102X03202X01903403603302V03602P03101903903603000Y01800Y02V02T03801W02T03402P03603801T02S02S00Y01M00Y01B03703D03703802T03101B02W03303102T01B02V02T03801902P02S02S01902S02T03402P03603800Y01800Y02V02T03802A02T03002P03802X03A02T00Y01M00Y01B03702X03802T01B03903702T03601B03602T03002P03802X03A02T00Y01800Y02V02T03802A02T03002P03802X03A02T02A03303002T00Y01M00Y01B03702X03802T01B02U02X03003003602T03403303603801B03602T03002P03802X03A02T00Y01800Y02R02003303102T01Z02T03801U02P03203202T03603700Y01M00Y01B02P03402X01B02W03303102T01B02V02T03801902Q02P03203202T03603700Y01800Y02R02003303102T01Z02T03802402X03202Z03700Y01M00Y01B02P03402X01B02W03303102T01B02V02T03801903002X03202Z03700Y01800Y02V02T03802D03702T03602402X03703800Y01M00Y01B03702X03802T01B03903702T03601B02P02V02T03203801903702T02P03602R02W01903903702T03600Y01800Y02Z02T03D03B03303602S03702W03303800Y01M00Y01B02P03402X01B02P03403403701B02Z02T03D03B03303602S03701902W03303800Y01800Y02V02T03802503D02C03302S03300Y01M00Y01B03702X03802T01B03103D01903802P03702Z01B03803302S03300Y01800Y03103D02B03802P03603802T02S00Y01M00Y01B03702X03802T01B03403603302R02T03703701B02X03203703801903002X03703800Y01800Y03003302V02X03200Y01M00Y01B03702X03802T01B03003302V02X03201B03003302V02X03200Y01800Y03003302V02X03201V03302S02T00Y01M00Y01B03702X03802T01B03003302V02X03201B02R03302S02T00Y01800Y03702R02P03202403302V02X03200Y01M00Y01B02P03402X01B03003302V02X03201B02R03003303902S01903702R02W03303303001903702R02P03200Y01800Y03003302V03303903800Y01M00Y01B03702X03802T01B03003302V02X03201B03003302V03303903800Y01800Y01Z02T03802702P03903802W01V03302S02T00Y01M00Y01B03303402T03201B02R03303203202T02R03802X03303201B02V02T03801902R03302S02T00Y01800Y02Q02P03203202T03603700Y01M00Y01B02P03402X01B02W03303102T01B02V02T03801902Q02P03203202T03603700Y01800Y02V02T03802602T03B01T03403403700Y01M00Y01B02P03402X01B02W03303102T01B03202T03B01902P03403403700Y01800Y02V02T03802502T03703702P02V02T02402X03703803700Y01M00Y01B03702X03802T01B03102T03703702P02V02T01B03002X03703803700Y01800Y02P02S02S02503D01T03403403700Y01M00Y01B03702X03802T01B03903702T03601B02P02S02S01903103D01902P03403403700Y01800Y03702X03803102T03703702P02V02T03602T02P02S00Y01M00Y01B03702X03802T01B03102T03703702P02V02T01B03602T02P02S00Y01800Y03802W02X03602S01V03002X02R02Z02603903100Y01M00Y01B03702X03802T01B02P03403403701B02R03002X02R02Z01903203903100Y01800Y02P03403402B02T02P03602R02W00Y01M00Y01B02P03402X01B02W03303102T01B02P03403401903702T02P03602R02W00Y01800Y03403602X03203802T03602002T03003402400Y01M00Y01B02P03402X01B02P03403403701B03403602X03203802T03601902W02T03003400Y01800Y03203303802X02U02X02R02P03802X03303202S02T03802P02X03000Y01M00Y01B03702X03802T01B03203303802X02U02X02R02P03802X03303201B02S02T03802P02X03000Y01800Y03203303802X02U02X02R02P03802X03303202X02S00Y01M00Y01B03702X03802T01B03203303802X02U02X02R02P03802X03303201B03803D03402T01902X03202S02T03C00Y01800Y02V02T03802B02T03603A02X02R02T02103202U03303603102P03802X03303200Y01M00Y01B02P03402X01B02W03303102T01B03702T03603A02X02R02T01902X03202U03303603102P03802X03303200Y01800Y02B02B01W02T03402P03601V03303903203800Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B02S02T03402P03603803102T03203801902R03303903203800Y01800Y02B02B02B02T03603A02X02R02T01V03303903203800Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B03702T03603A02X02R02T01902R03303903203800Y01800Y03602T02R02T03203802P03403403703702P03A02T00Y01M00Y01B03702X03802T01B02P03403403701B03602T02R02T03203801902P03403403701903702P03A02T00Y01800Y03702X03802T02402P03703801T03403403700Y01M00Y01B03702X03802T01B02P03403403701B03002P03703801902P03403403700Y01800Y03002P03903202R02W01T03803302S03301V00Y01M00Y01B03702X03802T01B03903702T03601B03002P03903202R02W01902P03202S01903803302S03301902R03303903203800Y01800Y03702X03802T01T03003002402X03703800Y01M00Y01B03702X03802T01B02P03403403701B03002X03703800Y01800Y03703D03703802T03101T03403401T03003002402X03703800Y01M00Y01B03703D03703802T03101B02P03403401B03002X03703800Y01800Y02V02T03801T03403401W02T03802P02X03000Y01M00Y01B02P03402X01B02P03403403701B02S02T03802P02X03000Y01800Y03103D01T03403403700Y01M00Y01B03702X03802T01B03903702T03601B03103D01902P03403403700Y01800Y02V02T03802803603302R02T03703702103202U03302602T03B00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03703802P03603801902X03202U03300Y01800Y03702X03803102T03703702P02V02T03002X03703800Y01M00Y01B03702X03802T01B03102T03703702P02V02T01B03002X03703803700Y01800Y03702X03803102T03703702P02V02T02S02T03000Y01M00Y01B03702X03802T01B03102T03703702P02V02T01B02S02T03002T03802T00Y01800Y03702T02P03001V03303202U02X02V00Y01M00Y01B03702X03802T01B03702T02P03001B03702T02P03001902R03303202U02X02V00Y01800Y03702T02P03002B02T03802803B02S00Y01M00Y01B03702X03802T01B03702T02P03001B03702T03801903702T02P03001903402P03703703B03303602S00Y01800Y03702T02P03002D03702T03602103202U03300Y01M00Y01B03702X03802T01B03702T02P03001B03903702T03601902X03202U03300Y01800Y03702T02P03002103202U03300Y01M00Y01B03702X03802T01B03702T02P03001B02V02T03801903402T03603703303202P03001903702T02P03000Y01800Y02P02S02S02B02T02P03000Y01M00Y01B03702X03802T01B03702T02P03001B02P02S02S01903702T02P03000Y01800Y03402T03603703303202702U02U02X02R02X02P03002B02T02P03002402X03703803202T03B00Y01M00Y01B03702X03802T01B03702T02P03001B03103D01903302U02U02X02R02T01903702T02P03000Y01800Y03702T02P03002D03402S02P03802T02B02T02P03000Y01M00Y01B03702X03802T01B03702T02P03001B03903402S02P03802T01903702T02P03000Y01800Y03702T02P03001V02W02P03202V02T02103102P02V02T03202T03B00Y01M00Y01B03702X03802T01B03702T02P03001B03702T03801903402T03603703303202P03001903702T02P03000Y01800Y03702X02V03202103202U03300Y01M00Y01B03702X03802T01B03702T02P03001B03702X02V03201902X03202U03300Y01800Y03702T02P03002002X03703803303603D00Y01M00Y01B03702X03802T01B03702T02P03001B03702T02P03001902W02X03703803303603D00Y01800Y03702X02V03201V02W02P03202V02T02103102P02V02T00Y01M00Y01B03702X03802T01B03702T02P03001B02R02W02P03202V02T01903702X02V03201902X03102P02V02T00Y01800Y02P02S02S02B02X02V03200Y01M00Y01B03702X03802T01B03702T02P03001B02P02S02S01903702X02V03200Y01800Y02V02T03802V03602P03203803002X03703803700Y01M00Y01B03702X03802T01B02V03602P03203801902P02R02R03303903203801B03002X03703803700Y01800Y03702P03A02T02V03602P03203803002X03703803700Y01M00Y01B03702X03802T01B02V03602P03203801902P02R02R03303903203801B03702P03A02T00Y01800Y02S02T03002V03602P03203803002X03703803700Y01M00Y01B03702X03802T01B02V03602P03203801902P02R02R03303903203801B02S02T03002T03802T00Y01800Y03702X03802T03702T02P03602R02W03903702T03600Y01M00Y01B03702X03802T01B03903702T03601B03702T02P03602R02W01903903702T03600Y01800Y02P02S02S02B02R02X02T03203802X02U02X02R02D03702T03600Y01M00Y01B03702X03802T01B02Q03903403801B03702R02X02T03203802X02U02X02R01903903702T03601902P02S02S00Y01800Y03702R02X02T03203802X02U02X02R02D03702T03602402X03703800Y01M00Y01B03702X03802T01B02Q03903403801B03702R02X02T03203802X02U02X02R01903903702T03601903002X03703800Y01800Y03702R02X02T03203802X02U02X02R02D03702T03601W02T03000Y01M00Y01B03702X03802T01B02Q03903403801B03702R02X02T03203802X02U02X02R01903903702T03601902S02T03002T03802T00Y01800Y02T03203803603903703802402X03703800Y01M00Y01B03702X03802T01B02P02V02T03203801902S02T02P03001B03002X03703800Y01800Y03202T03B01X03203803603903703800Y01M00Y01B03702X03802T01B02P02V02T03203801902S02T02P03001B02P02S02S00Y01800Y02R02W02P03202V02T01X03203803603903703803703802P03802T00Y01M00Y01B03702X03802T01B02P02V02T03203801902S02T02P03001B02R02W02P03202V02T01903703802P03803903700Y01800Y02V02T03803303202R02T01X03203803603903703800Y01M00Y01B03702X03802T01B02P02V02T03203801902S02T02P03001B02V02T03800Y01800Y02S02T03002T03802T01X03203803603903703800Y01M00Y01B03702X03802T01B02P02V02T03203801902S02T02P03001B02S02T03002T03802T00Y01800Y02R02W02P03202V02T01X03203803603903703800Y01M00Y01B03702X03802T01B02P02V02T03203801902S02T02P03001B02T02S02X03800Y01800Y02S03303B03103003302P02S01V02T03203802T03600Y01M00Y01B03702X03802T01B02S03303B03203003302P02S01902R02T03203803602T01B03002X03703800Y01800Y02S03303B03203003302P02S02A02T03703800Y01M00Y01B03702X03802T01B02S03303B03203003302P02S01902R02T03203803602T01B03602T03703801902T03C03403303603800Y01800Y02V02T03801W03303B03203003302P02S01Y02X03002T00Y01M00Y01B03702X03802T01B02S03303B03203003302P02S01902R02T03203803602T01B03A02T03602X02U03D01902U02X03002T01903702X03E02T00Y01800Y02V02T03801T02V02T03203802402X03703800Y01M00Y01B03702X03802T01B03903702T03601B02P02V02T03203801903002X03703800Y01800Y03702P03A02T01T02V02T03203800Y01M00Y01B03702X03802T01B03903702T03601B03702P03A02T01902P02V02T03203800Y01800Y02P02V02T03203802103202U03300Y01M00Y01B03702X03802T01B03903702T03601B02P02V02T03203801902X03202U03300Y01800Y02R02W02P03202V02T01T02V02T03203802B03802P03803903700Y01M00Y01B03702X03802T01B03903702T03601B02R02W02P03202V02T01902P02V02T03203801903703802P03803903700Y01800Y02S02T03001T02V02T03203800Y01M00Y01B03702X03802T01B03903702T03601B02S02T03001902P02V02T03203800Y01800Y02W02P03701T02V02T03203800Y01M00Y01B03702X03802T01B03903702T03601B02W02P03701902P02V02T03203800Y01800Y02P02V02T03203801T03403400Y01M00Y01B03702X03802T01B03903702T03601B02P02V02T03203801902P03403400Y01800Y02P02V02T03203801T03903802W00Y01M00Y01B03702X03802T01B03403603302R02T03703701B02P02V02T03203801903702T03800Y01800Y03602T03202T03B03903702T03602103202U03300Y01M00Y01B03702X03802T01B03903702T03601B02X03202U03303A00Y01800Y03602T03903702T03603703702P03A02T03A00Y01M00Y01B03702X03802T01B03903702T03601B03702P03A02T03A00Y01800Y03602T02X03202U03302R03303202U02X02V00Y01M00Y01B03702X03802T01B03903702T03601B02X03202U03301902R03303202U02X02V00Y01800Y03602T03903702T03603702S02T03402P03603803A00Y01M00Y01B02P03402X01B03903702T03601B02S02T03402P03603803A00Y01800Y03602T03903702T03602S02X02R03802X03303202P03603D00Y01M00Y01B02P03402X01B03903702T03601B02S02X02R03802X03303202P03603D00Y01800Y03602T03702X03802T02T03C03203303802X02R02T00Y01M00Y01B03702X03802T01B03903702T03601B02T03C02P03102X03202T01903203303802X02R02T00Y01800Y03602T03903702T03602X02S02T03203802X02U03D00Y01M00Y01B03703D03703802T03101B03903702T03601B02X02S02T03203802X02U03D00Y01800Y03602T03903702T03602R02P03202R02T03002X02S02T03203802X02U03D00Y01M00Y01B03703D03703802T03101B03903702T03601B02R02P03202R02T03001902X02S02T03203802X02U03D00Y01800Y03602T02S02T03003903702T03603802P02Q03002T00Y01M00Y01B03702X03802T01B03903702T03601B02S02T03001903903702T03601902X03202U03300Y01800Y03602T03903702T03602P03403403603303A02T03600Y01M00Y01B03703D03703802T03101B03903702T03601B02P03403403603303A02T03600Y01800Y03602T03903702T03603702X03103403303603803103D00Y01M00Y01B03702X03802T01B03903702T03601B02X03103403303603801903103D00Y01800Y03A02P03002X02S02P03802T02N03402P03703700Y01M00Y01B03702X03802T01B03903702T03601B03A02P03002X02S02P03802T01903402P03703703B03303602S00Y01800Y03602T03402P03703703B03303602S00Y01M00Y01B03702X03802T01B03903702T03601B03602T03402P03703703B03303602S00Y01800Y03903402S02P03802T02N03103302Q02X03002T00Y01M00Y01B03702X03802T01B03903702T03601B03903402S02P03802T01903103302Q02X03002T00Y01800Y03A02P03002X02S02P03802T02N02R03302S02T00Y01M00Y01B03702X03802T01B03102T03703702P02V02T01B03703103700Y01800Y03103D01W02P03802P02C02P02V03700Y01M00Y01B03702X03802T01B03903702T03601B03103D01902S02P03802P01903802P02V03700Y01800Y03802P02Q03002T02R03303202U02X02V00Y01M00Y01B03702X03802T01B03903702T03601B02R02T03203802T03601902R03303202U02X02V00Y01800Y02P02V03602T02T03403603303102X03702T00Y01M00Y01B03702X03802T01B03903702T03601B02P02V03602T02T01903403603303102X03702T00Y01800Y02V02T03802203302Q00Y01M00Y01B03702X03802T01B02Y03302Q01B02S02T03402P03603801902Y03302Q00Y01800Y03602T03702T03802803B02S00Y01M00Y01B03702X03802T01B03903702T03601B03602T03702T03801903402P03703703B03303602S00Y01800Y03703103701V03302S02T02403302V02X03200Y01M00Y01B03702X03802T01B03003302V02X03201B03703103701902R03302S02T01903003302V02X03200Y01800Y02R02W02T02R02Z02503302Q03002X02T00Y01M00Y01B03702X03802T01B03003302V02X03201B02R02W02T02R02Z01903103302Q02X03002T00Y01800Y03602T03702T03802802P03703703B03303602S00Y01M00Y01B03702X03802T01B03003302V02X03201B03602T03702T03801903402P03703703B03303602S00Y01800Y02U03303602R02T02A02T03702T03803403B02S00Y01M00Y01B03702X03802T01B03003302V02X03201B02U03303602R02T01903602T03702T03803403B02S00Y01800Y02V02T03802B02T03202S02B03103702C03302Z02T03200Y01M00Y01B03702X03802T01B03003302V02X03201B02V02T03801903702T03202S01903703103701903803302Z02T03200Y01800Y03702T03202S02B03103700Y01M00Y01B03702X03802T01B03003302V02X03201B03702T03202S01903703103700Y01800Y03303903803702X02S02T02A02T02V02X03703802T03601T03202S02403302V02X03200Y01M00Y01B03702X03802T01B03003302V02X03201B03303903803702X02S02T01903602T02V02X03703802T03601902P03202S01903003302V02X03200Y01800Y02V02T03802D03702T03601V03302S02T00Y01M00Y01B03702X03802T01B03803303303003701B02V02T03801903903702T03602R03302S02T00Y01800Y03402T03603703303202P03001V02T03202103202U03300Y01M00Y01B03702X03802T01B03402T03603703303202P03001902R02T03203802T03601B02X03202U03300Y01800Y03402T03603703303202P03001V02T03201X02S02X03800Y01M00Y01B03702X03802T01B03402T03603703303202P03001902R02T03203802T03601B02T02S02X03800Y01800Y02Q02P02R02Z01Z02T03801T03903802W00Y01M00Y01B03703D03703802T03101B03402T03603703303202P03001902R02T03203802T03601B02V02T03801902P03903802W00Y01800Y02Q02P02R02Z02D03402S02P03802T01T03903802W00Y01M00Y01B03703D03703802T03101B03402T03603703303202P03001902R02T03203802T03601B03903402S02P03802P01902P03903802W00W00Y01800Y03702X03802T01Z02T03801Y03303002S02T03600Y01M00Y01B03702X03802T01B02P03403403701B02U03303002S02T03600Y01800Y03402T03603703303202P03002802P03703703B03303602S00Y01M00Y01B03702X03802T01B03402T03603703303202P03001902R02T03203802T03601B03602T03702T03801903402P03703703B03303602S00Y01800Y02W03303102T02W03303802P03403403700Y01M00Y01B02P03402X01B02W03303102T01B02W03303801902P03403403700Y01800Y03102T03703702P02V02T03203303802X02U03D00Y01M00Y01B02P03402X01B02W03303102T01B03203303802X02U03D00Y01800Y03203303802X02U03D01W02T03802P02X03000Y01M00Y01B02P03402X01B02W03303102T01B03203303802X02U03D01902S02T03802P02X03000Y01800Y02R03603303B02S02P03403403700Y01M00Y01B02P03402X01B02W03303102T01B02R03603303B02S01902P03403403700Y01800Y02V02T03803802P02V03700Y01M00Y01B02P03402X01B02W03303102T01B02V02T03801903802P02V03700Y01800Y03A02X03702X03803703002X03703800Y01M00Y01B02P03402X01B03A02X03702X03803701B03002X03703800Y01800Y03602T02R02T03203803003D02D03702T02402X03703800Y01M00Y01B03702X03802T01B02P03403403701B03602T02R02T03203803003D01903903702T01903002X03703800Y01800Y03102103202S02T03C02602P03A02402X03703800Y01M00Y01B02P03402X01B02W03303102T01B02V02T03801903202P03A02X02V02P03802X03303200Y01800Y02V02T03802B02X03802T02B03802P03802X03703802X02R03700Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B02X03202S02T03C01903202T03B00Y01800Y02V02T03802B02X03802T02B03802P03802X03703802X02R03702803603302U02X03002T00Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B02X03202S02T03C01903403603302U02X03002T01903202T03B00Y01800Y02V02T03802B02X03802T02B03802P03802X03703802X02R03702B02T03603A02X02R02T00Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B02X03202S02T03C01903702T03603A02X02R02T01903202T03B00Y01800Y02V02T03802B03802P03802X03703802X02R03701W02T03403802C03303400Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B02S02T03403801903803303400Y01800Y02V02T03802B03802P03802X03703802X02R03701T03403402C03303400Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B02P03403401903803303400Y01800Y02V02T03802B03802P03802X03703802X02R03702C02P03702Z01T03A02V02C02X03102T00Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B03802P03702Z01902P03A02V01903802X03102T00Y01800Y02V02T03802B03802P03802X03703802X02R03701T03A02V02C02X03102T01U03D01W02P03802T00Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B02P03A02V01903802X03102T01902Q03D01902S02P03802T00Y01800Y02V02T03802B03802P03802X03703802X02R03702803603302R02T03703701T03A02V02C02X03102T00Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B03403603302R02T03703701902P03A02V01903802X03102T00Y01800Y02V02T03802B03802P03802X03703802X02R03701W02T03402P03603801V03303903203800Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B02S02T03402P03603801902R03303903203800Y01800Y02V02T03802B03802P03802X03703802X02R03701W02T03402P03603803102T03203801W02T03802P02X03000Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B02S02T03402P03603803102T03203801902S02T03802P02X03000Y01800Y02V02T03802B03802P03802X03703802X02R03702B02T03603A02X02R02T01V03303903203800Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B03702T03603A02X02R02T01902R03303903203801903202T03B00Y01800Y02V02T03802B03802P03802X03703802X02R03702B02T03603A02X02R02T01W02T03802P02X03000Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B03702T03603A02X02R02T01902S02T03802P02X03001903202T03B00Y01800Y02V02T03802B03802P03802X03703802X02R03702103202S02T03C02803603302U02X03002T00Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B02X03202S02T03C01903403603302U02X03002T01903202T03B00Y01800Y02V02T03802B03802P03802X03703802X02R03702103202S02T03C01Y03603302U02X03002T00Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B02X03202S02T03C01903403603302U02X03002T01903202T03B00Y01800Y03602T03703303903602R02T02B02P03A02T00Y01M00Y01B03702X03802T01B03602T03702T03603A02P03802X03303201B02R03303203703903003801903602T03703303903602R02T01903702P03A02T00Y01800Y03602T03703303602R02T02402X03703800Y01M00Y01B03702X03802T01B03602T03702T03603A02P03802X03303201B02R03303203703903003801903602T03703303903602R02T01903002X03703800Y01800Y03702D03702T03602703903803702X02S02T02B02P03A02T02103202U03300Y01M00Y01B03702X03802T01B03903702T03601B03303903803702X02S02T01903702P03A02T01902X03202U03300Y01800Y03702D03702T03602703903803702X02S02T01V03303202U02X02V00Y01M00Y01B03702X03802T01B03903702T03601B03303903803702X02S02T01902R03303202U02X02V00Y01800Y02V02T03802503D02802P03D03102T03203800Y01M00Y01B03702X03802T01B03402P03D03102T03203801903303602S02T03601B03103D01903002X03703800Y01800Y03702U02T02T02S02Q02P02R02Z03002X03703800Y01M00Y01B03702X03802T01B02U02T02T02S02Q02P02R02Z01B03002X03703800Y01800Y03702U02T02T02S02Q02P02R02Z02S02T03802P02X03000Y01M00Y01B03702X03802T01B02U02T02T02S02Q02P02R02Z01B02S02T03802P02X03000Y01800Y03702U02T02T02S02Q02P02R02Z02S02T02P03000Y01M00Y01B03702X03802T01B02U02T02T02S02Q02P02R02Z01B02S02T02P03000Y01800Y02V02T03802802P03D02803002P03802U03303603100Y01M00Y01B03703D03703802T03101B02V03303302S03701B02V02T03801903402P03D01903403002P03802U03303600Y01800Y03701T03203203902P03002A02T03403303603802103202S02T03C00Y01M00Y01B03702X03802T01B02P03203203902P03001903602T03403303603801B02X03202S02T03C00Y01800Y02V02T03802D03702T03602C02T02P03103700Y01M00Y01B03702X03802T01B03903702T03601B02V02T03801903903702T03601903802T02P03103700Y01800Y03102103202S02T03C02502T03703702P02V02T01T03403402402X03703800Y01M00Y01B03702X03802T01B03102T03703702P02V02T01B03102T03703702P02V02T01902P03403401903002X03703800Y01800Y02V02T03802803603302Y02T02R03800Y01M00Y01B02P03402X01B02W03303102T01B02V02T03801903403603302Y02T02R03803700Y01800Y03702003303102T01Z02T03802C03602P02X03203700Y01M00Y01B02P03402X01B02W03303102T01B02V02T03801903803602P02X03203700Y01800Y02P03403403701Z02T03801W02T03402P03603803700Y01M00Y01B02P03402X01B02P03403403701B02V02T03801902S02T03402P03603803700Y01800Y02P03403403702B02T03603A02X02R02T02C02P02V00Y01M00Y01B02P03402X01B02P03403403701B03702T03603A02X02R02T01903802P02V00Y01800Y02P03403403702B02T03603A02X02R02T02402X03703800Y01M00Y01B02P03402X01B02P03403403701B03702T03603A02X02R02T01903002X03703800Y01800Y03202T03B03002X03703800Y01M00Y01B02P03402X01B02P03403403701B03202T03B01903002X03703800Y01800Y02P03403403703203303802X02U03D00Y01M00Y01B02P03402X01B02P03403403701B03203303802X02U03D01903002X03703800Y01800Y02P03403403702W03303803202T03B00Y01M00Y01B02P03402X01B02P03403403701B02P03403403701902W03303801903202T03B00Y01800Y02P03403403703803D03402T03002X03703800Y01M00Y01B02P03402X01B02P03403403701B02P03403403701903803D03402T01903002X03703800Y01800Y02P03803802P02R02W03102T03203802W03303800Y01M00Y01B02P03402X01B02P03403403701B02P03803802P02R02W03102T03203801902W03303800Y01800Y02P03403402B02T02P03602R02W01U03902P02P00Y01M00Y01B02P03402X01B02W03303102T01B02P03403401903702T02P03602R02W01902Q03902P02P00Y01800Y02U02T02T02S02Q02P02R02Z00Y01M00Y01B03702X03802T01B02P03403403701B02P02S02S01902U02T02T02S02Q02P02R02Z00Y01800Y03702R02W03303303002W02T02P03003802W02R02P03602S00Y01M00Y01B03702X03802T01B02V03301902Q02P02R02Z01903702R02W03303303001B02W02T02P03003802W01902R02P03602S00Y01800Y02V02T03801W03303603102X03803303603D01V02P03802T02B03802P03803903700Y01M00Y01B03702X03802T01B02V03301902Q02P02R02Z01903702R02W03303303001B02R02W02T02R02Z01902V02P03802T01903303601902S03303603102X03803303603D00Y01800Y02W02T02P03003802W02R03302S02T00Y01M00Y01B03702X03802T01B02V03301902Q02P02R02Z01903702R02W03303303001B02W02T02P03003802W01902R03302S02T00Y01800Y02Q02P02R02Z02B02R02W03303303001T03403401V02P03602S00Y01M00Y01B03702X03802T01B02V03301902Q02P02R02Z01903702R02W03303303001B02P03403401D01E01F01F01902R02P03602S00Y01800Y02U03303603102402X03703803700Y01M00Y01B03702X03802T01B02U03303603101B03002X03703803700Y01800Y03803302802S02U00Y01M00Y01B03402S02U01903702T03603A02T03601B02X03202S02T03C00Y01800Y02R03003303202T01Y03303603100Y01M00Y01B03703D03703802T03101B02U03303603101B02R03003303202T00Y01800Y02V02T03801U03403103201Y03303603102402X03703800Y01M00Y01B03703D03703802T03101B02Q03403103201B02P03003000Y01800Y02V02T03801W02P03802P01U03D01X03C02T02R03002802P03802W00Y01M00Y01B03702X03802T01B03803303303003701B02T03C02R02T03001903402P03603702T00Y01800Y03602T03402T02P03801Y02X03002T00Y01M00Y01B02P03402X01B03903403003302P02S01B03E02X03401902U02X03002T00Y01800Y03702P03A02T02803602X03203802103202U03300Y01M00Y01B03702X03802T01B02U03303603101B03702P03A02T01903403602T03A02X02T03B00Y01800Y03702P03A02T01Y03303603101W03602P02U03800Y01M00Y01B03702X03802T01B02U03303603101B03702P03A02T01902U03303603101902S02P03802P01902S03602P02U03800Y01800Y02R03302S02T01Z02T03801Y03303603100Y01M00Y01B02P03402X01B02U03303603101B02V02T03801902U03303603100Y01800Y02V02T03801Y03603303102503302S02T00Y01M00Y01B03702X03802T01B02U03303603101B02V02T03801902U03303603103A00Y01800Y02V02T03801Y03303603102703202T01W02T03802P02X03000Y01M00Y01B03702X03802T01B02U03303603101B02S02T03802P02X03000Y01800Y03702P03A02T01Y03303603101T03803803600Y01M00Y01B03703D03703802T03101B02U03303603101B03702P03A02T01902P03803803602X02Q03903802T03700Y01800Y03903402S02P03802T01Y03303603102503302S02T03000Y01M00Y01B03703D03703802T03101B02U03303603101B03103302S02X02U03D00Y01800Y02R03602T02P03802T01Y03303603102503302S02T03000Y01M00Y01B03703D03703802T03101B02U03303603101B02R03602T02P03802T00Y01800Y02R03602T02P03802T02602T03B01Y03303603100Y01M00Y01B03703D03703802T03101B02U03303603101B02R03602T02P03802T00Y01800Y02V02T03801V02W02X03002S02C02P02Q03002T01W02P03802P00Y01M00Y01B03702X03802T01B03403603302R02T03703701B02R02W02X03002S01903802P02Q03002T01902S02P03802P00Y01800Y02V03303302S02402X03703800Y01M00Y01B03702X03802T01B02V03303302S03701B03002X03703803700Y01800Y02V02T03802502P03803802T03601X03A03200Y01M00Y01B03702X03802T01B03403603302R02T03703701B03A02P03602X02P02Q03002T03700Y01800Y02V02T03803203303802X02R02T02402X03703800Y01M00Y01B03703D03703802T03101B02U03303603101903203303802X02R02T01B03002X03703800Y01800Y02V02T03801U02X03202S01V03303003903103200Y01M00Y01B03702X03802T01B02S02P03802P01B02Q02X03202S01902P03402X01903002X03703800Y01800Y02V02T03801W02P03802P02B03303903602R02T02402X03703800Y01M00Y01B03702X03802T01B02S02P03802P01903703303903602R02T01B02P03003000Y01800Y02V02T03801V03303003903103202502P03400Y01M00Y01B03702X03802T01B02S02P03802P01903703303903602R02T01B02S02X02R03802X03303202P03603D00Y01800Y03A01U03403103201Y03303603102402X03703800Y01M00Y01B03703D03703802T03101B02Q03403103201B03002X03703801902U03303603100Y01800Y02U01U03403103201V03303100Y01M00Y01B03703D03703802T03101B02U03303603101B02V02T03801902R03303103403303202T03203803700Y01800Y02S02T03402P03603802B02T02P03000Y01M00Y01B03703D03703802T03101B02S02T03402P03603803102T03203801B02S02T03402P03603801903702T02P03000Y01800Y02Q03403103202B02T02P03602R02W01Y03303603100Y01M00Y01B03703D03703802T03101B02U03303603101B03702T02P03602R02W01902P03403400Y01800Y02V02T03802A02T03002P03802X03303200Y01M00Y01B02P03402X01B03903702T03601B03602T03002P03802X03303200Y01800Y03702T02P03602R02W02D03702T03602A02T03002P03802X03303200Y01M00Y01B03702X03802T01B03903702T03601B03903702T03601903702T02P03602R02W01903602P03202V02T00Y01800Y02V02T03803A02P03002X02S02P03803303602402X03703800Y01M00Y01B03703D03703802T03101B02U03303603101903A02P03002X02S02P03803303601B03002X03703800Y01800Y02V02T03803203303802X02R02T01W02T03802P02X03000Y01M00Y01B03702X03802T01B02U03303603101903203303802X02R02T01B02S02T03802P02X03000Y01800Y03702T02P03602R02W01U02X03202S02103202U03300Y01M00Y01B03702X03802T01B02S02P03802P01B02Q02X03202S01902S02P03802P00Y01800Y03702T02P03602R02W01V03303903203803603D00Y01M00Y01B02P03402X01B02R03303903203803603D01B03702T02P03602R02W00Y01800Y02V02T03801W02P03802P02B03303903602R02T01W02P03802P00Y01M00Y01B03702X03802T01B02S02P03802P01903703303903602R02T01B02S02T03802P02X03000Y01800Y02V02T03802802S02U02B02T02P03000Y01M00Y01B03702X03802T01B03702T02P03001B03402S02U01903702T02P03000Y01800Y02V03303302S01W02T03802P02X03000Y01M00Y01B03702X03802T01B02V03303302S03701B02S02T03802P02X03000Y01800Y02U03303603101Y02T02T00Y01M00Y01B03702X03802T01B02U03303603101903402P03D01B02U03303603101902U02T02T00Y01800Y02V02T03802703602S02T03600Y01M00Y01B03702X03802T01B02U03303603101903402P03D01B02V02T03801903303602S02T03600Y01800Y02V02T03802X03203703802102S02703602S02T03600Y01M00Y01B03702X03802T01B02U03303603101903402P03D01B02V02T03801902U03303603101903303602S02T03600Y01800Y02V02T03802803603302Y02T02R03803203903102Q02T03600Y01M00Y01B03702X03802T01B02P02R03802X03A02X03802X01B03403603302Y02T02R03801903203903102Q02T03600Y01800Y03602T02V02X03303200Y01M00Y01B02P03402X01B02S02X02R03802X03303202P03603D01B03403603303A02X03202R02T00Y01800Y03603303303101T03003002402X03703800Y01M00Y01B03702X03802T01B03402Z03901903603303303101B03702T03002T02R03801903603303303101903202P03102T00Y01800Y02V02T03802A03303303100Y01M00Y01B03702X03802T01B03402Z03901903603303303101B02V02T03801903603303303101903002X03703800Y01800Y02V02T03801W02T03802P02X03002A03303303100Y01M00Y01B03702X03802T01B03402Z03901903603303303101B02V02T03801903603303303101903002X03703801902Q03D01902X02S00Y01800Y03103D02B02T02P03000Y01M00Y01B03702X03802T01B03702T02P03001B03103D01903302U02U02X02R02T01903702T02P03000Y01800Y03403603302R02T03703702B03902Q03102X03800Y01M00Y01B03702X03802T01B03403603302R02T03703701B03703902Q03102X03800Y01800Y03702T02P03602R02W02D03702T03602803003902V02X03200Y01M00Y01B03702X03802T01B03903702T03601B02U03303603101903702T02P03602R02W01903903702T03600Y01800Y03903403003302P02S02X03202S02T03C00Y01M00Y01B02P03402X01B03903403003302P02S01B02X03202S02T03C00Y01800Y02R02W02T02R02Z01V02W02X03002S00Y01M00Y01B03702X03802T01B03403603302R02T03703701B02R02W02T02R02Z01902R02W02X03002S01903802P02Q03002T00Y01800Y02V02T03802702R03601T03402X00Y01M00Y01B03703D03703802T03101B03302R03601B02P03003000Y01800Y02V02T03802702R03601T03402X01W02T03802P02X03000Y01M00Y01B03703D03703802T03101B03302R03601B02S02T03802P02X03000Y01800Y02V02T03802B02X03802T02702R03601T03402X01W02T03802P02X03000Y01M00Y01B03702X03802T01B03302R03601B02S02T03802P02X03000Y01800Y02V02T03802702R03601W02P03802P00Y01M00Y01B03702X03802T01B03302R03601B02V02T03801902S02P03802P00Y01800Y02Q02P03702T03903403003302P02S00Y01M00Y01B02P03402X01B03903403003302P02S01B02Q02P03702T01903903403003302P02S00Y01800Y03702X02V03202102U03602P03102T02D03603000Y01M00Y01B03702X03802T01B03702X02V03201B02X02U03602P03102T01903903603000Y01800Y03702X02V03202B02X03002T03202R02T02B02X02V03200Y01M00Y01B03702X03802T01B03503D03701903702X02V03201B03702X03002T03202R02T01903702X02V03200Y01800Y03702X02V03202902H02B02B02T02P03003700Y01M00Y01B03702X03802T01B03503D03701903702X02V03201B03702T02P03003700Y01800Y02V02T03801V03303203803602P02R03802102S00Y01M00Y01B03702X03802T01B02U02X03002T01903702X02V03201B02V02T03801902R03303203803602P02R03801902X02S00Y01800Y02V02T03801V01W02T03802P02X03002B03802P03803903700Y01M00Y01B03702X03802T01B02U02X03002T01903702X02V03201B02S02T03802P02X03001903703802P03803903700Y01800Y02V02T03802803603402P02T03602D03603000Y01M00Y01B03702X03802T01B02U02X03002T01903702X02V03201B02V02T03801903403602T03402P03602T01903903603000Y01800Y02U02X03002T02B02X02V03201Z02T03802D03603000Y01M00Y01B03702X03802T01B02U02X03002T01903702X02V03201B02V02T03801903903603000Y01800Y03403602T03A02X02T03B01Y02X03002T02D03603000Y01M00Y01B03702X03802T01B02U02X03002T01903702X02V03201B03403602T03A02X02T03B01902U02X03002T01903903603000Y01800Y02R03602T02P03802T02903602R03302S02T00Y01M00Y01B03702X03802T01B03402P03D03102T03203801903303602S02T03601B02R03602T02P03802T01903303602S02T03600Y01800Y02V02T03802603302802P03D03102T03203802402X03703800Y01M00Y01B03702X03802T01B03402P03D03102T03203801903303602S02T03601B02V02T03801903203303803903702T02S01903303602S02T03600Y01800Y02V02T03802802P03D02A02T03703903003800Y01M00Y01B03702X03802T01B03402P03D03102T03203801903303602S02T03601B02V02T03801903402P03D01903602T03703903003800Y01800Y03702X03103903002P03802X03303200Y01M00Y01B03702X03802T01B03402P03D03102T03203801903303602S02T03601B03702T03801902U03303603101902S02P03802P00Y01800Y02P02S02S02B02T02P03602R02W02D03702T03600Y01M00Y01B03702X03802T01B03903702T03601B02P02S02S01903702T02P03602R02W01903903702T03600Y01800Y02V02T03802A02T02R02T03203803003D02D03702T03600Y01M00Y01B03702X03802T01B03903702T03601B02V02T03801903702T02P03602R02W01903903702T03600Y01800Y02V02T03802603302E02P03002X02S02P03802T00Y01M00Y01B03703D03703802T03101B03702T02P03001B02V02T03801903203301903A02P03002X02S02P03802T00Y01800Y02V02T03802703602V02P03202402X03703800Y01M00Y01B03702X03802T01B03303602V02P03202X03E02T01B03303602V02P03201903002X03703800Y01800Y02V02T03801W02T03402P03603802C03602T02T00Y01M00Y01B03702X03802T01B03303602V02P03202X03E02T01B02S02T03402P03603801903803602T02T00Y01800Y02V02T03802D03702T03602402X03703802302200Y01M00Y01B03702X03802T01B03303602V02P03202X03E02T01B03903702T03601903002X03703800Y01800Y02U03701U03403103201V03303100Y01M00Y01B03703D03703802T03101B02U03303603101B03103903003802X01902R03303103403303202T03203803700Y01800Y02V02T03801Y03003303B02E02P03602402X03703800Y01M00Y01B03703D03703802T03101B02Q03403103201B03102T02T03803802X03202V01903A02P03602X02P02Q03002T03700Y01800Y02V02T03802803603302R02T03703701W02T02U02X03202X03802X03303200Y01M00Y01B03703D03703802T03101B02Q03403103201B02V02T03801902Q03403103201902X03202U03303A00Y01800Y03002X03703802C03602X02V02V02T03600Y01M00Y01B03703D03703802T03101B03803602X02V02V02T03601B03002X03703800Y01800Y03702P03A02T01U03403103201T03803803602X02Q03903802T00Y01M00Y01B03703D03703802T03101B02Q03403103201B03702P03A02T01902P03803803602X02Q03903802T03700Y01800Y03702P03A02T01U03403103200Y01M00Y01B03703D03703802T03101B02Q03403103201B03702P03A02T00Y01800Y02Q03403103201Z02T03802D03702T03600Y01M00Y01B03703D03703802T03101B03903702T03601B03702X03103403002T01903702T02P03602R02W00Y01800Y02V02T03802B02X02V03202P03000Y01M00Y01B03703D03703802T03101B02P02R03802X03A02X03802X01903702X02V03202P03001B02P03403401902V02T03801903702X02V03202P03000Y01800Y03703D03703802T03102D03402H02T02P03600Y01M00Y01B03702X03802T01B03403603302R02T03703701B03703D03703802T03101903903401903D02T02P03600Y01800Y03802P02V02B02P03A02T00Y01M00Y01B03703D03703802T03101B03702T03603A02X02R02T01903802P02V01B03702P03A02T00Y01800Y03802P02V01W02T03802P02X03000Y01M00Y01B03703D03703802T03101B03702T03603A02X02R02T01903802P02V01B02S02T03802P02X03000Y01800Y03802P02V01W02T03002T03802T01T03403400Y01M00Y01B03703D03703802T03101B03702T03603A02X02R02T01903802P02V01B02S02T03002T03802T01902P03403400Y01800Y03702T03603A02X02R02T02C02P02V02002X02S02T00Y01M00Y01B03703D03703802T03101B03702T03603A02X02R02T01903802P02V01B02W02X02S02T00Y01800Y03702T03603A02X02R02T02C02P02V01W02T03002T03802T00Y01M00Y01B03703D03703802T03101B03702T03603A02X02R02T01903802P02V01B02S02T03002T03802T00Y01800Y03702T03603A02X02R02T02C02P02V02B03303603800Y01M00Y01B03703D03703802T03101B03702T03603A02X02R02T01903802P02V01B03703303603800Y01800Y03802P02V03702C02P02V00Y01M00Y01B03703D03703802T03101B03802P02V03701B03802P02V03700Y01800Y03702P03A02T02C02P02V00Y01M00Y01B03703D03703802T03101B03802P02V03701B03702P03A02T00Y01800Y03403902Q03002X03702W02C02P02V00Y01M00Y01B03703D03703802T03101B03802P02V03701B03403902Q03002X03702W00Y01800Y02S02T03002T03802T02C02P02V00Y01M00Y01B03703D03703802T03101B03802P02V03701B02S02T03002T03802T00Y01800Y03703303603802C02P02V00Y01M00Y01B03703D03703802T03101B03802P02V03701B03703303603800Y01800Y03702T02P03602R02W02C02P02V00Y01M00Y01B03703D03703802T03101B03802P02V03701B03002X03703801902P03403400Y01800Y02V02T03802P02V02402X03703800Y01M00Y01B03703D03703802T03101B03802P02V03701B03802P02V01903002X03703800Y01800Y03702T03802C02P02V02502P03803802T03600Y01M00Y01B03703D03703802T03101B02P03403401B03702T03801903802P02V00Y01800Y03703303603802C02P02V01T03403400Y01M00Y01B03703D03703802T03101B03802P02V03701B03703303603801902P03403400Y01800Y02S02T03002T03802T02502P03803802T03601T03403400Y01M00Y01B03703D03703802T03101B03802P02V03701B02S02T03002T03802T01902P03403400Y01800Y02P02S02S02C02P02V01T03403400Y01M00Y01B03703D03703802T03101B03802P02V03701B02P02S02S01902P03403400Y01800Y02V02T03801T03403400Y01M00Y01B03703D03703802T03101B02P03403401902U03303002S02T03601B02X03202S02T03C00Y01800Y03702P03A02T01T03403400Y01M00Y01B03703D03703802T03101B02P03403401902U03303002S02T03601B03702P03A02T00Y01800Y03403902Q03002X03702W01T03403400Y01M00Y01B03703D03703802T03101B02P03403401902U03303002S02T03601B03403902Q03002X03702W00Y01800Y02S02T03002T03802T01T03403400Y01M00Y01B03703D03703802T03101B02P03403401902U03303002S02T03601B02S02T03002T03802T00Y01800Y02P03403401Y03303002S02T03602B03303603800Y01M00Y01B03703D03703802T03101B02P03403401902U03303002S02T03601B03703303603800Y01800Y02R02W02X03002S03602T03202103202S02T03C00Y01M00Y01B03703D03703802T03101B02P03403401902U03303002S02T03601B02R02W02X03002S03602T03201902X03202S02T03C00Y01800Y02R02W02X03002S03602T03201W02T03002T03802T00Y01M00Y01B03703D03703802T03101B02P03403401902U03303002S02T03601B02R02W02X03002S03602T03201902S02T03002T03802T00Y01800Y02R02W02X03002S03602T03202B03303603800Y01M00Y01B03703D03703802T03101B02P03403401902U03303002S02T03601B02R02W02X03002S03602T03201903703303603800Y01800Y02S02T03002502P03802T03602X02P03000Y01M00Y01B03703D03703802T03101B03102P03802T03602X02P03001903402X02R03803903602T01B02S02T03002T03802T00Y01800Y02P02S02S02502P03802T03602X02P03000Y01M00Y01B03703D03703802T03101B03102P03802T03602X02P03001903402X02R03803903602T01B03702P03A02T00Y01800Y03702P03A02T02502P03802T03602X02P03001V03002P03703702X02U03D00Y01M00Y01B03703D03703802T03101B03102P03802T03602X02P03001902R03002P03703702X02U02X02R02P03802X03303201B03702P03A02T00Y01800Y02S02T03002502P03802T03602X02P03001V03002P03703702X02U03D00Y01M00Y01B03703D03703802T03101B03102P03802T03602X02P03001902R03002P03703702X02U02X02R02P03802X03303201B02S02T03002T03802T00Y01800Y03403602T02U02X03C02402X03703800Y01M00Y01B03703D03703802T03101B03403602T02U02X03C01B02X03202S02T03C00Y01800Y02V02T03802102S02T03203802X03803D00Y01M00Y01B03702X03802T01B02X02S02T03203802X03803D01B02X03202S02T03C00Y01800Y02V02T03801V03303103102T03203801V03303202U00Y01M00Y01B02P03402X01B02R03303103102T03203801903102P03202P02V02T01B02X03202S02T03C00Y01800Y02V02T03801Y03303603102502P03803802T03602402X03703800Y01M00Y01B03703D03703802T03101B02U03303603101B03A02T03603702X03303201903002X03703800Y01800Y03702P03A02T02502P03803802T03601U02P03702T00Y01M00Y01B03703D03703802T03101B02P03403401B03702P03A02T01902Q02P03702T00Y01800Y02V02T03803102P03803802T03601W02T03802P02X03000Y01M00Y01B03703D03703802T03101B02P03403401B02S02T03802P02X03000Y01800Y02P03403402E02T03603702X03303202402X03703800Y01M00Y01B03703D03703802T03101B02Q03403103201B03002X03703800Y01800Y02R03602T02P03802T01T03403402E02T03602X03303200Y01M00Y01B03703D03703802T03101B02Q03403103201B02R03602T02P03802T01903A02T03603702X03303200Y01800Y02Q03403103202B02P03A02T01Y03303603100Y01M00Y01B03703D03703802T03101B02Q03403103201B03702P03A02T01902U03303603100Y01800Y02Q03403103201T03403401W02T03802P02X03000Y01M00Y01B03703D03703802T03101B02Q03403103201B02S02T03802P02X03000Y01800Y02Q03403103201V03003303202T00Y01M00Y01B03703D03703802T03101B02Q03403103201B02R03003303202T00Y01800Y03403902Q03002X03702W01U03403103200Y01M00Y01B03703D03703802T03101B02Q03403103201B03403902Q03002X03702W00Y01800Y02Q03403103202B02P03A02T02C02P03702Z00Y01M00Y01B03703D03703802T03101B02Q03403103201B03702P03A02T01903802P03702Z00Y01800Y02V02T03802C03602X02V02V02T03602402X03703800Y01M00Y01B03703D03703802T03101B03803602X02V02V02T03601B02P03403401902V02T03801903803602X02V02V02T03600Y01800Y03103303A02T02C02P02V00Y01M00Y01B03703D03703802T03101B02P03403401B03702T03801903802P02V00Y01800Y03403902Q03002X03702W02502P03803802T03600Y01M00Y01B03703D03703802T03101B02P03403401B03403902Q03002X03702W00Y01800Y03903203403902Q03002X03702W02502P03803802T03600Y01M00Y01B03703D03703802T03101B02P03403401B03903203403902Q03002X03702W00Y01800Y02V02T03801X03A02T03203802B03303903602R02T00Y01M00Y01B03703D03703802T03101B02Q03403103201B03703303903602R02T01902Z02T03D00Y01800Y02V02T03801Y03303603101T03903802W00Y01M00Y01B03703D03703802T03101B02U03303603101B02V02T03801902U03303603101902P03903802W00Y01800Y02T03202P02Q03002T01Y03303603100Y01M00Y01B03703D03703802T03101B02U03303603101B02T03202P02Q03002T01903A02T03603702X03303200Y01800Y03702P03A02T02B02T03002T02R03801Y03303603103700Y01M00Y01B03703D03703802T03101B02U03303603101B03702P03A02T01903702T03002T02R03800Y01800Y03702T03801Y03303603101T03903802W00Y01M00Y01B03703D03703802T03101B02U03303603101B03702P03A02T01902U03303603101902P03903802W00Y01800Y02V02T03801Y03303603102C02X03400Y01M00Y01B03703D03703802T03101B02U03303603101B02V02T03801902U03303603101903802X03400Y01800Y03702X03802T01Z02T03801Y03303603102C02X03400Y01M00Y01B03702X03802T01B02U03303603101B02V02T03801902U03303603101903802X03400Y01800Y03903403702P03802P01Y03303603102C02X03400Y01M00Y01B03703D03703802T03101B02U03303603101B03903402S02P03802T01902U03303603101903802X03400Y01800Y02U03303603102B02P03A02T02002X02S02T00Y01M00Y01B03703D03703802T03101B02U03303603101B03702P03A02T01902W02X02S02T00Y01800Y02U03303603102B02P03A02T02603303802T00Y01M00Y01B03703D03703802T03101B02U03303603101B03702P03A02T01903203303802T00Y01800Y02Q03403103202B02P03A02T02T02002X02S02T00Y01M00Y01B03703D03703802T03101B02Q03403103201B03702P03A02T01902W02X02S02T00Y01800Y02Q03403103202B02P03A02T02603303802T00Y01M00Y01B03703D03703802T03101B02Q03403103201B03702P03A02T01903203303802T00Y01800Y02P03403402002X02S02T00Y01M00Y01B03703D03703802T03101B02P03403401B02W02X02S02T00Y01800Y03202T03B01Z02T03801T03602R02W02X03A02T00Y01M00Y01B03702X03802T01B02P03602R02W02X03A02T01B03503902T03603D00Y01800Y03202T03B01T03602R02W02X03A02T01Y03303603101V03303100Y01M00Y01B03702X03802T01B02P03602R02W02X03A02T01B02U03303603101902R03303103403303202T03203803700Y01800Y03202T03B02S02T03001T03602R02W02X03A02T00Y01M00Y01B03702X03802T01B02P03602R02W02X03A02T01B02S02T03002T03802T01902P03602R02W02X03A02T00Y01800Y03602T02R02T03203801X03C03403303603802A02T02R03303602S00Y01M00Y01B03702X03802T01B02P03602R02W02X03A02T01B03602T02R02T03203801902T03C03403303603801903602T02R03303602S00Y01800Y03403303003002X03202V02B03802P03803903700Y01M00Y01B03702X03802T01B02P03602R02W02X03A02T01B03403303003002X03202V01903703802P03802T00Y01800Y02T03C03403303603802C03301X03C02R02T03000Y01M00Y01B03702X03802T01B02P03602R02W02X03A02T01B03503902T03603D01903803301902T03C02R02T03000Y01800Y02T03C03403303603802C03301T03803802P02R02W00Y01M00Y01B03702X03802T01B02P03602R02W02X03A02T01B02P03803802P02R02W01902T03C03403303603800Y01800Y02T03C03403303603802C03302802S02U00Y01M00Y01B03702X03802T01B02P03602R02W02X03A02T01B03402S02U01902T03C03403303603800Y01800Y02T03C03403303603802C03302F03303602S00Y01M00Y01B03702X03802T01B02P03602R02W02X03A02T01B03B03303602S01902T03C03403303603800Y01800Y02T03C03403303603801T03403403302X03203803102T03203801W02P03802P00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03002X03703801902T03C03403303603800Y01800Y03803303202V02Y02X01T03602R02W02X03A02T00Y01M00Y01B03702X03802T01B02P03602R02W02X03A02T01B03803303202V02Y02X00Y01800Y02V02T03801V03303103102T03203803702402X03703800Y01M00Y01B03703D03703802T03101B02R03303103102T03203803701B03002X03703803700Y01800Y02V02T03802803603302R02T03703701T03403402602P03102T03700Y01M00Y01B03702X03802T01B03403603302R02T03703701B02V02T03801902P03403401903202P03102T03700Y01800Y02V02T03802503D02C03302S03301Y02X03202X03702W02T02S00Y01M00Y01B03702X03802T01B03103D01903802P03702Z01B02U02X03202X03702W02T02S00Y01800Y02V02T03801X03203803603903703802C03302S03300Y01M00Y01B03702X03802T01B02T03203803603903703801B03803302S03300Y01800Y02V02T03801X03203803603903703801Y02X03202X03702W02T02S00Y01M00Y01B03702X03802T01B02T03203803603903703801B02U02X03202X03702W02T02S00Y01800Y02V02T03802C03302S03301X03203803603903703802603903100Y01M00Y01B03702X03802T01B03103D01903802P03702Z01B02R03303903203800Y01800Y02Q02P03802R02W02A02T02R03303602S00Y01M00Y01B03702X03802T01B02Q02P03802R02W01B03602T02R03303602S00Y01800Y03602T03703801U02P03802R02W00Y01M00Y01B03702X03802T01B02Q02P03802R02W01B03602T03703800Y01800Y03602T03703801U02P03802R02W02602T03B00Y01M00Y01B03702X03802T01B02Q02P03802R02W01B03802W02X03602S01903602T03803603D00Y01800Y02S02T03001U02P03802R02W00Y01M00Y01B03702X03802T01B02Q02P03802R02W01B02S02T03000Y01800Y02V02T03802503D02A02T02P02S00Y01M00Y01B03702X03802T01B03103D01903602T02P02S01B02X03202S02T03C00Y01800Y02V02T03802503D02703A02T03603702T02T00Y01M00Y01B03702X03802T01B03103D01903303A02T03603702T02T01B02X03202S02T03C00Y01800Y02V02T03802703A02T03603702T02T02402X03703800Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B03702T03603A02X02R02T01902R03303903203801903202T03B00Y01800Y02V02T03802703A02T03603702T02T02B03802P03802X03703802X02R03700Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B03702T03603A02X02R02T01902S02T03802P02X03000Y01800Y02V02T03801W02T03402P03603802602P03102T02402X03703800Y01M00Y01B03702X03802T01B03403603302R02T03703701B02X03203703801902R03602T02P03803303601902S02T03402P03603803102T03203800Y01800Y03101Z02T03802503D02C03302S03300Y01M00Y01B03702X03802T01B03403603302R02T03703701B03103D01903803302S03303A00Y01800Y03101Z02T03802503D02A02T02P02S00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03103D01903602T02P02S03A00Y01800Y03101Z02T03802503D02703A02T03603702T02T00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03103D01903303A02T03603702T02T03A00Y01800Y02V02T03802803603302R02T03703702403302V00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03003302V00Y01800Y02V02T03802C02W02X03602S03402P03603803D02403302V00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03802W02X03602S03402P03603803D01903003302V00Y01800Y02V02T03802C02W02X03602S02703402T03602P03802X03303200Y01M00Y01B03702X03802T01B02Q02P03802R02W01B02V02T03801903802W02X03602S01903303402T03602P03802X03303200Y01800Y02V02T03802C02W02X03602S01V03303103102X03800Y01M00Y01B03702X03802T01B02Q02P03802R02W01B03802W02X03602S01902R03303103102X03800Y01800Y02V02T03801V03303103102T03203801V03303200Y01M00Y01B03702X03802T01B02R03303103102T03203803701B02R03303202U02X02V00Y01800Y03703902Q01V03303103102T03203800Y01M00Y01B03702X03802T01B02R03303103102T03203803701B02R03303103102T03203800Y01800Y02V02T03801U02P03802R02W02603302S02T03700Y01M00Y01B03702X03802T01B02Q02P03802R02W01B03203302S02T03700Y01800Y02V02T03801U02P03802R02W02603302S02T03702602T03B00Y01M00Y01B03702X03802T01B02Q02P03802R02W01B03602T02R03303602S01903203302S02T03700Y01800Y02V02T03802C02W02X03602S02402X03703800Y01M00Y01B03702X03802T01B02Q02P03802R02W01B02V02T03801903802W02X03602S01903203302S02T03700Y01800Y02V02T03802503D01U02P03802R02W02402X03703800Y01M00Y01B03702X03802T01B03403603302R02T03703701B03103D01902Q02P03802R02W00Y01800Y03803301U02P03802R02W01U03D02C02P03702Z02102S03700Y01M00Y01B03702X03802T01B02Q02P03802R02W01B02R03303103102X03800Y01800Y03803301U02P03802R02W01U03D02603302S02T02102S00Y01M00Y01B03702X03802T01B02Q02P03802R02W01B02R03303103102X03801903203302S02T00Y01800Y03803301U02P03802R02W01U03D02103103403303603800Y01M00Y01B03702X03802T01B02Q02P03802R02W01B02R03303103102X03801902X03103403303603800Y01800Y02V02T03801U02P03802R02W02803603302V03602T03703700Y01M00Y01B03702X03802T01B02Q02P03802R02W01B03403603302V03602T03703700Y01800Y03402Z03901W02T03001W03602P02U03800Y01M00Y01B03702X03802T01B02U03303603101B02S02T03001902P03403403701902U03303603100Y01800Y03602T03A03302Z02T02C03302S03300Y01M00Y01B03702X03802T01B03403603302R02T03703701B03602T03A03302Z02T00Y01800Y03702W02P03602T02C02P03702Z02402X03703800Y01M00Y01B03702X03802T01B03103D01903802P03702Z01B03702W02P03602T00Y01800Y02V02T03802D03702T03602503D01W02T03402P03600Y01M00Y01B03702X03802T01B03903702T03601B03103D01902S02T03402P03603800Y01800Y02V02X03803703802P03603802103202U03300Y01M00Y01B03702X03802T01B02U03303603101B03703802P03603801902S02P03802P00Y01800Y03403303703801Y03303603101Y02X03603703801W02P03802P00Y01M00Y01B03702X03802T01B02P03403403701B03002P03903202R02W00Y01800Y02V02T03801W02P03802P01U03D01T03403402102S00Y01M00Y01B02P03402X01B02U03303603101B02V02T03801902S02P03802P00Y01800Y03703802P03603802B02P03A02T01W03602P02U03800Y01M00Y01B03702X03802T01B02U03303603101B03702P03A02T01902U03303603101902S02P03802P01902S03602P02U03801902P03403403700Y01800Y03702T02P03001V02W02T02R02Z01V03302S02T00Y01M00Y01B03702X03802T01B03702T02P03001B03702T02P03001902R02W02T02R02Z01902R03302S02T00Y01800Y03702T02P03602R02W01T02V02T03203802D03702T03600Y01M00Y01B03702X03802T01B03903702T03601B03702T02P03602R02W01902P02V02T03203801903903702T03600Y01800Y02S02T02P03002103202U03300Y01M00Y01B03702X03802T01B03403603302R02T03703701B02S02T02P03001902X03202U03300Y01800Y02V02T03802U03303603102R02W02P03202V02T00Y01M00Y01B03702X03802T01B02U03303603101B02R02W02P03202V02T01903003302V00Y01800Y02S02T02P03001W02P03802P00Y01M00Y01B03702X03802T01B02U03303603101B02S02T02P03001902S02P03802P00Y01800Y02V02T03802B02W03303603802R03903802402X03703800Y01M00Y01B03702X03802T01B03702W03303603802R03903801B03002X03703800Y01800Y02P02S02S02B02W03303603802R03903800Y01M00Y01B03702X03802T01B03702W03303603802R03903801B02P02S02S00Y01800Y02S02T03002T03802T02B02W03303603802R03903800Y01M00Y01B03702X03802T01B03702W03303603802R03903801B02S02T03002T03802T00Y01800Y03403303703801Y03303603101W02P03802P00Y01M00Y01B03702X03802T01B02U03303603101B03702P03A02T00Y01800Y03903403003302P02S01T03903802W00Y01M00Y01B03702X03802T01B02P03803802P02R02W01B02P03903802W01903903403003302P02S00Y01800Y02S03303B03203003302P02S01T03903802W00Y01M00Y01B03702X03802T01B02P03803802P02R02W01B02P03903802W01902S03303B03203003302P02S00Y01800Y03702P03A02T01Y03303603101T03202S02C02P03702Z00Y01M00Y01B03702X03802T01B03802P03702Z01B02S02T02P03000Y01800Y02R02W02P03202V02T01T03403403603303A02T03600Y01M00Y01B03702X03802T01B03403603302R02T03703701B02R02W02P03202V02T01902P03403403603303A02T03600Y01800Y03102P03803802T03601T03602R02W02X03A02T01X02S02X03800Y01M00Y01B03702X03802T01B02P03602R02W02X03A02T01B02T02S02X03800Y01800Y03702X03802T02E02T03602X02U03D01V03302S02T00Y01M00Y01B03702X03802T01B03003302V02X03201B03A02T03602X02U03D01902R03302S02T00Y01800Y02T03C02P03101U02P03802R02W01W03303B03203003302P02S00Y01M00Y01B03702X03802T01B02P03803802P02R02W01B02Q02P03802R02W01902S03303B03203003302P02S01902U02X03002T03700Y01800Y02T03C02P03102X03202T02103702602T02T02S02E02T03602X02U03D00Y01M00Y01B03702X03802T01B03003302V02X03201B02X03701903202T02T02S01903A02T03602X02U03D00Y01800Y03102803603302R02T03703702502T02T03803802X03202V02D03702T03603700Y01M00Y01B03702X03802T01B03403603302R02T03703701B03102T02T03803802X03202V01903903702T03603700Y01800Y02V02T03803703802P03603802S02P03802P00Y01M00Y01B02P03402X01B02U03303603101B02V02T03801903703802P03603801902S02P03802P00Y01800Y02V02T03802C02P03702Z01T03903802W00Y01M00Y01B02P03402X01B02U03303603101B02V02T03801903802P03702Z01902S02P03802P00Y01800Y02S03303B03202802S02U00Y01M00Y01B03402S02U01903702T03603A02T03601B02S03303B03200Y01800Y02V02T03801W02P03802P01U03D02B02T03703702102S00Y01M00Y01B02P03402X01B02U03303603101B02V02T03801903702T03703702X03303201902S02P03802P00Y01800Y02V02T03801W02P03802P01U03D02103203703802102S00Y01M00Y01B02P03402X01B02U03303603101B02V02T03801902X03203703801902S02P03802P00Y01800Y03602T03A03302Z02T02502P03803802T03600Y01M00Y01B03702X03802T01B02P02R03802X03A02X03802X01B03602T03A03302Z02T00Y01800Y03103D02A02T03102X03202S02T03600Y01M00Y01B03702X03802T01B03403603302R02T03703701B03602T03102X03202S02T03600Y01800Y02S03303B03202403302P02S02F03303602S00Y01M00Y01B03702X03802T01B02S03303B03203003302P02S01B03B03303602S00Y01800Y03002T02P03A02T01V03303903203803603D02B02P03A02T01E00Y01M00Y01B03702X03802T01B03402Z03901903702T02P03001B03602T02Y02T02R03801903903402S02P03802T00Y01800Y03802P03702Z02P02S02S03702X02V03200Y01M00Y01B03702X03802T01B03802P03702Z01B02P02S02S01903702X02V03200Y01800Y02V02T03802H02T02P03603700Y01M00Y01B03702X03802T01B03403603302R02T03703701B03703D03703802T03101903903401903D02T02P03600Y01800Y02V02T03801T03403402602P03102T03700Y01M00Y01B03702X03802T01B03403603302R02T03703701B02V02T03801902P03403401903202P03102T03700Y01800Y02V02T03802A02T02R03303602S02603302S02T00Y01M00Y01B03702X03802T01B02Q02P03802R02W01B02V02T03801903602T02R03303602S01903203302S02T00Y01800Y03E02X03402U02X03002T00Y01M00Y01B02P03402X01B03903403003302P02S01B03E02X03401902U02X03002T00Y01800Y02W03303802Z02T03D03B03303602S00Y01M00Y01B03703D03703802T03101B02W03303801902Z02T03D03B03303602S01B02P03003000Y01800Y03702T03603A02X02R02T03002X03703800Y01M00Y01B03703D03703802T03101B03702T03603A02X02R02T01903802P02V01B03002X03703800Y01800Y02P03803803602X02Q03903802T03002X03703800Y01M00Y01B03703D03703802T03101B02P03403401B02P03803803602X02Q03903802T01903002X03703800Y01800Y02R03303103102T03203803701W02T03000Y01M00Y01B03703D03703802T03101B02R03303103102T03203803701B02S02T03000Y01800Y02R03303103102T03203801X03C03403303603800Y01M00Y01B03703D03703802T03101B02R03303103102T03203803701B02T03C03403303603800Y01800Y02V02T03802D03702T03601W02T03402P03603803700Y01M00Y01B03702X03802T01B03903702T03601B03702T03002T02R03801902S02T03402P03603803102T03203800Y01800Y03403603302R02T03703702703A02T03603702T02T01X03202S00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03303A02T03603702T02T01902T03202S01902X03203703800Y01800Y03403603302R02T03703702703A02T03603702T02T01W02T03002T03802T00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03303A02T03603702T02T01902S02T03002T03802T01902X03203703800Y01800Y03403603302R02T03703702703A02T03603702T02T01W02T03002T03802T01E00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03303A02T03603702T02T01902S02T03002T03802T01903702T03703700Y01800Y03403603302R02T03703702703A02T03603702T02T02B03903703402T03202S00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03303A02T03603702T02T01903703903703402T03202S01902X03203703800Y01800Y03403603302R02T03703702703A02T03603702T02T02B03903703402T03202S01U02P03802R02W00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03303A02T03603702T02T01903703903703402T03202S01902X03203703801902Q02P03802R02W00Y01800Y03403603302R02T03703702703A02T03603702T02T01X03202S01U02P03802R02W00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03303A02T03603702T02T01902T03202S01902X03203703801902Q02P03802R02W00Y01800Y03403603302R02T03703702703A02T03603702T02T01W02T03002T03802T01U02P03802R02W00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03303A02T03603702T02T01902S02T03002T03802T01902X03203703801902Q02P03802R02W00Y01800Y03403603302R02T03703702703A02T03603702T02T01Z02T03802603302S02T03700Y01M00Y01B03702X03802T01B03403603302R02T03703701B03303A02T03603702T02T01902V02T03801903203302S02T03700Y01800Y03403603302R02T03703702703A02T03603702T02T02203903103402603302S02T00Y01M00Y01B03702X03802T01B03403603302R02T03703701B03303A02T03603702T02T01902Y03903103401903203302S02T00Y01800Y02P03903803303403903702W02B02W03303B01T02R03800Y01M00Y01B03703D03703802T03101B02P03903803303403903702W01B03702W03303B01902P02R03800Y01800Y03403903702W02B02P03A02T00Y01M00Y01B03703D03703802T03101B02P03903803303403903702W01B03403903702W01903702P03A02T00Y01800Y02P03903803303403903702W03002X03700Y01M00Y01B03703D03703802T03101B02P03903803303403903702W01B03002X03703800Y01800Y03403903702W03903702T00Y01M00Y01B03703D03703802T03101B02P03903803303403903702W01B03403903702W01903903702T00Y01800Y03403903702W02D03702T02B02T03800Y01M00Y01B03703D03703802T03101B03403903702W02P03402X01B02P03402X01903903702T00Y01800Y02P03903803303403903702W01W02T03002T03802T00Y01M00Y01B03703D03703802T03101B02P03903803303403903702W01B02S02T03002T03802T00Y01800Y02P03903803303403903702W02V02T03803303403802X03303200Y01M00Y01B03703D03703802T03101B02P03903803303403903702W01B02V02T03801903303403802X03303200Y01800Y02P03903803303403903702W02V02T03803303202T00Y01M00Y01B03703D03703802T03101B02P03903803303403903702W01B02V02T03801903303202T00Y01800Y03403903702W02P03402X02P03402X03303202T00Y01M00Y01B03703D03703802T03101B03403903702W02P03402X01B02P03402X01903303202T00Y01800Y02V02T03802U02X02T03002S02Q03D02U03A02X02S00Y01M00Y01B03703D03703802T03101B02P03903803303403903702W01B02V02T03802U02X02T03002S01902Q03D02U03A02X02S00Y01800Y02V02T03802U03303603102Q03D02Q03403103200Y01M00Y01B03703D03703802T03101B02P03903803303403903702W01B02V02T03802U03303603101902Q03D02Q03403103200Y01800Y02P03903803303403903702W03702T03802U02X02T03002S00Y01M00Y01B03703D03703802T03101B02P03903803303403903702W01B03702T03801902U02X02T03002S00Y01800Y02V02T03802A02T03402T02P03801Y03303603102402X03703800Y01M00Y01B03703D03703802T03101B02P03903803303403903702W01B02V02T03802U03303603103602T03402T02P03801902Q03D02Q03403103200Y01800Y02V02T03802A02T03402T02P03801Y02X02T03002S00Y01M00Y01B03703D03703802T03101B02P03903803303403903702W01B02V02T03801903602T03402T02P03802U02X02T03002S00Y01800Y02S02T03002T03802T02803303603800Y01M00Y01B03703D03703802T03101B03403903702W02P03402X01B02S02T03002T03802T00Y01800Y02V02T03801W02P03802P02803903702W02403302V00Y01M00Y01B03703D03703802T03101B03403903702W02P03402X01B03403903702W01903003302V00Y01800Y02V02T03801V02W02T02R02Z00Y01M00Y01B03702X03802T01B02Q02P03802R02W01B02P02S03A02P03202R02T02S01902R02W02T02R02Z00Y01800Y02V02T03802C02T03103403002P03802T01W02T03802P02X03000Y01M00Y01B03703D03703802T03101B02Q03403103201B02V02T03801903B03303602S00Y01800Y02V02T03801Y03303603101V03303203803603303000Y01M00Y01B03702X03802T01B02U03303603101B02V02T03801902U03303603103A00Y01800Y03702P03A02T02C02T03103403002P03802T00Y01M00Y01B03703D03703802T03101B02Q03403103201B03702P03A02T01903B03303602S00Y01800Y02V02T03801Y03303603102402X03703800Y01M00Y01B03703D03703802T03101B02Q03403103201B03002X03703801902U03303603100Y01800Y02V02T03801Y03303603101W02T03802P02X03000Y01M00Y01B03702X03802T01B02U03303603101B02V02T03801902U03303603103A00Y01800Y03702P03A02T02B03803602P02X02V02W03800Y01M00Y01B03703D03703802T03101B02P03403401B02S03302R03903102T03203801902R03303202U02X02V01903702P03A02T00Y01800Y02V02T03802B03803602P02X02V02W03800Y01M00Y01B03703D03703802T03101B02P03403401B02V02T03801902S03302R03903102T03203801902R03303202U02X02V00Y01800Y02V02T03801Y03202B02T03803802X03202V03700Y01M00Y01B02P03402X01B03003302V02X03201902R03303202U02X02V01B02V02T03800Y01800Y02T03C03403303603802503303202X03803303600Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B03702T03603A02X02R02T01902R03303903203801903803301902T03C02R02T03001903202T03B00Y01800Y02V02T03802E02T03603702X03303202402X03703800Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B02V02T03801903A02T03603702X03303203700Y01800Y02V02T03802603302S02T02F03303602Z02402X03703800Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B03203302S02T01902T02U02U02X02R02X02T03202R03D00Y01800Y02V02T03801X03C02F03303602Z02402X03703800Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B03802P03702Z01902T02U02U02X02R02X02T03202R03D00Y01800Y02T03C03403303603802603302S02T02F03303602Z00Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B03203302S02T01902T02U02U02X02R02X02T03202R03D01902T03C02R02T03000Y01800Y02T03C03403303603801X03C02F03303602Z00Y01M00Y01B03702X03802T01B03703802P03802X03703802X02R03701B03802P03702Z01902T02U02U02X02R02X02T03202R03D01902T03C02R02T03000Y01800Y03703802P03603801W03302R03903102T03203800Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B03703802P03603801902S03302R03903102T03203800Y01800Y02R02W02P03202V02T01W02T02U02P03903003801W02T03402P03603800Y01M00Y01B03702X03802T01B03903702T03601B02R02W02P03202V02T01902S02T03402P03603803102T03203801903702T03002T02R03800Y01800Y02V02T03801W02P03802P02B03303903602R02T00Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B03002X03703800Y01800Y02V02T03801W01U01T03003000Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B02S02Q01902P03003000Y01800Y02V02T03801W02Q01Y03303603102402X03703800Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B02V02T03801903802P02Q03002T03700Y01800Y02V02T03801T03403402C02P02Q03002T00Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B02V02T03801902P03403401903802P02Q03002T03700Y01800Y02V02T03801W02P03802P02C02P02Q03002T01V03303003903103200Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B02V02T03801902R03303003903103203700Y01800Y02V02T03802C02P02Q03002T01V03303003903103200Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B02V02T03801902P03403401902R03303003903103203700Y01800Y02V02T03802A03903002T00Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B02V02T03801903603903002T00Y01800Y02V02T03801V03303103403303202T03203802C03D03402T00Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B02V02T03801902R03303103403303202T03203801903803D03402T00Y01800Y02P02S02S02B03303903602R02T01W02P03802P00Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B03702P03A02T00Y01800Y02V02T03801W02P03802P02A02T03703303903602R02T02402X03703800Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B02V02T03801903A02X02T03B01902S02P03802P00Y01800Y02S02T03002T03802T01W02P03802P02B03303903602R02T00Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B02S02T03002T03802T00Y01800Y03702T03801W02T02Q03902V00Y01M00Y01B03702X03802T01B02S02P03802P01903703303903602R02T01B02S02T03802P02X03000Y01800Y02S02P03802P02B03303903602R02T01W02T02Q03902V00Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B02S02T03802P02X03000Y01800Y02V02T03802B03303903602R02T01W02P03802P02403302V00Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B03003302V00Y01800Y02V02T03801T03402X01V03303003903103203700Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B02V02T03801902P03402X01902R03303003903103203700Y01800Y03703802P03603802103202U03300Y01M00Y01B03702X03802T01B03403603302R02T03703701B03703802P03603801902X03202U03300Y01800Y03101V03303003002T02R03802A03903002T02402X03703800Y01M00Y01B03703D03703802T03101B02R03303003002T02R03801B03603903002T01903002X03703800Y01800Y03101V03303003002T02R03802A03903002T02C03D03402T00Y01M00Y01B03703D03703802T03101B02R03303003002T02R03801B03603903002T01903803D03402T00Y01800Y03101V03303003002T02R03802A03903002T02B02P03A02T00Y01M00Y01B03703D03703802T03101B02R03303003002T02R03801B03603903002T01903702P03A02T00Y01800Y03101V03303003002T02R03802A03903002T01W02T03000Y01M00Y01B03703D03703802T03101B02R03303003002T02R03801B03603903002T01902S02T03000Y01800Y03101V03303003002T02R03802A03903002T01X03202P02Q03002T00Y01M00Y01B03703D03703802T03101B02R03303003002T02R03801B03603903002T01902T03202P02Q03002T00Y01800Y03101V03303003002T02R03801W02P03802P02B03802P03603800Y01M00Y01B03703D03703802T03101B02R03303003002T02R03801B02S02P03802P01903703802P03603800Y01800Y03101V03303003002T02R03802A03903002T01V03003303202T00Y01M00Y01B03703D03703802T03101B02R03303003002T02R03801B03603903002T01902R03003303202T00Y01800Y03101V03303003002T02R03802403302V02402X03703800Y01M00Y01B03703D03703802T03101B02R03303003002T02R03801B03003302V01903002X03703800Y01800Y02V02T03802803303603802402X03703800Y01M00Y01B03703D03703802T03101B03403903702W02P03402X01B03002X03703800Y01800Y02Z02T03D03B03303602S03703002X03703800Y01M00Y01B03703D03703802T03101B02Z02T03D03B03303602S03701B03002X03703800Y01800Y02Z02T03D03B03303602S03703702P03A02T00Y01M00Y01B03703D03703802T03101B02Z02T03D03B03303602S03701B03702P03A02T00Y01800Y02Z02T03D03B03303602S03702S02T03002T03802T00Y01M00Y01B03703D03703802T03101B02Z02T03D03B03303602S03701B02S02T03002T03802T00Y01800Y02U02T02T02S02Q02P02R02Z03002X03703800Y01M00Y01B03703D03703802T03101B02U02T02T02S02Q02P02R02Z01B03002X03703800Y01800Y02U02T02T02S02Q02P02R02Z02T03C03403303603800Y01M00Y01B03703D03703802T03101B02U02T02T02S02Q02P02R02Z01B02T03C03403303603800Y01800Y02U02T02T02S02Q02P02R02Z02S02T03802P02X03000Y01M00Y01B03703D03703802T03101B02U02T02T02S02Q02P02R02Z01B02S02T03802P02X03000Y01800Y02P03403401X02S02X03802403302V00Y01M00Y01B03703D03703802T03101B02Q03902P02P01902P03403403701902T02S02X03801903003302V01B03002X03703800Y01800Y03702P03A02T01U02P03702T02A02T03403303603800Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B03702P03A02T01902Q02P03702T00Y01800Y03602T03403303603801Y03303603102402X03703800Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B03002X03703800Y01800Y03602T03403303603802803902Q03002X03702W00Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B03403902Q03002X03702W00Y01800Y02S02T03002T03802T02A02T03403303603800Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B02S02T03002T03802T00Y01800Y02V02T03802A02T03403303603801Y03303603102402X03703800Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B02U03303603101903002X03703800Y01800Y02V02T03802B03D03703802T03101Y02X02T03002S03700Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B02V02T03801903703D03703802T03101902U02X02T03002S03700Y01800Y02V02T03801Y03303603102R03303203403303202T03203800Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B02P03003001902R03303103403303202T03203803700Y01800Y03702P03A02T02A02T03403303603800Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B03702P03A02T01902X03202U03300Y01800Y02V02T03801T03403401Y03303603100Y01M00Y01B03703D03703802T03101B02U03303603101B02V02T03801902U03303603103700Y01800Y03703303603802402X03703800Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B03703303603801903002X03703800Y01800Y02R03002X02R02Z02B03303603800Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B03703303603800Y01800Y03803303401T02S02603302C03303400Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B03702T03801903803303400Y01800Y02V02T03802A02T03402T02P03801Y02X03002T02S00Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B03602T03402T02P03801902U02X03002T02S00Y01800Y02P03403403701V03303003002T02R03802B02P03A02T00Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801902R03303003002T02R03801B03702P03A02T00Y01800Y01T03003001V03303103403303202T03203803700Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801902R03303003002T02R03801B02P03003001902R03303103403303202T03203803700Y01800Y02R03303003002T02R03801Z02T03802B03D03703802T03101Y02X02T03002S03700Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801902R03303003002T02R03801B02V02T03801903703D03703802T03101902U02X02T03002S03700Y01800Y02R03303003002T02R03802903902T03603D00Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B02R03303003002T02R03801903503902T03603D00Y01800Y02R03303003002T02R03802903902T03603D01X03C02R02T03000Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B02R03303003002T02R03801903503902T03603D01902T03C02R02T03000Y01800Y02R03903703803303102X03E02T02S01Y02X03002T00Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B02R03903703803303102X03E02T02S01902U02X03002T00Y01800Y02S03303B03203003302P02S02801W01Y00Y01M00Y01B03702X03802T01B03603902R01B02S03303B03203003302P02S01903402S02U00Y01800Y02R03903401W03303B03202802S02U00Y01M00Y01B03702X03802T01B02Q02P03802R02W01902S03303B03203003302P02S01B03402S02U01902T03C03400Y01800Y03303902R02B02W03303603802603303802T00Y01M00Y01B03702X03802T01B03303902R01B02Q02P03802R02W01903102T03703702P02V02T00Y01800Y02S03303B03203003302P02S02F03303602S00Y01M00Y01B03702X03802T01B02Q02Y03903801B02S03303B03203003302P02S01903B03303602S00Y01800Y02V02T03802A02T03403303603801W02T03802P02X03000Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B02V02T03800Y01800Y02P03403403702A02T03403303603802402X03703800Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B03503902T03603D00Y01800Y02P03403403702A02T03403303603801Z03602P03402W00Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B03503902T03603D01902V03602P03402W00Y01800Y02R03303103103303202903902T03603D02402X03703800Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B02R03303103103303201903503902T03603D01903002X03703800Y01800Y03702P03A02T01V03303103103303202903902T03603D00Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B03702P03A02T01902R03303103103303201903503902T03603D00Y01800Y02S02T03001V03303103103303202903902T03603D00Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B02R03303103103303201903503902T03603D01902S02T03002T03802T00Y01800Y03602T03403303603801X03C02R02T03000Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B03503902T03603D01902T03C02R02T03000Y01800Y03802W02X03602S03402P03603803D02A02T03403303603801X03C02R02T03000Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B03802W02X03602S03402P03603803D01903503902T03603D01902T03C02R02T03000Y01800Y03802W03602T02T02A02T03403303603802402X03703800Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B03802W02X03602S03402P03603803D01903503902T03603D00Y01800Y03802W03602T02T02A02T03403303603801Z03602P03402W00Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B03802W02X03602S03402P03603803D01903503902T03603D01902V03602P03402W00Y01800Y02V02T03802003303802A02T03403303603800Y01M00Y01B02P03402X01B02W03303102T01B02W03303801903602T03403303603800Y01800Y02X03702002P03701X03102P02X03000Y01M00Y01B03702X03802T01B03803303303003701B02R02W02T02R02Z01902T03102P02X03000Y01800Y03902T03703802R02A02T03102X03202S02T03600Y01M00Y01B03702X03802T01B03902T03703802R01B03303202T01902R03002X02R02Z01903602T03102X03202S02T03600Y01800Y03602T03403303603801Y03603303203801W03303B03203003302P02S00Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B02U03603303203801902S03303B03203003302P02S00Y01800Y03602T03403303603802B03503001V03303202U02X02V00Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B03703503001902R03303202U02X02V00Y01800Y03602T03403303603802B03503001V03303202U02X02V02B02P03A02T00Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B03703503001902R03303202U02X02V01903702P03A02T00Y01800Y03602T03403303603802B03503002903902T03603D00Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B03703503001903503902T03603D00Y01800Y03602T03403303603802B03503002903902T03603D01X03C02R02T03000Y01M00Y01B03702X03802T01B02P03403403701903602T03403303603801B03703503001903503902T03603D01902T03C02R02T03000Y01800Y02V02T03802A02T03402T02P03801V03303103403303202T03203803700Y01M00Y01B03703D03703802T03101B02P03403403701903602T03403303603801B03602T03402T02P03801903802P02Q03002T01902P03003001902R03303103403303202T03203803700Y01800Y02V02T03801Z03303302S03702402X03703800Y01M00Y01B03703D03703802T03101B02V03303302S03701B03002X03703800Y01800Y02P02S02S01Z03303302S03700Y01M00Y01B03703D03703802T03101B02V03303302S03701B02T02S02X03800Y01800Y02S02T03001Z03303302S03700Y01M00Y01B03703D03703802T03101B02V03303302S03701B02S02T03002T03802T00Y01800Y02V02T03801Z03303302S03701W02T03802P02X03000Y01M00Y01B03703D03703802T03101B02V03303302S03701B02S02T03802P02X03000Y01800Y02V02T03802802P03D02B02T02P03602R02W00Y01M00Y01B03703D03703802T03101B03402P03D03102T03203801903303602S02T03601B02V02T03801903002X03703800Y01800Y02P03903802W02703602X03E02T00Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01902P03903802W03303602X03E02T01B03702P03A02T00Y01800Y02V02T03802703602S02T03602A02T03703903003800Y01M00Y01B02P03402X01B03402P03D03102T03203801903303602S02T03601B02V02T03801903402P03D01903602T03703903003800Y01800Y02V02T03801T03402X02802P03D02A02T03703903003800Y01M00Y01B02P03402X01B03402P03D03102T03203801903303602S02T03601B02V02T03801903402P03D01903602T03703903003800Y01800Y02V02T03801T02R02R03602T02S02X03802402X03703800Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01902P03903802W03303602X03E02T01B03002X03703800Y01800Y03702T02P03602R02W02203302Q02D03702T03600Y01M00Y01B03703D03703802T03101B03903702T03601B03903702T03601902Y03302Q01903702T02P03602R02W00Y01800Y03302Q02Y02T02R03802703403802X03303200Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01902P03903802W03303602X03E02T01B03302Q02Y02T02R03801903303403802X03303200Y01800Y02V02T03802703602S02T03601W02P03802P00Y01M00Y01B03702X03802T01B03402P03D03102T03203801903303602S02T03601B02V02T03801903303602S02T03601902S02P03802P00Y01800Y02V02T03802703602S02T03602A02T03703903003802103202U03300Y01M00Y01B02P03402X01B03402P03D03102T03203801903303602S02T03601B02V02T03801903303602S02T03601902S02P03802P00Y01800Y02V02T03802803603302Y02T02R03802402X03703800Y01M00Y01B03703D03703802T03101B02V03303302S03701B02P03003000Y01800Y02V02T03802703602S02T03601W02T03802P02X03000Y01M00Y01B03703D03703802T03101B03402P03D03102T03203801903303602S02T03601B02S02T03802P02X03000Y01800Y02V02T03802B02X03802T02703602S02T03601W02T03802P02X03000Y01M00Y01B03702X03802T01B03402P03D03102T03203801903303602S02T03601B02V02T03801902S02T03802P02X03000Y01800Y02T03C03403303603802703602S02T03600Y01M00Y01B03703D03703802T03101B03402P03D03102T03203801903303602S02T03601B02V02T03801903002X03703801902T03C02R02T03000Y01800Y02V02T03802A02T02U03903202S02402X03703800Y01M00Y01B03703D03703802T03101B03402P03D03102T03203801903303602S02T03601B02V02T03801902P03403403003D01903602T02U03903202S00Y01800Y02T03C03403303603802A02T02U03903202S00Y01M00Y01B03703D03703802T03101B03402P03D03102T03203801903303602S02T03601B02V02T03801902P03403403003D01903602T02U03903202S01902T03C02R02T03000Y01800Y02V02T03802A02T02U03903202S02403302V00Y01M00Y01B03703D03703802T03101B03402P03D03102T03203801903303602S02T03601B02V02T03801903602T02U03903202S00Y01800Y02T03C03403303603802A02T02U03903202S02403302V00Y01M00Y01B03703D03703802T03101B03402P03D03102T03203801903303602S02T03601B02V02T03801903602T02U03903202S01902T03C02R02T03000Y01800Y02P03403403003D02A02T02U03903202S00Y01M00Y01B03702X03802T01B03402P03D03102T03203801903303602S02T03601B02P03403403003D01903602T02U03903202S00Y01800Y02R02W02T02R02Z02B02T03202S01V03302S02T00Y01M00Y01B03702X03802T01B03402P03D03102T03203801903303602S02T03601B02R02W02T02R02Z01903702T03202S01902R03302S02T00Y01800Y02V02T03802803B02S01V03302S02T00Y01M00Y01B03702X03802T01B03402P03D03102T03203801903303602S02T03601B02V02T03801903402P03703703B03303602S01902R03302S02T00Y01800Y03702P03A02T02B02P02U02T02803B02S00Y01M00Y01B03702X03802T01B03402P03D03102T03203801903303602S02T03601B03702P03A02T01903402P03703703B03303602S00Y01800Y02V02T03802A02T02U03903202S01T03403403003D01W02T03802P02X03000Y01M00Y01B03703D03703802T03101B03402P03D03102T03203801903303602S02T03601B03602T02U03903202S01902S02T03802P02X03000Y01800Y02P02V03602T02T02A02T02U03903202S00Y01M00Y01B03703D03703802T03101B03402P03D03102T03203801903303602S02T03601B02P02V03602T02T01903602T02U03903202S00Y01800Y03602T02U03903702T02A02T02U03903202S00Y01M00Y01B03703D03703802T03101B03402P03D03102T03203801903303602S02T03601B03602T02U03903702T01903602T02U03903202S00Y01800Y02P02S03102X03202A02T02U03903202S00Y01M00Y01B03703D03703802T03101B03402P03D03102T03203801903303602S02T03601B02P02S03102X03201903602T02U03903202S00Y01800Y02V02T03802Y03903703802102S02T03203802X03803D00Y01M00Y01B03702X03802T01B02X02S02T03203802X03803D01B03603303002T00Y01800Y02V02T03801T03903802W02402X03703802V03603303903400Y01M00Y01B03703D03703802T03101B02P03903802W01902V03603303903401B02X03202S02T03C00Y01800Y03702T02P03602R02W01V03303202U02X02V00Y01M00Y01B03703D03703802T03101B03903702T03601B03702T02P03602R02W01902R03303202U02X02V00Y01800Y03702T02P03602R02W02802T03303403002T00Y01M00Y01B03703D03703802T03101B03903702T03601B03702T02P03602R02W00Y01800Y02T03C03403303603802D03702T03603700Y01M00Y01B03703D03703802T03101B03903702T03601B02T03C03403303603801903903702T03603700Y01800Y02X03103403303603800Y01M00Y01B03703D03703802T03101B03903702T03601B02X03103403303603800Y01800Y02V02T03802B03802P02U02U00Y01M00Y01B03702X03802T01B03903702T03601B02X03202U03301902R03303202U02X02V01R03803D03402T01P03703802P02U02U00Y01800Y02V02T03802B03803902S02T03203800Y01M00Y01B03702X03802T01B03903702T03601B02X03202U03301902R03303202U02X02V01R03803D03402T01P03703803902S02T03203800Y01800Y02S02T03002D03702T03603700Y01M00Y01B03703D03703802T03101B03903702T03601B02S02T03002T03802T00Y01800Y02V02T03802D03702T03601V02U02V00Y01M00Y01B03703D03703802T03101B03903702T03601B02R03602T02P03802T01903903702T03601902R03303202U02X02V00Y01800Y02P02S02S02D03702T03601V02U02V00Y01M00Y01B03703D03703802T03101B03903702T03601B02P02S02S00Y01800Y02P02S02S02802T03603703303202P03002R02T03203802T03600Y01M00Y01B03703D03703802T03101B03402T03603703303202P03001902R02T03203802T03601B02P02S02S00Y01800Y02S02Q02402X03703800Y01M00Y01B03703D03703802T03101B02S02Q01902R03303202U02X02V01B03002X03703800Y01800Y03903702T03602B02T02P03602R02W02E01E00Y01M00Y01B03703D03703802T03101B03903702T03601B03702T02P03602R02W03A01E00Y01800Y03703D03703802T03101X03C03403303603802D03702T03600Y01M00Y01B03703D03703802T03101B03903702T03601B02T03C03403303603801903903702T03601903503902T03902T00Y01800Y02X03103403303603802D03702T03602E01E00Y01M00Y01B03703D03703802T03101B03903702T03601B02X03103403303603803A01E00Y01800Y03702P03A02T02B02X02V03200Y01M00Y01B03703D03703802T03101B03802T02P03101B03702P03A02T00Y01800Y03702P03A02T03A02B02X02V03200Y01M00Y01B03703D03703802T03101B03802T02P03101B03702P03A02T03A00Y01800Y03702X02V03202402X03703800Y01M00Y01B03703D03703802T03101B03802T02P03101B03002X03703803700Y01800Y02S02T03002B02X02V03200Y01M00Y01B03703D03703802T03101B03802T02P03101B02S02T03002T03802T00Y01800Y03702P03A02T02B03802P02U02U00Y01M00Y01B03703D03703802T03101B03802T02P03101B03703802P02U02U01903702P03A02T00Y01800Y02S02T03002B03802P02U02U00Y01M00Y01B03703D03703802T03101B03802T02P03101B03703802P02U02U01902S02T03002T03802T00Y01800Y02P02S02S01Z03603303903400Y01M00Y01B03703D03703802T03101B03802T02P03101B02P02S02S01902V03603303903400Y01800Y02V03603303903402402X03703800Y01M00Y01B03703D03703802T03101B03802T02P03101B02P03003003A00Y01800Y02V03603303903402402X03703803700Y01M00Y01B03703D03703802T03101B03802T02P03101B02P03003000Y01800Y02S02T03001Z03603303903400Y01M00Y01B03703D03703802T03101B03802T02P03101B02S02T03001902V03603303903400Y01800Y02S02T03402P03603803A02502P03202P02V02T00Y01M00Y01B02P03402X01B03903702T03601B02S02T03402P03603803A01R03803D03402T01P03102P03202P02V02T03600Y01800Y03702P03A02T01W02T03402P03603800Y01M00Y01B03703D03703802T03101B02S02T03402P03603803102T03203801B03702P03A02T03A00Y01800Y03702P03A02T02203302Q00Y01M00Y01B03703D03703802T03101B02Y03302Q01B03702P03A02T01902Y03302Q01903903702T03600Y01800Y02S02T03001W02T03402P03603800Y01M00Y01B03703D03703802T03101B02S02T03402P03603803102T03203801B02S02T03002T03802T03A00Y01800Y02T03C03403303603801W02T03402P03603800Y01M00Y01B03703D03703802T03101B02S02T03402P03603803102T03203801B02T03C03403303603800Y01800Y02S02T03001W02T03402D03702T03600Y01M00Y01B03703D03703802T03101B02Y03302Q01B02S02T03001902Y03302Q01903903702T03600Y01800Y02T02S02X03802A03303303801W02T03400Y01M00Y01B03703D03703802T03101B02S02T03402P03603803102T03203801B03603303303801903202P03102T00Y01800Y03703D03703802T03102203302Q02402X03703800Y01M00Y01B03703D03703802T03101B02Y03302Q01B02P03003000Y01800Y03703303603802203302Q00Y01M00Y01B03703D03703802T03101B02Y03302Q01B03703303603801902P03003000Y01800Y02P02S02S02203302Q00Y01M00Y01B03703D03703802T03101B02Y03302Q01B02P02S02S01902Y03302Q00Y01800Y02S02T03002203302Q00Y01M00Y01B03703D03703802T03101B02Y03302Q01B02S02T03001902Y03302Q00Y01800Y02S02T03002Y03302Q02D03702T03600Y01M00Y01B03703D03703802T03101B02Y03302Q01B02S02T03001902Y03302Q01903903702T03600Y01800Y02V02T03801W02T03402P03603802203302Q00Y01M00Y01B03703D03703802T03101B02S02T03402P03603803102T03203801B02S02T03402P03603803102T03203801902X03202U03300Y01800Y03702T03801W02T03402P03603802203302Q00Y01M00Y01B03703D03703802T03101B02S02T03402P03603803102T03203801B03702T03801902S02T03402P03603801902Y03302Q00Y01800Y02X03103403303603802203302Q02D03702T03600Y01M00Y01B03703D03703802T03101B02Y03302Q01B02X03103403303603801902Y03302Q03700Y01800Y02V02T03802203302Q02D03702T03602402X03703800Y01M00Y01B03703D03703802T03101B02Y03302Q01B02Y03302Q01903903702T03601903002X03703800Y01800Y03903402S02P03802T02203302Q00Y01M00Y01B03703D03703802T03101B02S02T03402P03603803102T03203801B03903402S02P03802T01902S02T03402P03603801902Y03302Q00Y01800Y02V02T03801W02T03402P03603802203302Q02D03702T03603700Y01M00Y01B03703D03703802T03101B02Y03302Q01B02V02T03801902S02T03402P03603801902Y03302Q01903903702T03603700Y01800Y02P02S02S02203302Q02D03702T03603700Y01M00Y01B03703D03703802T03101B02Y03302Q01B02P02S02S01902Y03302Q01903903702T03603700Y01800Y02X03202U03301T03903302U02U02X02R02X02P03002402X03703800Y01M00Y01B03703D03703802T03101B03702T02P03001B03302U02U02X02R02X02P03001903702T02P03001903002X03703800Y01800Y02P02S02S02702U02U02X02R02X02P03000Y01M00Y01B03703D03703802T03101B03702T02P03001B02P02S02S01903302U02U02X02R02X02P03001903702T02P03000Y01800Y02S02T03002702U02U02X02R02X02P03000Y01M00Y01B03703D03703802T03101B03702T02P03001B02S02T03001903302U02U02X02R02X02P03001903702T02P03000Y01800Y02P02S02S03302U02U02X02R02X02P03002D03702T03600Y01M00Y01B03703D03703802T03101B03702T02P03001B02P02S02S01903302U02U02X02R02X02P03001903702T02P03001903903702T03600Y01800Y02S02T03003302U02U02X02R02X02P03002D03702T03600Y01M00Y01B03703D03703802T03101B03702T02P03001B02S02T03001903302U02U02X02R02X02P03001903702T02P03001903903702T03600Y01800Y03702T02P03002W02X03703803303603D02D03702T03600Y01M00Y01B03703D03703802T03101B03702T02P03001B03702T02P03001902W02X03703803303603D01903903702T03600Y01800Y03702T02P03002W02X03703803303603D00Y01M00Y01B03703D03703802T03101B03702T02P03001B03702T02P03001902W02X03703803303603D00Y01800Y03302U02U02X02R02X02P03003702T02P03002D03702T03603700Y01M00Y01B03703D03703802T03101B03702T02P03001B03302U02U02X02R02X02P03001903702T02P03001903903702T03603700Y01800Y02T03C03403303603803702T02P03002002X03703803303603D00Y01M00Y01B03703D03703802T03101B03702T02P03001B02T03C03403303603801903702T02P03001902W02X03703803303603D00Y01800Y03702X02V03202P03803903602T02A02T02R03303602S00Y01M00Y01B03703D03703802T03101B03702T02P03001B03402T03603703303202P03001903702T02P03001903602T02R03303602S00Y01800Y03602T02R03303602S01X03C03403303602S00Y01M00Y01B03703D03703802T03101B03702T02P03001B03402T03603703303202P03001903702T02P03001903602T02R03303602S01902T03C03403303603800Y01800Y02X03103403303603803802P02V03903702T03600Y01M00Y01B03703D03703802T03101B03903702T03601B02X03103403303603801903802P02V01903903702T03600Y01800Y02S03303B03203802P02V03903702T03600Y01M00Y01B03703D03703802T03101B03903702T03601B02S03303B03201903802P02V01903903702T03600Y01800Y03903203003302R02Z02D03702T03600Y01M00Y01B03703D03703802T03101B03803303303003701B03903203003302R02Z01903903702T03603202P03102T00Y01800Y02V02T03801T03403402D03702T03603700Y01M00Y01B03703D03703802T03101B02Y03302Q01B02V02T03801902P03403401903903702T03603700Y01800Y03702P03A02T01T03403402D03702T03603700Y01M00Y01B03703D03703802T03101B02Y03302Q01B03702P03A02T01902P03403401903903702T03603700Y01800Y02V02T03802E02T03602X02U03D02B03D03703802T03100Y01M00Y01B03703D03703802T03101B03702T02P03001B02V02T03801903203301903A02P03002X02S02P03802T00Y01800Y03702T03802E02T03602X02U03D00Y01M00Y01B03703D03703802T03101B03702T02P03001B03702P03A02T01903203301903A02P03002X02S02P03802T00Y01800Y03403303703802A02T02R03D02R03002T00Y01M00Y01B03703D03703802T03101B03903702T03601B03602T02R03D02R03002T00Y01800Y02P03403403703002X03703800Y01M00Y01B03703D03703802T03101B02P03403403701903803D03402T01B03002X03703800Y01800Y02P03403403703602T03002T02P03700Y01M00Y01B03703D03703802T03101B02P03403403701903803D03402T01B03602T03002T02P03702T00Y01800Y02P03403403702S02T03002T03802T00Y01M00Y01B03703D03703802T03101B02P03403403701903803D03402T01B02S02T03002T03802T00Y01800Y03203303802X02U03D03702P03A02T00Y01M00Y01B03703D03703802T03101B03203303802X02U03D01B03702P03A02T00Y01800Y03203303802X02U03D03002X03703800Y01M00Y01B03703D03703802T03101B03203303802X02U03D01B03002X03703800Y01800Y03203303802X02U03D02S02T03802P02X03000Y01M00Y01B03703D03703802T03101B03203303802X02U03D01B02S02T03802P02X03000Y01800Y02P03403403702S02T03802P02X03000Y01M00Y01B03703D03703802T03101B02P03403403701903803D03402T01B02S02T03802P02X03000Y01800Y03203303802X02U03D02S02T03002T03802T00Y01M00Y01B03703D03703802T03101B03203303802X02U03D01B02S02T03002T03802T00Y01800Y02V02T03802B02T03603A02X02R02T01V03303903203800Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B03702T03603A02X02R02T01902R03303903203800Y01800Y02V02T03801W02T03402P03603801V03303903203800Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B02S02T03402P03603803102T03203801902R03303903203800Y01800Y03203303802X02R02T02B02P03A02T00Y01M00Y01B03703D03703802T03101B03203303802X02U02X02R02P03802X03303201B03702P03A02T00Y01800Y02S02T03002T03802T03203303802X02R02T00Y01M00Y01B03703D03703802T03101B03203303802X02U02X02R02P03802X03303201B02S02T03002T03802T00Y01800Y03203303802X02R02T01W02T03802P02X03000Y01M00Y01B03703D03703802T03101B03203303802X02U02X02R02P03802X03303201B02S02T03802P02X03000Y01800Y03203303802X02R02T02402X03703800Y01M00Y01B03703D03703802T03101B03203303802X02U02X02R02P03802X03303201B02X03202S02T03C00Y01800Y03403902Q03002X03702W02603303802X02R02T00Y01M00Y01B03703D03703802T03101B03203303802X02U02X02R02P03802X03303201B03403902Q03002X03702W00Y01800Y03203303802X02U03D02803902Q03002X03702W00Y01M00Y01B03703D03703802T03101B03102T03703702P02V02T01B03203303802X02U03D01903403902Q03002X03702W00Y01800Y02P03403403002X02R02P03802X03303200Y01M00Y01B03703D03703802T03101B02S02T03402P03603803102T03203801B02P03903802W01903803602T02T01R02P03903802W01P02P03403403002X02R02P03802X03303200Y01800Y02R03002P03703702X02U03D02402X03703800Y01M00Y01B03703D03703802T03101B03203303802X02U02X02R02P03802X03303201903803D03402T01B02P03003000Y01800Y02R03002P03703702X02U03D02B02P03A02T00Y01M00Y01B03703D03703802T03101B03203303802X02U02X02R02P03802X03303201903803D03402T01B02P02S02S01902V03603303903400Y01800Y02R03002P03703702X02U03D01W02T03000Y01M00Y01B03703D03703802T03101B03203303802X02U02X02R02P03802X03303201903803D03402T01B02S02T03001902V03603303903400Y01800Y02P03403403703702P03A02T00Y01M00Y01B03703D03703802T03101B02P03403403701903803D03402T01B03702P03A02T00Y01800Y02P03403403703703303603800Y01M00Y01B03703D03703802T03101B02P03403403701903803D03402T01B03703303603800Y01800Y03702X03802T02R03303202U02X02V02B02P03A02T00Y01M00Y01B03703D03703802T03101B03702X03802T01903303403802X03303203701B03702P03A02T00Y01800Y02R02P03603303903702T03002402X03703800Y01M00Y01B03703D03703802T03101B02Q02P03203202T03601B03002X03703800Y01800Y02R02P03603303903702T03002B02P03A02T00Y01M00Y01B03703D03703802T03101B02Q02P03203202T03601B02S02P03802P01903702P03A02T00Y01800Y02R02P03603303903702T03001W02P03802P02B03303603800Y01M00Y01B03703D03703802T03101B02Q02P03203202T03601B02S02P03802P01903703303603800Y01800Y02Q02P03203202T03601W02P03802P01W02T03000Y01M00Y01B03703D03703802T03101B02Q02P03203202T03601B02S02P03802P01902S02T03000Y01800Y02V02T03802W03303802402X03703800Y01M00Y01B03703D03703802T03101B02P03403401903703402T02R02X02P03001B02V02T03801902W03303801903002X03703800Y01800Y03702P03A02T02W03303801T03403400Y01M00Y01B03703D03703802T03101B02P03403401903703402T02R02X02P03001B03702P03A02T01902W03303801902P03403400Y01800Y02V02T03802S02T02U02P03903003801T03403400Y01M00Y01B03703D03703802T03101B02S02T02U02P03903003801902P03403401B02X03202S02T03C00Y01800Y02S02T03002S02T02U02P03903003801T03403400Y01M00Y01B03703D03703802T03101B02S02T02U02P03903003801902P03403401B02S02T03002T03802T00Y01800Y03702P03A02T02S02T02U02P03903003801T03403400Y01M00Y01B03703D03703802T03101B02S02T02U02P03903003801902P03403401B03702P03A02T00Y01800Y02V02T03801V03303103102T03203800Y01M00Y01B02P03402X01B02R03303103102T03203801903102P03202P02V02T01B02X03202S02T03C00Y01800Y02V02T03802B03D03703802T03101V03303103102T03203800Y01M00Y01B03703D03703802T03101B02R03303103102T03203801903102P03202P02V02T01B02X03202S02T03C00Y01800Y03702P03A02T01V03303103102T03203800Y01M00Y01B03703D03703802T03101B02R03303103102T03203801903102P03202P02V02T01B03702P03A02T00Y01800Y02V02T03802603303802X02R02T02103202S02T03C00Y01M00Y01B03703D03703802T03101B03203303802X02R02T01B02X03202S02T03C00Y01800Y03702P03A02T02603303802X02R02T00Y01M00Y01B03703D03703802T03101B03203303802X02R02T01B03702P03A02T00Y01800Y03702P03A02T03702T03203702X03802X03A02T02F03303602S00Y01M00Y01B03703D03703802T03101B03702T03203702X03802X03A02T01B03702T03801903B03303602S03700Y01800Y02V02T03802F03303602S00Y01M00Y01B03703D03703802T03101B03702T03203702X03802X03A02T01B02V02T03801903B03303602S03700Y01800Y03702P03A02T03B02T02R02W02P03800Y01M00Y01B03703D03703802T03101B03B02T02R02W02P03801902R03303202U02X02V01B03702P03A02T00Y01800Y02V02T03803B02T02R02W02P03800Y01M00Y01B03703D03703802T03101B03B02T02R02W02P03801902R03303202U02X02V01B02X03202U03300Y01800Y03802W02X03602S03402P03603803D02402X03703800Y01M00Y01B03703D03703802T03101B03802W02X03602S03402P03603803D01B02X03202S02T03C00Y01800Y02P02S02S03802W02X03602S02802P03603803D00Y01M00Y01B03703D03703802T03101B03802W02X03602S03402P03603803D01B02P02S02S00Y01800Y02T02S02X03803802W02X03602S02802P03603803D00Y01M00Y01B03703D03703802T03101B03802W02X03602S03402P03603803D01B02T02S02X03800Y01800Y02S02T03003802W02X03602S02802P03603803D00Y01M00Y01B03703D03703802T03101B03802W02X03602S03402P03603803D01B02S02T03002T03802T00Y01800Y03702T03802B03802P03803903700Y01M00Y01B03703D03703802T03101B03802W02X03602S03402P03603803D01B03702T03801903703802P03803903700Y01800Y02V02T03801T03903802W02402X03703800Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01902V03603303903401B02P03003001902V03603303903400Y01800Y02V02T03801T03903802W02C03602T02T00Y01M00Y01B03703D03703802T03101B02P03903802W01902V03603303903401B03803602T02T00Y01800Y02V02T03801T03903802W02802T03603703303200Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01903903702T03601B03002X03703800Y01800Y02P02S02S01T03903802W01Z03603303902C03602T02T00Y01M00Y01B03703D03703802T03101B02P03903802W01902V03603303903401B02P02S02S00Y01800Y03602T03202P03102T01T03903802W01Z03603303902C03602T02T00Y01M00Y01B03703D03703802T03101B02P03903802W01902V03603303903401B03602T03202P03102T00Y01800Y02V02T03801T03903802W01U03D02802T03603703303200Y01M00Y01B03703D03703802T03101B03903702T03601902P03903802W03701B02X03202U03301902P03903802W00Y01800Y02S02T03002T03802T01T03903802W01Z03603303902C03602T02T00Y01M00Y01B03703D03703802T03101B02P03903802W01902V03603303903401B02S02T03002T03802T00Y01800Y02V02T03802C02P02V02P03003000Y01M00Y01B03703D03703802T03101B02P03803803602X02Q03903802T01903802P02V01B02P03003000Y01800Y03702T03801T03903802W01Z03603303902C03602T02T00Y01M00Y01B03703D03703802T03101B02P03903802W01902V03603303903401B03702T03800Y01800Y02P02S02S01T03903802W02802T03603703303200Y01M00Y01B03703D03703802T03101B03903702T03601902P03903802W01B03702P03A02T00Y01800Y02S02T03002T03802T01T03903802W02802T03603703303200Y01M00Y01B03703D03703802T03101B03903702T03601902P03903802W01B02S02T03002T03802T00Y01800Y02P02S02S01T03903802W01Z03603303900Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01902V03603303903401B03702P03A02T00Y01800Y02S02T03002T03802T01T03903802W01Z03603303900Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01902V03603303903401B02S02T03000Y01800Y02P02S02S01T02S03102X03200Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01903903702T03601B03702P03A02T00Y01800Y02S02T03002T03802T02P02S03102X03200Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01903903702T03601B02S02T03001903102P03202P02V02T00Y01800Y02S02T03001T03903802W01T02S03102X03200Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01903903702T03601B02S02T03001903903702T03600Y01800Y02Y03302Q02B02T02P03602R02W00Y01M00Y01B03703D03703802T03101B03903702T03601B03903702T03601902Y03302Q01903702T02P03602R02W00Y01800Y02V02T03802103202S02T03C02B02T03603A02X02R02T00Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B02X03202S02T03C01903702T03603A02X02R02T00Y01800Y02V02T03802803603302U02X03002T00Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B02X03202S02T03C01903403603302U02X03002T00Y01800Y02V02T03802B03802P03802X03703802X02R03700Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B02X03202S02T03C00Y01800Y02V02T03801W02T03402P03603801W02T03802P02X03000Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B02S02T03402P03603803102T03203801902S02T03802P02X03000Y01800Y02V02T03801X03603603303602403302V00Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B02T03603603303603700Y01800Y02V02T03802B02T03603A02X02R02T01W02T03802P02X03000Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B03702T03603A02X02R02T01902S02T03802P02X03000Y01800Y02V02T03802C02W02X03602S01V03303202U02X02V00Y01M00Y01B03703D03703802T03101B03003302V02X03201902R03303202U02X02V01B02V02T03801903802W02X03602S01902P03403403700Y01800Y02V02T03802403302V02X03201V03303202U02X02V00Y01M00Y01B02P03402X01B03003302V02X03201902R03303202U02X02V01B02V02T03800Y01800Y02V02T03802B03D03703802T03102403302V02X03201V03303202U02X02V00Y01M00Y01B03703D03703802T03101B03003302V02X03201902R03303202U02X02V01B02V02T03800Y01800Y03702T03802403302V02X03201V03303202U02X02V00Y01M00Y01B03703D03703802T03101B03003302V02X03201902R03303202U02X02V01B03702T03800Y01800Y03703D03703802T03101Y02X03002T02402X03703800Y01M00Y01B03703D03703802T03101B02U02X03002T01902T03C03403303603801B02V02T03801903002X03703800Y01800Y03703D03703802T03101T02S02S01X03C03403303603800Y01M00Y01B03703D03703802T03101B02U02X03002T01902T03C03403303603801B02P02S02S01902T03C03403303603801903103702V00Y01800Y03703D03703802T03102D03402S02P03802P00Y01M00Y01B03703D03703802T03101B02U02X03002T01902T03C03403303603801B03903402S02P03802T01902T03C03403303603801903103702V00Y01800Y03703D03703802T03101W02T03802P02X03000Y01M00Y01B03703D03703802T03101B02U02X03002T01902T03C03403303603801B02S02T03002T03802T00Y01800Y02P02R03802X03303203003302V03002X03703800Y01M00Y01B03703D03703802T03101B02P02R03802X03303201903003302V01B03002X03703800Y01800Y02P02R03802X03303203003302V02S02T03802P02X03000Y01M00Y01B03703D03703802T03101B02P02R03802X03303201903003302V01B02S02T03802P02X03000Y01800Y02P02R03802X03303203003302V01T03403400Y01M00Y01B03703D03703802T03101B02P02R03802X03303201903003302V01B02P03403401903003302V00Y01800Y02V02T03803003302V01T03403400Y01M00Y01B03703D03703802T03101B02P02R03802X03303201903003302V01B02V02T03801902P03403403700Y01800Y02V02T03803003302V01T03403401W02T03802P02X03000Y01M00Y01B03703D03703802T03101B02P02R03802X03303201903003302V01B02P03403401903003302V01902S02T03802P02X03000Y01800Y03702P03A02T02502X03202X03403603302V03602P03101V03303202U02X02V00Y01M00Y01B03703D03703802T03101B03102X03202X03403603302V03602P03101902R03303202U02X02V01B03702P03A02T00Y01800Y02V02T03802502X03202X03403603302V03602P03101V03303202U02X02V00Y01M00Y01B03703D03703802T03101B03102X03202X03403603302V03602P03101902R03303202U02X02V01B02X03202U03300Y01800Y03102T03703702P02V02T02603303802X02U03D00Y01M00Y01B03703D03703802T03101B03102T03703702P02V02T01B03203303802X02U03D00Y01800Y03203303802X02U03D01V02P03802T02V03303603D00Y01M00Y01B03703D03703802T03101B03102T03703702P02V02T01B03203303802X02U03D01902R02P03802T02V03303603D00Y01800Y03102T03703702P02V02S02T03002T03802T00Y01M00Y01B03703D03703802T03101B03102T03703702P02V02T01B03203303802X02U03D01902S02T03002T03802T00Y01800Y02U02T02T02S02Q02P02R02Z02S02T02P03000Y01M00Y01B03703D03703802T03101B02U02T02T02S02Q02P02R02Z01B02S02T02P03000Y01800Y02Z02T03D03B03303602S03002X03703803700Y01M00Y01B03703D03703802T03101B02W03303801902Z02T03D03B03303602S01B03002X03703803700Y01800Y02U02T02T02S02Q02P02R02Z03803D03402T03002X03703800Y01M00Y01B03703D03703802T03101B02U02T02T02S02Q02P02R02Z01B03803D03402T01903002X03703800Y01800Y02U02T02T02S02Q02P02R02Z03702P03A02T03803D03402T00Y01M00Y01B03703D03703802T03101B02U02T02T02S02Q02P02R02Z01B03702P03A02T01903803D03402T00Y01800Y02U02T02T02S02Q02P02R02Z03803D03402T02P03003000Y01M00Y01B03703D03703802T03101B02U02T02T02S02Q02P02R02Z01B03803D03402T01902P03003000Y01800Y02U02T02T02S02Q02P02R02Z03903402S02P03802T00Y01M00Y01B03703D03703802T03101B02U02T02T02S02Q02P02R02Z01B03903402S02P03802T01903703802P03803903700Y01800Y03702P03A02T02003303802B02T03603A02X02R02T00Y01M00Y01B03703D03703802T03101B02W03303801903702T03603A02X02R02T01B03702P03A02T00Y01800Y03703D03703802T03102003303802B02T03603A02X02R02T01T03403400Y01M00Y01B03703D03703802T03101B02W03303801903702T03603A02X02R02T01B03702P03A02T01902P03403400Y01800Y02V02T03802B03D03703802T03102003303802402X03703800Y01M00Y01B03703D03703802T03101B02W03303801903702T03603A02X02R02T01B03002X03703800Y01800Y02W03303802B02T03603A02X02R02T02B03303603800Y01M00Y01B03703D03703802T03101B02W03303801903702T03603A02X02R02T01B03703303603800Y01800Y03703D03703802T03101W02T03002T03802T02003303800Y01M00Y01B03703D03703802T03101B02W03303801903702T03603A02X02R02T01B02S02T03002T03802T00Y01800Y02W02X02S02T02003303802B02T03603A02X02R02T00Y01M00Y01B03703D03703802T03101B02W03303801903702T03603A02X02R02T01B02W02X02S02T00Y01800Y02W03303802B02T03603A02X02R02T01W02T03802P02X03000Y01M00Y01B03703D03703802T03101B02W03303801903702T03603A02X02R02T01B02S02T03802P02X03000Y01800Y03703D03703802T03101T03403402B03303603800Y01M00Y01B03703D03703802T03101B02W03303801903702T03603A02X02R02T01B02P03403401903703303603800Y01800Y03703D03703802T03102003303801T03403401W02T03000Y01M00Y01B03703D03703802T03101B02W03303801903702T03603A02X02R02T01B02P03403401902S02T03000Y01800Y03702T03801T03903803301Y02X03003000Y01M00Y01B03703D03703802T03101B02W03303801903702T03603A02X02R02T01B03702P03A02T01902P03903803301902U02X03003000Y01800Y03702T02P03602R02W02D03702T03600Y01M00Y01B03703D03703802T03101B03903702T03601B03702T02P03602R02W01903903702T03600Y01800Y02P03903802W02703602X03E02T02402X03703800Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01902P03903802W03303602X03E02T01B03002X03703800Y01800Y02S02T03001T02R02R03602T02S02X03800Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01902P03903802W03303602X03E02T01B02S02T03000Y01800Y02P02R02R03602T02S02X03801W02T03800Y01M00Y01B03703D03703802T03101B03703D03703802T03101902P03903802W01902P03903802W03303602X03E02T01B02S02T03802P02X03000Y01800Y02Y03302Q01T03003000Y01M00Y01B03703D03703802T03101B02Y03302Q01B02P03003000Y01800Y02X03202S02T03C02602P03A02B02P03A02T00Y01M00Y01B03703D03703802T03101B03202P03A02X02V02P03802X03303201B03202P03A01903702P03A02T00Y01800Y03703D03703802T03102602P03A02402X03703800Y01M00Y01B03703D03703802T03101B03202P03A02X02V02P03802X03303201B03002X03703800Y01800Y02X03202S02T03C02602P03A01W02T03000Y01M00Y01B03703D03703802T03101B03202P03A02X02V02P03802X03303201B02S02T03002T03802T00Y01800Y02X03202S02T03C02602P03A02B02T03803700Y01M00Y01B03703D03703802T03101B03202P03A02X02V02P03802X03303201B03202P03A01903903702T00Y01800Y03202P03A02B03303603802B02P03A02T00Y01M00Y01B03703D03703802T03101B03202P03A02X02V02P03802X03303201B03703303603801902P03003000Y01800Y03903402R02B03802P03802X03703802X02R03701T03403403003D01W02P03802P00Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B02P03403403003D01902S02P03802P00Y01800Y03903402R02B03802P03802X03703802X02R03701T03403403603303A02T01W02P03802P00Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B02P03403403603303A02T01902S02P03802P00Y01800Y03903402R02B03802P03802X03703802X02R03701V03002X02R02Z01W02P03802P00Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B02R03002X02R02Z01902S02P03802P00Y01800Y03903402R02B03802P03802X03703802X02R03702803603302R02T03703701V03303903203800Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B03403603302R02T03703701902R03303903203800Y01800Y03903402R02B03802P03802X03703802X02R03701T03403402C03303400Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B02P03403401903803303400Y01800Y03903402R02B03802P03802X03703802X02R03701W02T03402P03603802C03303400Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B02S02T03402P03603801903803303400Y01800Y03903402R02B03802P03802X03703802X02R03702502P02Y03303601T03403403700Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B03102P02Y03303601902P03403403700Y01800Y03903402R02B03802P03802X03703802X02R03702B02T03603A02X02R02T01V03303903203800Y01M00Y01B03703D03703802T03101B03703802P03802X03703802X02R03701B03702T03603A02X02R02T01902R03303903203800Y01800Y03002X03703802C02P02Q03002T00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B03002X03703800Y01800Y02T02S02X03801T02S02S02C02P02Q03002T00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B03702P03A02T00Y01800Y02S02T03002T03802T02C02P02Q03002T00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B02S02T03002T03802T00Y01800Y02U02X03202S02C02P02Q03002T00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B03303202T00Y01800Y02V02T03802C02P02Q03002T01W02P03802P00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01902U02X02T03002S01B02V02T03801902X03202U03300Y01800Y02V02T03802103202U03302C02P02Q03002T00Y01M00Y01B03702X03802T01B02P03403401903802P02Q03002T01902U02X02T03002S01B02V02T03801902X03202U03300Y01800Y02V02T03802103202U03302B02T02P03602R02W01W02P03802P00Y01M00Y01B03702X03802T01B02P03403401903802P02Q03002T01B02X03203703801903503902T03603D00Y01800Y02S03303B03203003302P02S02C03402X00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B02X03203703801902S03303B03203003302P02S01903803403000Y01800Y03903403003302P02S02C03402X00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B02X03203703801902X03103403303603800Y01800Y02S02T03002T03802T01W02P03802P00Y01M00Y01B03702X03802T01B02P03403401903802P02Q03002T01B02X03203703801902S02T03002T03802T00Y01800Y02T02S02X03801T02S02S00Y01M00Y01B03702X03802T01B02P03403401903802P02Q03002T01B02X03203703801903702P03A02T00Y01800Y02Q01T03403402C02P02Q03002T01Y02X02T03002S01Y02X02T03002S03702B02P03A02T00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01902U02X02T03002S01B02U02X02T03002S03701903702P03A02T00Y01800Y02V02T03802103202U03300Y01M00Y01B03702X03802T01B02P03403401903802P02Q03002T01902U02X02T03002S01B02V02T03801902X03202U03300Y01800Y02X03203703802103103403303603800Y01M00Y01B03702X03802T01B02P03403401903802P02Q03002T01B02X03203703801902X03103403303603800Y01800Y02X03203703801X03C03403303603800Y01M00Y01B03702X03802T01B02P03403401903802P02Q03002T01B02X03203703801902T03C03403303603800Y01800Y02X03203703801W02T03002T03802T00Y01M00Y01B03702X03802T01B02P03403401903802P02Q03002T01B02X03203703801902S02T03002T03802T00Y01800Y02X03203703801W03303B03203003302P02S02C03403000Y01M00Y01B03702X03802T01B02P03403401903802P02Q03002T01B02X03203703801902S03303B03203003302P02S01903803403000Y01800Y02X03203703802B02P03A02T00Y01M00Y01B03702X03802T01B02P03403401903802P02Q03002T01B02X03203703801903702P03A02T00Y01800Y02X03203703802903902T03603D00Y01M00Y01B03702X03802T01B02P03403401903802P02Q03002T01B02X03203703801903503902T03603D00Y01800Y02B02V02T03802103202U03300Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01902U02X02T03002S01B02V02T03801902X03202U03300Y01800Y03702X03203703802103103403303603800Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B02X03203703801902X03103403303603800Y01800Y03702X03203703801X03C03403303603800Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B02X03203703801902T03C03403303603800Y01800Y03702X03203703801W02T03002T03802T00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B02X03203703801902S02T03002T03802T00Y01800Y03702X03203703801W03303B03203003302P02S02C03403000Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B02X03203703801902S03303B03203003302P02S01903803403000Y01800Y03702X03203703802B02P03A02T00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B02X03203703801903702P03A02T00Y01800Y03702X03203703802903902T03603D00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B02X03203703801903503902T03603D00Y01800Y03702402X03703800Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B03002X03703800Y01800Y03701W02T03002T03802T00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B02S02T03002T03802T00Y01800Y03702B02P03A02T00Y01M00Y01B03703D03703802T03101B02P03403401903802P02Q03002T01B03702P03A02T00Y01800Y02Q02F02T02R02W02P03801V03303202U02X02V02703903803702X02S02T02103202U03300Y01M00Y01B03703D03703802T03101B03B02T02R02W02P03801902R03303202U02X02V01B03303903803702X02S02T01902X03202U03300Y01800Y02Q02F02T02R02W02P03801V03303202U02X02V02703903803702X02S02T02B02P03A02T00Y01M00Y01B03703D03703802T03101B03B02T02R02W02P03801902R03303202U02X02V01B03303903803702X02S02T01903702P03A02T00Y01800Y02V02T03802002P03003002B02T03803802X03202V03700Y01M00Y01B03703D03703802T03101B02W03303102T01B02X03202S02T03C00Y01800Y03702P03A02T02002P03003002B02T03803802X03202V03700Y01M00Y01B03703D03703802T03101B02W03303102T01B03702P03A02T00Y01800Y03702T03603A02X02R02T02B03303603800Y01M00Y01B03703D03703802T03101B02W03303102T01B03703303603800Y01800Y02P02S02S01W02T03402P03603803102T03203800Y01M00Y01B03703D03703802T03101B02W03303102T01B02P02S02S01902S02T03402P03603800Y01800Y02X03103403303603801X03C02R02T03000Y01M00Y01B03703D03703802T03101B02U03303603101B02T03C02R02T03001902S02P03802P00Y01800Y03403603302Y02T02R03802402X03703800Y01M00Y01B03703D03703802T03101B03403603302Y02T02R03801B03002X03703800Y01800Y03403603302Y02T02R03802B02P03A02T00Y01M00Y01B03703D03703802T03101B03403603302Y02T02R03801B02S02P03802P01903702P03A02T00Y01800Y03403603302Y02T02R03801W02P03802P01W02T03000Y01M00Y01B03703D03703802T03101B03403603302Y02T02R03801B02S02P03802P01902S02T03000Y01800Y03403603302Y02T02R03801W02P03802P02B03303603800Y01M00Y01B03703D03703802T03101B03403603302Y02T02R03801B02S02P03802P01903703303603800Y01800Y03802W03603303902V02W02402X03703800Y01M00Y01B03703D03703802T03101B03802W03603303902V02W01B03002X03703800Y01800Y03802W03603303902V02W02B02P03A02T00Y01M00Y01B03703D03703802T03101B03802W03603303902V02W01B02S02P03802P01903702P03A02T00Y01800Y03802W03603303902V02W01W02P03802P01W02T03000Y01M00Y01B03703D03703802T03101B03802W03603303902V02W01B02S02P03802P01902S02T03000Y01800Y03802W03603303902V02W01W02P03802P02B03303603800Y01M00Y01B03703D03703802T03101B03802W03603303902V02W01B02S02P03802P01903703303603800Y01800Y03203303802X02U03D03703303603800Y01M00Y01B03703D03703802T03101B03203303802X02U03D01B03703303603800Y01800Y02S02P03802P02402X03703800Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B03002X03703800Y01800Y02S02P03802P02B02P03A02T00Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B03702P03A02T00Y01800Y02S02P03802P01W02T03000Y01M00Y01B03703D03703802T03101B02S02P03802P01903703303903602R02T01B02S02T03002T03802T00Y01800Y02S02Q02B02P03A02T00Y01M00Y01B03703D03703802T03101B02S02Q01902R03303202U02X02V01B03702P03A02T00Y01800Y02S02Q01W02T03000Y01M00Y01B03703D03703802T03101B02S02Q01902R03303202U02X02V01B02S02T03002T03802T00Y01800Y02S02Q01V03303203202T02R03800Y01M00Y01B03703D03703802T03101B02S02Q01902R03303202U02X02V01B02R03303203202T02R03800Y01800Y03203303802X02R02T01Y02402X03703800Y01M00Y01B03703D03703802T03101B02U03303603101903203303802X02R02T01B02X03202S02T03C00Y01800Y03203303802X02R02T01Y02B02P03A02T00Y01M00Y01B03703D03703802T03101B02U03303603101903203303802X02R02T01B03702P03A02T00Y01800Y03203303802X02R02T01Y01W02T03000Y01M00Y01B03703D03703802T03101B02U03303603101903203303802X02R02T01B02S02T03002T03802T00Y01800Y03A02P03002X02S02P03803303602402X03703800Y01M00Y01B03703D03703802T03101B02U03303603101903A02P03002X02S02P03803303601B02X03202S02T03C00Y01800Y03A02P03002X02S02P03803303602B02P03A02T00Y01M00Y01B03703D03703802T03101B02U03303603101903A02P03002X02S02P03803303601B03702P03A02T00Y01800Y03A02P03002X02S02P03803303601W02T03000Y01M00Y01B03703D03703802T03101B02U03303603101903A02P03002X02S02P03803303601B02S02T03002T03802T00Y01800Y03B03702402X03703800Y01M00Y01B03703D03703802T03101B02U03303603101903603903002T01B03002X03703800Y01800Y03B02X02S02V02T03802B02P03A02T00Y01M00Y01B03703D03703802T03101B02U03303603101903603903002T01B03702P03A02T00Y01800Y03B02X02S02V02T03801W02T03000Y01M00Y01B03703D03703802T03101B02U03303603101903603903002T01B02S02T03002T03802T00Y01800Y03403602T02U02X03C02B02P03A02T00Y01M00Y01B03703D03703802T03101B03403602T02U02X03C01B03702P03A02T00Y01800Y03403602T02U02X03C01W02T03000Y01M00Y01B03703D03703802T03101B03403602T02U02X03C01B02S02T03002T03802T00Y01800Y02P02S02S02C03602X02V02V02T03600Y01M00Y01B03703D03703802T03101B03803602X02V02V02T03601B02P02S02S00Y01800Y02T02S02X03802C03602X02V02V02T03600Y01M00Y01B03703D03703802T03101B03803602X02V02V02T03601B02T02S02X03800Y01800Y02S02T03002T03802T02C03602X02V02V02T03600Y01M00Y01B03703D03703802T03101B03803602X02V02V02T03601B02S02T03002T03802T00Y01800Y03703D03703802T03101T03403401T03003000Y01M00Y01B03703D03703802T03101B02P03403401B02P03003000Y01800Y02T03202P02Q03002T02C03602X02V02V02T03600Y01M00Y01B03703D03703802T03101B03803602X02V02V02T03601B02T03202P02Q03002T00Y01800Y02S02X03702P02Q03002T02C03602X02V02V02T03600Y01M00Y01B03703D03703802T03101B03803602X02V02V02T03601B02S02X03702P02Q03002T00Y01800Y02V02T03802702R03602402X03703800Y01M00Y01B03703D03703802T03101B03302R03601B03002X03703800Y01800Y02R03603303203802P02Q03002X03703800Y01M00Y01B03703D03703802T03101B02R03603303203802P02Q01B03002X03703800Y01800Y02R03603303203802P02Q02T02S02X03800Y01M00Y01B03703D03703802T03101B02R03603303203802P02Q01B02T02S02X03800Y01800Y02R03603303203802P02Q02X03202U03300Y01M00Y01B03703D03703802T03101B02R03603303203802P02Q01B02X03202U03300Y01800Y02R03603303203802P02Q03703803303400Y01M00Y01B03703D03703802T03101B02R03603303203802P02Q01B03703803303400Y01800Y02R03603303203802P02Q02S02T03000Y01M00Y01B03703D03703802T03101B02R03603303203802P02Q01B02S02T03000Y01800Y02R03603303203802P02Q02W02X03703803303603D00Y01M00Y01B03703D03703802T03101B02R03603303203802P02Q01B02W02X03703803303603D00Y01800Y03702X02V03202P03002402X03703800Y01M00Y01B03703D03703802T03101B02P02R03802X03A02X03802X01903702X02V03202P03001B03002X03703800Y01800Y02P02S02S02B02X02V03202P03000Y01M00Y01B03703D03703802T03101B02P02R03802X03A02X03802X01903702X02V03202P03001B02P02S02S00Y01800Y02T02S02X03802B02X02V03202P03000Y01M00Y01B03703D03703802T03101B02P02R03802X03A02X03802X01903702X02V03202P03001B02T02S02X03800Y01800Y02S02T03002T03802T02B02X02V03202P03000Y01M00Y01B03703D03703802T03101B02P02R03802X03A02X03802X01903702X02V03202P03001B02S02T03002T03802T00Y01800Y02T03202P02Q03002T02B02X02V03202P03000Y01M00Y01B03703D03703802T03101B02P02R03802X03A02X03802X01903702X02V03202P03001B02T03202P02Q03002T00Y01800Y02S02X03702P02Q03002T02B02X02V03202P03000Y01M00Y01B03703D03703802T03101B02P02R03802X03A02X03802X01903702X02V03202P03001B02S02X03702P02Q03002T00Y01800Y02V02T03802502P03401T03003000Y01M00Y01B03703D03703802T03101B03102P03401B02P03003000Y01800Y03102P03402B02P03A02T01V02P03802T02V03303603D00Y01M00Y01B03703D03703802T03101B03102P03401B03702P03A02T01902R02P03802T02V03303603D00Y01800Y03102P03401W02T03001V02P03802T02V03303603D00Y01M00Y01B03703D03703802T03101B03102P03401B02S02T03001902R02P03802T02V03303603D00Y01800Y03102P03402B02P03A02T00Y01M00Y01B03703D03703802T03101B03102P03401B03702P03A02T00Y01800Y03102P03401Z02T03800Y01M00Y01B03702X03802T01B03102P03401B02V02T03800Y01800Y03102P03401W02T03000Y01M00Y01B03703D03703802T03101B03102P03401B02S02T03000Y01800Y03403903702W02P03402X03002X03703800Y01M00Y01B03703D03703802T03101B03403903702W02P03402X01B03002X03703800Y01800Y03403903702W02P03402X02P03402X03702P03A02T00Y01M00Y01B03703D03703802T03101B03403903702W02P03402X01B02P03402X01903702P03A02T00Y01800Y03403903702W02P03402X02P03402X03903702T00Y01M00Y01B03703D03703802T03101B03403903702W02P03402X01B02P03402X01903903702T00Y01800Y03403903702W02P03402X02S02T03002T03802T00Y01M00Y01B03703D03703802T03101B03403903702W02P03402X01B02S02T03002T03802T00Y01800Y03403903702W02P03402X03702W03303B02S03803B02P03403400Y01M00Y01B03703D03703802T03101B03403903702W02P03402X01B03702W03303B01902S03803B02P03403400Y01800Y03702W03303B02S03803B02P03402X02S02T03802P02X03000Y01M00Y01B03703D03703802T03101B03403903702W02P03402X01B03702W03303B01902S03803B02P03402X02S02T03802P02X03000Y01800Y03403903702W02P03402X03702W03303B02S03803B02P03402X00Y01M00Y01B03703D03703802T03101B03403903702W02P03402X01B03702W03303B01902S03803B02P03402X00Y01800Y02V02T03803903702T03601V03303202U02X02V00Y01M00Y01B03703D03703802T03101B03903702T03601902P03903802W03701B03903702T03601902R03303202U02X02V00Y01800Y03702P03A02T03903702T03601V03303202U02X02V00Y01M00Y01B03703D03703802T03101B03903702T03601902P03903802W03701B03702P03A02T01903903702T03601902R03303202U02X02V00Y01800Y02T03C02P03102X03202T02402X03703800Y01M00Y01B03703D03703802T03101B02T03C02P03102X03202T01B02X03202S02T03C00Y01800Y02T03C02P03102W02X03702402X03703800Y01M00Y01B03703D03703802T03101B02T03C02P03102X03202T01B02W02X03703803303603D00Y01800Y02S02T02P03002C02P03702Z00Y01M00Y01B03703D03703802T03101B02T03C02P03102X03202T01B03802P03702Z01902S02T02P03000Y01800Y02V02T03802C02P03702Z02402X03703800Y01M00Y01B03703D03703802T03101B02T03C02P03102X03202T01B03802P03702Z01903002X03703800Y01800Y02X03202U03301T03903802W00Y01M00Y01B03703D03703802T03101B03903702T03601902P03903802W03701B02X03202U03301902P03903802W00Y01800Y02X03202U03302402X03703800Y01M00Y01B03703D03703802T03101B02X03202U03303102P03802X03303201B02X03202U03300Y01800Y02X03202U03302103103403303603800Y01M00Y01B03703D03703802T03101B02X03202U03303102P03802X03303201B02X03103403303603800Y01800Y02X03202U03302103103403303603802A02T03703903003800Y01M00Y01B03703D03703802T03101B02X03202U03303102P03802X03303201B02X03103403303603801903602T03703903003800Y01800Y02X03202U03301X03C03403303603800Y01M00Y01B03703D03703802T03101B02X03202U03303102P03802X03303201B02T03C03403303603800Y01800Y02X03202U03301X03C03403303603802A02T03703903003800Y01M00Y01B03703D03703802T03101B02X03202U03303102P03802X03303201B02T03C03403303603801903602T03703903003800Y01800Y02V02T03801W02T03402P03603800Y01M00Y01B02P03402X01B03903702T03601B02S02T03402P03603803A01R03803D03402T01P03102P03202P02V02T03600Y01800Y02X03202U03302B02P03A02T02D03702T03600Y01M00Y01B03703D03703802T03101B03903702T03601B02X03202U03301903702P03A02T00Y01800Y02X03202U03301W02T03002D03702T03600Y01M00Y01B03703D03703802T03101B03903702T03601B02X03202U03301902S02T03000Y01800Y02V02T03802503D01T03403403700Y01M00Y01B03702X03802T01B03903702T03601B03103D01902P03403403700Y01800Y03702T03802503D01T03403403700Y01M00Y01B03702X03802T01B03903702T03601B02P02S02S01903103D01902P03403403700Y01800Y02V02T03802003303102T03402P02V02T02C03D03402T00Y01M00Y01B03702X03802T01B02S02P03702W02Q03302P03602S01B02W02X03703803303603D00Y01800Y02V02T03802003303102T03402P02V02T01V03303202U02X02V00Y01M00Y01B03702X03802T01B02S02P03702W02Q03302P03602S01B02V02T03801902R03303202U02X02V00Y01800Y03702T03802003303102T03402P02V02T01V03303202U02X02V00Y01M00Y01B03702X03802T01B02S02P03702W02Q03302P03602S01B03702T03801902R03303202U02X02V00Y01800Y02V02T03801T02S02S02503302S03903002T00Y01M00Y01B03702X03802T01B02S02P03702W02Q03302P03602S01B03702T03002T02R03801903103302S03903002T00Y01800Y02V02T03802703202T02003303102T03402P02V02T01W02P03802P00Y01M00Y01B03702X03802T01B02S02P03702W02Q03302P03602S01B02V02T03801903303202T01902S02P03702W02Q03302P03602S01902S02P03802P00Y01800Y02V02T03802003303102T03402P02V02T01T03003001W02P03802P00Y01M00Y01B03702X03802T01B02S02P03702W02Q03302P03602S01B02V02T03801902P03003001902S02P03702W02Q03302P03602S01902S02P03802P00Y01800Y02V02T03802502T03703702P02V02T02W03400Y01M00Y01B03702X03802T01B03102T03703702P02V02T01B03B02X03202S03303B01903102T03703702P02V02T00Y01800Y03602T03703303903602R02T03002X03703800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01903002X03703800Y01800Y03602T03702T03603A02P03802X03303200Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03002X03703800Y01800Y03602T03703303903602R02T02903602R03302S02T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01903503602R03302S02T00Y01800Y03702X02V03202X03200Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03702X02V03201902X03200Y01800Y02Q03002P02R02Z03002X03703802P02S02S00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02Q03002P02R02Z03002X03703801902P02S02S00Y01800Y03602T03702T03603A02P03802X03303202Q03002P02R02Z03002X03703800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02Q03002P02R02Z03002X03703800Y01800Y02Q03002P02R02Z03002X03703803103303A02T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02Q03002P02R02Z03002X03703801903103303A02T00Y01800Y03903202X02U03D03903402S02P03802T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03903202X02U03D01903903402S02P03802T00Y01800Y02W02P03602S03B02P03602T03002X03703800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02W02P03602S03B02P03602T01903002X03703800Y01800Y02W02P03602S03B02P03602T02T02S02X03800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02W02P03602S03B02P03602T01902T02S02X03800Y01800Y02W02P03602S03B02P03602T02S02T03000Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02W02P03602S03B02P03602T01902S02T03000Y01800Y02W02P03003001X02S02X03800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02W02P03003001902T02S02X03800Y01800Y02W02P03003002402X03703800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02W02P03003001903002X03703800Y01800Y02W02P03003001W02T03000Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02W02P03003001902S02T03000Y01800Y03602T03703303903602R02T01X02S02X03800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01902T02S02X03800Y01800Y03602T03703303903602R02T02103202U03300Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01902X03202U03300Y01800Y03703902Q03602T03703303903602R02T02C03D03402T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03703902Q03602T03703303903602R02T01903803D03402T00Y01800Y03602T03703303903602R02T03702E02T02S02X03800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01903A02T03603702X03303201902T02S02X03800Y01800Y03602T03703303903602R02T03702E02T02S02X03802402X03703800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01903A02T03603702X03303201903002X03703800Y01800Y03602T03703303903602R02T03702E02T02S02X03801W02T03000Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01903A02T03603702X03303201902S02T03000Y01800Y03602T03703303903602R02T03702E02T02S02X03802103202U03300Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01903A02T03603702X03303201902X03202U03300Y01800Y03602T03703303903602R02T03702C02X03102T02402X03703800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T03701903802X03102T01903002X03703800Y01800Y02T02S02X03802A02T03703303903602R02T03702C02X03102T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T03701903802X03102T01902T02S02X03800Y01800Y02S02T03002A02T03703303903602R02T03702C02X03102T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T03701903802X03102T01902S02T03000Y01800Y02V02T03802502P03803802T03601T03003001U03403103200Y01M00Y01B03703D03703802T03101B02Q03403103201B02V02T03801902P03003001902Q03403103200Y01800Y03602T03703303903602R02T03702803602T02T03103403800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03403602T02T03103403800Y01800Y02R03003303202T03A02T03603702X03303200Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02R03003303202T01903A02T03603702X03303200Y01800Y03A02T03603702X03303202W02X02S02T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03A02T03603702X03303201902W02X02S02T00Y01800Y03A02T03603702X03303201V02P03202R02T03001X03202P02Q03002T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03A02T03603702X03303201902R02P03202R02T03001902T03202P02Q03002T00Y01800Y03002P03703803602T03702T03603A02T02C02X03102T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02V02T03801903002P03703803602T03702T03603A02T01903802X03102T00Y01800Y03802X03102T02B03303603800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T03701903802X03102T01903703303603800Y01800Y03703902Q03602T03703303903602R02T02B02P03A02T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03703902Q03602T03701902T02S02X03800Y01800Y02S02X03702P02Q03002T02B03902Q03602T03702402X03703800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03703902Q03602T03701903002X03703800Y01800Y03702T03802402X03703800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02W02P03003001903602T03703303903602R02T01902P03003000Y01800Y03602T03703303903602R02T03702402X03703800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01903002X03703800Y01800Y02V02T03802A02T03702T03603A02P03802X03303202402X03703800Y01M00Y01B03702X03802T01B03602T03702T03603A02P03802X03303201B02V02T03801903702T03803802X03202V00Y01800Y02V02T03802A02T03702T03603A02T02402X03703800Y01M00Y01B03702X03802T01B03602T03702T03603A02P03802X03303201B03002X03703801903402P02V02T00Y01800Y02R02W02T02R02Z01U02P03802R02W01Y02X03002T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02Q02P03802R02W01903302R02R03903403D00Y01800Y02V02T03802A02T03702T03603A02P03802X03303202503D02402X03703800Y01M00Y01B03702X03802T01B03602T03702T03603A02P03802X03303201B03103D01903002X03703800Y01800Y03602T03702T03603A02P03802X03303202D03402S02P03802T02B03802P03802T00Y01M00Y01B03702X03802T01B03602T03702T03603A02P03802X03303201B03903402S02P03802T01903703802P03802T00Y01800Y03602T03702T03603A02P03802X03303202A02T03703303903602R02T02103202U03300Y01M00Y01B03702X03802T01B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01902X03202U03300Y01800Y03602T03703303903602R02T02103202U03302502P03602V02X03200Y01M00Y01B03702X03802T01B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01902X03202U03301903102P03602V02X03200Y01800Y03602T03702T03603A02P03802X03303202402P03903202R02W00Y01M00Y01B03702X03802T01B03602T03702T03603A02P03802X03303201B03002P03903202R02W00Y01800Y03602T03702T03603A02A02T03A03302Z02T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03A03302Z02T00Y01800Y03602T03702T03603A01V02P03002T03202S02T03600Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02R02P03002T03202S02T03601903602T03A03302Z02T00Y01800Y02Q02P03802R02W03403602T02T03103403802S02P03802T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02Q02P03802R02W01903403602T02T03103403801902S02P03802T00Y01800Y02Q02P03802R02W03403602T02T03103403802B02X03802T02S02P03802T00Y01M00Y01B03702X03802T01B03602T03702T03603A02P03802X03303201B02Q02P03802R02W01903403602T02T03103403801902S02P03802T00Y01800Y03602T03702T03603A02P03802X03303203102P03602V02X03200Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01902X03202U03301903102P03602V02X03200Y01800Y03602T03703303903602R02T02C02X03102T02A03903002T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01903802X03102T01903603903002T00Y01800Y03602T03703303903603702T02C02X03102T02603903100Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01903802X03102T01903203903100Y01800Y03602T03703303903602R02T02E02T03603702X03303202C02X03102T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01903A02T03603702X03303201903802X03102T00Y01800Y02V02T03802B02X02V03202103202U03300Y01M00Y01B03702X03802T01B03602T03702T03603A02P03802X03303201B02V02T03801903702X02V03201902X03202U03300Y01800Y03602T03702T03603A02B02X02V03202103200Y01M00Y01B03702X03802T01B03602T03702T03603A02P03802X03303201B03702X02V03200Y01800Y03602T03702T03603A02T01U03602T02P02Z01T03403403302X03203803102T03203800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02Q03602T02P02Z01902P03403403302X03203803102T03203800Y01800Y03602T03702T03603A02T01U03602T02P02Z01T03403403302X03203803102T03203801W02T03000Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02Q03602T02P02Z01902P03403403302X03203803102T03203801902S02T03000Y01800Y03703402T02R02X02P03002402X03703800Y01M00Y01B03703D03703802T03101B02P03403401903703402T02R02X02P03001903803303402X02R01B03002X03703800Y01800Y02P02S02S02B03402T02R02X02P03000Y01M00Y01B03703D03703802T03101B02P03403401903703402T02R02X02P03001903803303402X02R01B02R03602T02P03802T01903303601903903402S02P03802T00Y01800Y03703402T02R02X02P03001W02T03802P02X03000Y01M00Y01B03703D03703802T03101B02P03403401903703402T02R02X02P03001903803303402X02R01B02S02T03802P02X03003700Y01800Y02P03403403003D02402X03703800Y01M00Y01B03703D03703802T03101B02P03403401903703402T02R02X02P03001903803303402X02R01B02X03802T03101903002X03703800Y01800Y02P03403403003D01Z03603303903402402X03703800Y01M00Y01B03703D03703802T03101B02P03403401903703402T02R02X02P03001903803303402X02R01B02V03603303903403701903002X03703800Y01800Y02P02S02S01T03403403003D01Z03603303903400Y01M00Y01B03703D03703802T03101B02P03403401903703402T02R02X02P03001903803303402X02R01B02R03602T02P03802T01903303601903903402S02P03802T01902V03603303903400Y01800Y02S02T03001T03403403003D01Z03603303903400Y01M00Y01B03703D03703802T03101B02P03403401903703402T02R02X02P03001903803303402X02R01B02S02T03001902V03603303903400Y01800Y02P02S02S01T03403403003D00Y01M00Y01B03703D03703802T03101B02P03403401903703402T02R02X02P03001903803303402X02R01B02R03602T02P03802T01903303601903903402S02P03802T01902X03802T03100Y01800Y03102P03803802T03602402X03703800Y01M00Y01B03703D03703802T03101B02P03403401B03702T02P03602R02W00Y01800Y02U03603303203802B03402T02R02X02P03002402X03703800Y01M00Y01B03702X03802T01B02P03403401903703402T02R02X02P03001903803303402X02R01B02S02T03802P02X03003700Y01800Y02P03403403003D02B03303603802B02P03A02T00Y01M00Y01B03703D03703802T03101B02P03403401903703402T02R02X02P03001903803303402X02R01B03703303603801902P03003000Y01800Y03703802P03802X02R01T03403400Y01M00Y01B03702X03802T01B02P03403403701B02R03002X02R02Z01903203903100Y01800Y03703D03703802T03102602P03A02402X03703801W03302R03903102T03203800Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B02V02T03801903202P03A02X02V02P03802X03303200Y01800Y02V02T03802702U02U02X02R02X02P03002C03302S03300Y01M00Y01B03702X03802T01B03103D01903802P03702Z01B03803302S03300Y01800Y02V02T03802702U02U02X02R02X02P03002A02T02P02S00Y01M00Y01B03702X03802T01B03103D01903602T02P02S01B02X03202S02T03C00Y01800Y02V02T03802702U02U02X02R02X02P03002C03602P02R02Z00Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B03803602P02R02Z00Y01800Y03302U02U02X02R02X02P03002B02T03603A02X02R02T02402X03703800Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B02V02T03801902P03403403701903002X03703800Y01800Y03302U02U02X02R02X02P03002402X02Q03602P03603D00Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B03002X02Q03602P03603D00Y01800Y03302U02U02X02R02X02P03001V02T03203802T03600Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B02R02T03203803602T00Y01800Y03403902Q03002X03702W02702U02U02X02R02X02P03000Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B03002X02Q03602P03603D01902T02S02X03800Y01800Y02P02R02R03602T02S02X03802702U02U02X02R02X02P03000Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B03002X02Q03602P03603D01902P02S02S01902P03903802W00Y01800Y02P03403403003D01T02R02R03602T02S02X03800Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B02P03903802W01902P03403403003D00Y01800Y02X03103403303B02T03602502P03202P02V02T02402X03703800Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B02P03903802W01903002X03703800Y01800Y02S02X03703403303702T01T03403403003D00Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B02P03903802W01903303402T03602P03802X03303200Y01800Y02V02T03802702U02U02X02R02X02P03001T03403400Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B02V02T03801902P03403403700Y01800Y02T02S02X03802F03303602S02703203002X03202T00Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B03303203002X03202T01903B03303602S00Y01800Y03A02X02T03B02F03303602S02703203002X03202T00Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B03303203002X03202T01903B03303602S01903403602T03A02X02T03B00Y01800Y02V02T03801W03302R03903102T03203802403302V00Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B03003302V00Y01800Y02S02T03002T03802T01W03302R03903102T03203800Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B02S02T03002T03802T00Y01800Y02V02T03802702U02U02X02R02X02P03001V03303903203800Y01M00Y01B03702X03802T01B02S03302R03903102T03203801B02V02T03801903802P03702Z01902R03303903203800Y01800Y02V02T03802D03702T03602103202U03300Y01M00Y01B03702X03802T01B03903702T03601B02V02T03801903202P03102T00Y01800Y03602T03703303903602R02T01Z03603303903402402X03703800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01902V03603303903401903002X03703800Y01800Y03602T03703303903602R02T01Z03603303903401X02S02X03800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01902V03603303903401902T02S02X03800Y01800Y03602T03703303903602R02T01Z03603303903401W02T03802P02X03000Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01902V03603303903401902S02T03802P02X03000Y01800Y03602T03703303903602R02T02402X02Z02T02402X03703800Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01903002X02Z02T01903002X03703800Y01800Y03903402S02P03802T02903602R03302S02T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B03602T03703303903602R02T01903903402S02P03802T01903503602R03302R02T00Y01800Y02P03903803302D03402S02P03802T02903602R03302S02T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02V02T03801902P03903802W01903503602R03302R02T00Y01800Y02R03003303202T02A02T02R03303903602R02T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02R03003303202T00Y01800Y02S02T03002A02T02R03303903602R02T00Y01M00Y01B03703D03703802T03101B03602T03702T03603A02P03802X03303201B02S02T03000Y01800Y03203303802X02U03D02402X03703800Y01M00Y01B03702X03802T01B03103D01903602T02P02S01B02X03203703801903002X03703800Y01800Y02P02S02S02603303802X02U03D00Y01M00Y01B03702X03802T01B03103D01903602T02P02S01B02P02S02S01903602T02P02S00Y01800Y02U02X03003003602T03403303603803103D03002X03703800Y01M00Y01B03702X03802T01B02U02X03003003602T03403303603801B03103D01903002X03703800Y01800Y02U02X03003003602T03403303603803703802P03800Y01M00Y01B03702X03802T01B02U02X03003003602T03403303603801B03703802P03800Y01800Y02U02X03003003602T03403303603803703802P03802S02T03802P02X03000Y01M00Y01B03702X03802T01B02U02X03003003602T03403303603801B03703802P03801902S02T03802P02X03000Y01800Y03103D02P03403402402X03703800Y01M00Y01B03702X03802T01B02U02X03003003602T03403303603801B03103D01902P03403401903002X03703800Y01800Y02U02X03003003602T03403303603803602T03102X03202S02T03600Y01M00Y01B03702X03802T01B02U02X03003003602T03403303603801B02U02X03003003602T03403303603801903602T03102X03202S02T03600Y01800Y02U02X03003003602T03403303603802T03403002T03202X03702W00Y01M00Y01B03702X03802T01B02U02X03003003602T03403303603801B02U02X03003003602T03403303603801903602T03403002T03202X03702W00Y01800Y02U02X03003003602T03403303603802P02U03602T03702W00Y01M00Y01B03702X03802T01B02U02X03003003602T03403303603801B02U02X03003003602T03403303603801902P02U03602T03702W00Y01800Y02U02X03003003602T03403303603802S02T03002T03802T00Y01M00Y01B03702X03802T01B02U02X03003003602T03403303603801B02U02X03003003602T03403303603801902S02T03002T03802T00Y01800Y03802P03702Z01X03C02R02T03403802X03303200Y01M00Y01B03703D03703802T03101B03802P03702Z01B02T03C02R02T03403802X03303200Y01800Y03802P03702Z01V03303203802X03203902T00Y01M00Y01B03703D03703802T03101B03802P03702Z01B02R03303203802X03203902T00Y01800Y03002P03903202R02W01X03C02R02T03403802X03303200Y01M00Y01B03703D03703802T03101B02T03C02R02T03403802X03303201B03002P03903202R02W00Y01800Y03002P03903202R02W01V03303203802X03203902T00Y01M00Y01B03703D03703802T03101B02T03C02R02T03403802X03303201B03602T03402P02X03601903002P03903202R02W00Y01800Y02V02T03802903902T03902T02402X03703800Y01M00Y01B03703D03703802T03101B03503902T03902T01B03002X03703800Y01800Y02V02T03802903902T03902T01V03303202U02X02V00Y01M00Y01B03703D03703802T03101B03503902T03902T01B02V02T03801902R03303202U02X02V00Y01800Y03702T03802903902T03902T01V03303202U02X02V00Y01M00Y01B03703D03703802T03101B03503902T03902T01B03702T03801902R03303202U02X02V00Y01800Y03602T03703802P03603802903902T03902T00Y01M00Y01B03703D03703802T03101B03503902T03902T01B03602T03703802P03603800Y01800Y02V02T03802B03D03703802T03102B02T03603A02X02R02T00Y01M00Y01B03703D03703802T03101B03803303303003701B02V02T03801903702T03603A02X02R02T00Y03H"
		},
		e48e: function(e, t, a) {
			"use strict";
			t["a"] = {
				data: function() {
					return {
						mixLayoutTwoShowHeader: !1,
						mixEditorShowRadio: !0,
						mixEditorValue: 0
					}
				},
				methods: {
					mixNuaaHideHeader: function() {
						return !1
					}
				}
			}
		},
		e613: function(e, t, a) {},
		e644: function(e, t, a) {
			"use strict";
			var i = a("82e3"),
				T = a("4350"),
				n = a("9230"),
				o = (a("d3b7"), a("b0c0"), a("99af"), a("313d"), a("0eb6"), a("b7ef"), a("8bd4"), a("e9c4"), a("caad"), a("2532"), a("8bbf")),
				s = a.n(o),
				r = a("e8d2"),
				Y = a("fa89"),
				c = a("1b63"),
				B = (a("a4d9"), {
					authKey: "authControl_key",
					usernameKey: "username_key",
					validationKey: "validation_key",
					siteConfigKey: "getSiteConfig",
					systemConfigKey: "systemConfigKey",
					checkLogin: function() {
						return true
					},
					getCookieUid: function() {
						return r["a"].getCookie(r["a"].getUidKey())
					},
					getUserInfo: function() {
						var e = Y["a"].getSItem(this.usernameKey);
						return e || null
					},
					toLogin: function(e, t) {
						alert("wtf")
                        console.log("wtf")
					},
					btBuLogin: function(e) {
						function t() {
							var e = "lantumc",
								t = navigator.userAgent.toLowerCase();
							return -1 !== t.indexOf(e)
						}

						function a(e) {
							return i.apply(this, arguments)
						}

						function i() {
							return i = Object(n["a"])(Object(T["a"])().mark((function e(t) {
								return Object(T["a"])().wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", new Promise((function(e) {
												MCK.h5.call(t, (function(t) {
													e(t)
												}))
											})));
										case 1:
										case "end":
											return e.stop()
									}
								}), e)
							}))), i.apply(this, arguments)
						}
						if ("btbu" !== s.a.appCommonH.getWebId() || !t()) return !1;
						console.log("aaaa"), MCK.ready(Object(n["a"])(Object(T["a"])().mark((function t() {
							var i;
							return Object(T["a"])().wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, a("getUserInfo");
									case 2:
										i = t.sent, console.log("aaaa", i), alert(i, "test"), e();
									case 6:
									case "end":
										return t.stop()
								}
							}), t)
						}))))
					},
					setSiteConfig: function(e) {
						var t = this,
							a = 5;
						if (Y["a"].getSItem(this.siteConfigKey) && Y["a"].getLItem(this.siteConfigKey) && Y["a"].getLItem(this.systemConfigKey) == a) return s.a.siteConfig = s.a.prototype.siteConfig = Y["a"].getLItem(this.siteConfigKey), this.setWebFacicon(s.a.prototype.siteConfig), this.getControl(e), !0;
						s.a.appFetch({
							method: "get",
							url: "getSiteConfig",
							data: {
								v: (new Date).getTime()
							}
						}, (function(i) {
							0 == i.e ? (Y["a"].setSItem(t.siteConfigKey, i.d), Y["a"].setLItem(t.siteConfigKey, i.d, 36e5), Y["a"].setLItem(t.systemConfigKey, a, 36e5), s.a.siteConfig = s.a.prototype.siteConfig = i.d, t.setWebFacicon(i.d), t.getControl(e)) : s.a.prototype.$message.error({
								message: "获取网站基础信息失败，请刷新页面重试",
								showClose: !0
							})
						}), (function() {
							s.a.prototype.$message.error({
								message: "获取网站基础信息失败，请刷新页面重试",
								showClose: !0
							})
						}))
					},
					setWebFacicon: function(e) {
						if (e.favicon_logo) {
							var t = document.createElement("link");
							t.rel = "shortcut icon", t.href = e.imghost + "/" + e.favicon_logo, document.head.appendChild(t)
						}
					},
					getControl: function(e) {
						var t = this;
						if (!this.checkLogin()) return Y["a"].getSItem(this.authKey) && this.delControl(), e(), !1;
						var a = this.getUserInfo(),
							i = Y["a"].getSItem(this.authKey);
						if (a && a.uid == this.getCookieUid() && i && i.random) e && e();
						else {
							var T = (new Date).getTime();
							s.a.appFetch({
								method: "get",
								url: "getAllAuth",
								data: {
									random: T
								}
							}, (function(a) {
								0 == a.e ? (a.d.oldnum = T, t.getUserInfoByApi(e), Y["a"].setSItem(t.authKey, 0 == a.e ? a.d : {})) : s.a.prototype.$message.error({
									message: "获取用户权限失败，请刷新页面重试",
									showClose: !0
								})
							}), (function() {
								s.a.prototype.$message.error({
									message: "获取用户权限失败，请刷新页面重试",
									showClose: !0
								})
							}))
						}
					},
					getUserInfoByApi: function(e) {
						var t = this;
						s.a.appFetch({
							method: "get",
							url: "getUserName"
						}, (function(a) {
							0 == a.e ? (Y["a"].setSItem(t.usernameKey, {
								name: a.d.name,
								uid: a.d.uid,
								college: a.d.college,
								sex: a.d.sex,
								avatar: a.d.avatar,
								administrative_level: a.d.administrative_level,
								identity: a.d.identity_id,
								mobile: a.d.mobile,
								identity_type: a.d.identity_type,
								number: a.d.number
							}), e && e()) : s.a.prototype.$message.error({
								message: "获取用户信息失败，请刷新页面重试",
								showClose: !0
							})
						}), (function() {
							s.a.prototype.$message.error({
								message: "获取用户信息失败，请刷新页面重试",
								showClose: !0
							})
						}))
					},
					loginOut: function(e) {
						var t = this;
						s.a.appFetch({
							method: "get",
							url: "logout"
						}, (function(a) {
							if (0 == a.e)
								if (t.delControl(), e) window.location.href = s.a.appConfig.baseUrl + "printer/login?casLogout=1";
								else if (s.a.appConfig.logout) {
								var i = "".concat(s.a.appConfig.logout, "?redirect_url=").concat(window.location.href);
								window.location.href = i
							} else if (a.d.isCas) {
								i = "/site/login/cas-logout?redirect_url=".concat(window.location.href);
								window.location.href = i
							} else window.location.href = s.a.appConfig.baseUrl + "site/login";
							else s.a.prototype.$message.error({
								message: "退出登录失败，请点击重试",
								showClose: !0
							})
						}), (function() {
							s.a.prototype.$message.error({
								message: "退出登录失败，请点击重试",
								showClose: !0
							})
						}))
					},
					delControl: function() {
						Y["a"].removeSItem(this.authKey), Y["a"].removeSItem("".concat(this.authKey, "_token")), Y["a"].removeSItem(this.usernameKey), Y["a"].removeSItem("".concat(this.usernameKey, "_token"))
					},
					queryControl: function(e) {
						var t = Y["a"].getSItem(this.authKey),
							a = [],
							T = [],
							n = Y["a"].getSItem("".concat(this.authKey, "_token"));
						if (window.btoa(encodeURIComponent(JSON.stringify(t))) != n) return !1;
						if (a = t.permits ? t.permits : a, T = t.web_permits ? t.web_permits : T, !r["a"].abcdeagwyysad(t)) return !1;
						if (Array.isArray(e)) {
							var o, s = Object(i["a"])(e);
							try {
								for (s.s(); !(o = s.n()).done;) {
									var c = o.value;
									if (a.includes(c) || T.includes(c)) return !0
								}
							} catch (B) {
								s.e(B)
							} finally {
								s.f()
							}
						}
						return t.issuper || a.includes(e) || T.includes(e)
					},
					isAdmin: function() {
						var e = Y["a"].getSItem(this.authKey),
							t = Y["a"].getSItem("".concat(this.authKey, "_token"));
						return window.btoa(encodeURIComponent(JSON.stringify(e))) == t && ( !! r["a"].abcdeagwyysad(e) && (null != e && (e.issuper || !! e.permits.length)))
					},
					isSuper: function() {
						var e = Y["a"].getSItem(this.authKey),
							t = Y["a"].getSItem("".concat(this.authKey, "_token"));
						return window.btoa(encodeURIComponent(JSON.stringify(e))) == t && ( !! r["a"].abcdeagwyysad(e) && (null != e && e.issuper))
					},
					Screening: function(e, t) {
						for (var a in t)
							for (var i in t[a]) - 1 == i.indexOf("User_") && -1 == i.indexOf("Sync") && -1 == i.indexOf("Quote") || e[a] && t[a] && t[a][i] == e[a][i] && delete e[a][i];
						return e
					}
				});
			t["a"] = B
		},
		e8d2: function(e, t, a) {
			"use strict";
			var i = a("4350"),
				T = a("9230"),
				n = a("29b5"),
				o = (a("caad"), a("2532"), a("5377"), a("fb6a"), a("e9c4"), a("d3b7"), a("159b"), a("14d9"), a("b0c0"), a("4de4"), a("a15b"), a("d81d"), a("a434"), a("ac1f"), a("5319"), a("99af"), a("25f0"), a("b680"), a("466d"), a("81b2"), a("0eb6"), a("b7ef"), a("8bd4"), a("ace4"), a("5cc6"), a("907a"), a("9a8c"), a("a975"), a("735e"), a("c1ac"), a("d139"), a("3a7b"), a("986a"), a("1d02"), a("d5d6"), a("82f8"), a("e91f"), a("60bd"), a("5f96"), a("3280"), a("3fcc"), a("ca91"), a("25a1"), a("cd26"), a("3c5d"), a("2954"), a("649e"), a("219c"), a("170b"), a("b39a"), a("72f7"), a("8bbf")),
				s = a.n(o),
				r = (a("6128"), a("341c")),
				Y = a("2e8c"),
				c = a("6597"),
				B = (a("d9e2"), a("b64b"), a("a9e3"), a("4d63"), a("c607"), a("2c3e"), a("841c"), a("00b4"), a("8237")),
				l = a.n(B),
				P = {
					downloadSelfFile: function(e) {
						var t = document.createElement("iframe");
						t.style.display = "none", t.src = e, document.body.appendChild(t), setTimeout((function() {
							document.body.removeChild(t)
						}), 6e4)
					},
					abcdeagwyysad: function(e) {
						var t = this.getCookie(this.getUidKey()),
							a = e.permits.join(","),
							i = e.web_permits.join(",");
						return l()(e.oldnum + t + e.issuper + a + i) == e.random
					},
					repalceProtocol: function(e) {
						var t = this;
						if (!window.location.href.includes("/cloudprintself/qrcode")) return e;
						if (e instanceof Array) {
							var a = [];
							return e.forEach((function(e) {
								a.push(t.repalceProtocolOne(e))
							})), a
						}
						return this.repalceProtocolOne(e)
					},
					repalceProtocolOne: function(e) {
						var t = e.split("//");
						return ["https:", "http:"].includes(t[0]) && t[0] != location.protocol && (t[0] = location.protocol, e = t.join("//")), e
					},
					staticPath: function(e) {
						return s.a.appConfig.staticUrl + e
					},
					debounce: function(e, t, a, i) {
						if ("function" !== typeof t) throw new TypeError("need a function");
						var T = "debounce_" + e;
						window[T] && clearTimeout(window[T]), "function" === typeof i && i(), window[T] = setTimeout((function() {
							t()
						}), a)
					},
					getUrlStr: function(e, t) {
						for (var a in e += "?", t) t[a] && (e += a + "=" + t[a] + "&");
						return e.slice(0, -1)
					},
					getUidKey: function() {
						return s.a.appConfig.userKeyPrefix ? s.a.appConfig.userKeyPrefix + "_" + s.a.appConfig.uidKey : s.a.appConfig.uidKey
					},
					isEmptyObj: function(e) {
						return !e || !Object.keys(e).length
					},
					firstUppercase: function(e) {
						return !!e && (e = e.toString(), e.substr(0, 1).toUpperCase() + e.substr(1))
					},
					copyObj: function(e) {
						return JSON.parse(JSON.stringify(e))
					},
					copyObjFor: function(e) {
						function t(e) {
							if ("object" != Object(c["a"])(e)) return e;
							var a = {};
							if (Array.isArray(e) ? a = [] : null === e && (a = null), null !== a)
								for (var i in e) a[i] = t(e[i]);
							return a
						}
						return t(e)
					},
					getStyle: function(e, t) {
						e = this.copyObj(e);
						for (var a in e = Object(Y["a"])(Object(Y["a"])({}, e), t), e) NaN !== Number(e[a]) && isFinite(e[a]) && (e[a] = e[a] + "px");
						return e
					},
					fireEvent: function(e, t) {
						if (document.createEventObject) {
							var a = document.createEventObject();
							return e.fireEvent("on" + t, a)
						}
						a = document.createEvent("HTMLEvents");
						return a.initEvent(t, !0, !0), !e.dispatchEvent(a)
					},
					isWeixin: function() {
						var e = navigator.userAgent,
							t = e.indexOf("PKUiOS") > -1,
							a = e.indexOf("PKUAndroid") > -1,
							i = e.indexOf("Android") > -1 || e.indexOf("Adr") > -1 || a,
							T = !! e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || t,
							n = i || T;
						e = e.toLowerCase();
						var o = "micromessenger" == e.match(/MicroMessenger/i) || "_sq_" == e.match(/_SQ_/i);
						return {
							isWeixin: o,
							isPhone: n,
							isAndroid: i,
							isiOS: T
						}
					},
					getCurrUrl: function(e) {
						try {
							var t = s.a.appConfig.baseUrl.slice(0, -1) + (e || s.a.appRouter.currentRoute.fullPath),
								a = ["<", ">", ",", "$", "\\(", "\\)"];
							return a.forEach((function(e) {
								t = t.replace(e, "")
							})), encodeURIComponent(t)
						} catch (n) {
							var i = window.location.href,
								T = ["<", ">", ",", "$", "\\(", "\\)"];
							return T.forEach((function(e) {
								i = i.replace(e, "")
							})), encodeURIComponent(i)
						}
					},
					getCookie: function(e) {
						var t, a = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
						return (t = document.cookie.match(a)) ? unescape(t[2]) : null
					},
					getSpendTime: function(e, t) {
						if (void 0 != e) {
							if (e = e.replace(/\-/g, "/"), null != t) {
								t = t.replace(/\-/g, "/");
								var a = new Date(t).getTime() - new Date(e).getTime()
							} else a = (new Date).getTime() - new Date(e).getTime();
							var i = parseInt(a / 1e3 / 60 / 60 / 24),
								T = parseInt(a / 1e3 / 60 / 60 % 24),
								n = parseInt(a / 1e3 / 60 % 60);
							return 0 == i && 0 == T && n <= 0 ? "一分钟以内" : 0 == i && 0 == T ? n + "分钟" : 0 == i ? T + "小时" + n + "分钟" : i + "天" + T + "小时" + n + "分钟"
						}
					},
					query: function(e) {
						var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
							a = window.location.search.substr(1).match(t);
						return null != a ? unescape(a[2]) : null
					},
					getUrlParam: function(e) {
						if (e.split("?")[1]) {
							var t = e.split("?")[1].split("#")[0];
							if (!t) return {};
							for (var a = t.split("&"), i = {}, T = 0; T < a.length; T++) {
								var n = a[T].split("=")[0],
									o = a[T].split("=")[1];
								i[n] = o
							}
							return i
						}
						return ""
					},
					setVueData: function(e, t) {
						for (var a in t) e[a] = t[a]
					},
					getWebId: function() {
						return s.a.appConfig.webId
					},
					mergeObj: function(e, t, a) {
						return e = e || {}, t = t || {}, a = a || {}, Object(Y["a"])(Object(Y["a"])(Object(Y["a"])({}, e), t), a)
					},
					getStrTime: function(e, t) {
						var a = t ? new Date(t) : new Date,
							i = {};
						for (var T in i["Y"] = a.getFullYear(), i["m"] = a.getMonth() + 1, i["d"] = a.getDate(), i["H"] = a.getHours(), i["i"] = a.getMinutes(), i["s"] = a.getSeconds(), i["m"] = i["m"] >= 10 ? i["m"] : "0" + i["m"], i["d"] = i["d"] >= 10 ? i["d"] : "0" + i["d"], i["H"] = i["H"] >= 10 ? i["H"] : "0" + i["H"], i["i"] = i["i"] >= 10 ? i["i"] : "0" + i["i"], i["s"] = i["s"] >= 10 ? i["s"] : "0" + i["s"], i) e = e.replace(T, i[T]);
						return e
					},
					swapArray: function(e, t, a) {
						return e[t] = e.splice(a, 1, e[t])[0], e
					},
					getDocumentTitle: function(e, t) {
						document.title = e
					},
					setGetUrl: function(e, t) {
						var a = "";
						for (var i in t) void 0 != t[i] && (a += i + "=" + t[i] + "&");
						return a && (a = a.slice(0, -1)), e + "?" + a
					},
					closePage: function() {
						var e = navigator.appName;
						"Netscape" == e && (window.open("", "_self", ""), window.close()), "Microsoft Internet Explorer" == e && (window.parent.opener = "whocares", window.parent.close())
					},
					isUrl: function(e) {
						var t = /^(?=^.{3,255}$)(http(s)?:\/\/)(www\.)?/;
						return t.test(e)
					},
					getWordLength: function(e) {
						var t = 0;
						try {
							e = e.replace(/(\r\n+|\s+|　+)/g, "龘"), e = e.replace(/龘+/g, ""), t = e.length
						} catch (a) {}
						return t
					},
					validateWordNumber: function(e, t, a) {
						var i = P.getWordLength(e);
						return t && a ? !! (i <= t && i >= a) : t && !a ? !! (i <= t) : !t && a ? !! (i >= a) : void 0
					}
				}, u = P,
				d = a("1b63"),
				p = function() {
					var e = this,
						t = e._self._c;
					return t("div", {
						staticClass: "miniProgramDownload"
					}, [t("div", {
						staticClass: "cont"
					}, [e._v("\n       小程序暂不支持 " + e._s(e.fileType) + " 格式文件的下载，请在微信或浏览器中下载。\n  ")]), e._v(" "), t("div", {
						staticClass: "btn",
						staticStyle: {
							"border-bottom": "1px solid rgb(234 234 234)"
						},
						on: {
							click: e.copy
						}
					}, [e._v("\n    复制下载地址\n  ")]), e._v(" "), t("div", {
						staticClass: "btn",
						on: {
							click: function(t) {
								return e.remove()
							}
						}
					}, [e._v("\n    关闭\n  ")])])
				}, X = [],
				m = {
					data: function() {
						return {
							url: ""
						}
					},
					props: {
						downloadUrl: {
							type: String,
							required: !0
						},
						fileType: {
							type: String,
							required: !0
						}
					},
					created: function() {
						this.getUrl()
					},
					mounted: function() {},
					methods: {
						copy: function() {
							var e = this;
							this.$appCommonH.copyText(this.url, (function() {
								e.$message.success("复制成功"), e.remove()
							}))
						},
						getUrl: function() {
							var e = this;
							this.$appCommonH.getAvoidLoginDownUrl("getDownloadFileUrl", this.downloadUrl).then((function(t) {
								e.url = t, console.log(t)
							}))
						}
					}
				}, h = m,
				f = (a("81c0"), a("0b56")),
				S = Object(f["a"])(h, p, X, !1, null, null, null),
				g = S.exports,
				A = a("2e94"),
				v = u;
			v.toCodeHelper = A, v.isXianxiu = function() {
				return 1 == this.getCookie("xxxt")
			}, v.getTodoStatus = function(e) {
				return 0 == e.task_status || 1 == e.task_status || (0 == e.task_status || 1 == e.task_status) && e.flags.includes(5)
			}, v.getSignValue = function(e) {
				return 1 == e.type && e.flags.includes(7) ? 2 : 3 == e.type ? 1 : void 0
			}, v.setSign = function(e) {
				var t = this.getStrTime("Ymd"),
					a = this.getUrlParam(e),
					i = a["file"] ? a["file"] : "";
				return i ? (a["sign"] && (e = e.split("sign")[0].slice(0, -1)), e + "&sign=" + l()(i + "" + t)) : e
			}, v.postTimeLine = function(e, t) {
				if (!localStorage.getItem("openPostTimeLine")) return !1;
				var a = "postTimeLine",
					i = localStorage.getItem(a);
				t = t || {}, t.nowTime = (new Date).getTime(), t.api = t.api ? t.api : "", t.useTime = t.useTime ? t.useTime : 0;
				var T = new FormData;
				T.append("type", e), T.append("uid", i), T.append("data", JSON.stringify(t));
				var n = new XMLHttpRequest;
				n.open("post", location.protocol + "//" + location.hostname + "/api/debug/log"), n.send(T)
			}, v.openDebug = function() {
				return -1 !== window.location.href.indexOf("debug=1")
			}, v.debugConsole = function() {
				if (this.openDebug())
					for (var e in arguments) console.log(arguments[e])
			}, v.getAgentParams = function(e) {
				return e.agent_uid || e.starter_depart_id ? {
					agent_uid: e.agent_uid ? e.agent_uid : 0,
					starter_depart_id: e.starter_depart_id ? e.starter_depart_id : 0,
					agent_name: e.agent_name ? e.agent_name : ""
				} : {}
			}, v.templateAnalysis = function(e) {
				if (!e.length) return "";
				var t = [],
					a = {
						formData: [],
						varData: []
					};
				return e.split("{").forEach((function(e) {
					return t.push.apply(t, Object(n["a"])(e.split("}")))
				})), t.forEach((function(e, t) {
					t % 2 == 1 && (0 == e.indexOf("form") ? a.formData.push(e) : 0 != e.indexOf("user") && 0 != e.indexOf("app") || a.varData.push(e))
				})), a.formData.forEach((function(e) {
					var a = e.split("form")[1].slice(0, e.split("form")[1].indexOf("_")),
						i = e.split("form")[1].slice(e.split("form")[1].indexOf("_") + 1),
						T = "";
					if (window["tablevm".concat(a)] && window["tablevm".concat(a)].plugin.plugins[i]) {
						var n = window["tablevm".concat(a)].plugin.plugins[i];
						switch (n.type) {
							case "dRegion":
								T = n.data.address;
								break;
							case "dCalendar":
								var o = new Date(n.data),
									s = o.getFullYear() + "年",
									r = (o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1) + "月",
									Y = (o.getDate() < 10 ? "0" + o.getDate() : o.getDate()) + "日";
								T = s + r + Y;
								break;
							case "dOpinion":
								T = n.attr.data.options.filter((function(e) {
									return e.value == n.data.option
								}))[0].name;
								break;
							default:
								T = n.data instanceof Object && n.data.name ? n.data.name : n.data instanceof Array && n.data[0] && n.data[0].name ? n.data.map((function(e) {
									return e.name
								})).join("、") : n.data
						}
					}
					t.splice(t.indexOf(e), 1, T)
				})), a.varData.forEach((function(e) {
					t.splice(t.indexOf(e), 1, window.$EVN["matter_".concat(e)] || "")
				})), t.join("")
			}, v.appDetail = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
				if (e.details_page) {
					if (1 == e.mobile_limit && t) return void s.a.prototype.$message.warning("请前往pc端发起");
					if (2 == e.mobile_limit && !t) return void s.a.prototype.$message.warning("请前往移动端发起");
					var i = window.location.origin + (t ? "/v2/matter/m_start?id=" : "/v2/matter/start?id=") + e.id;
					"pku" == v.getWebId() && (i += "y" == sessionStorage.getItem("pku_hiddenHeader") ? "&hiddenHeader=y" : ""), v.isWeixin().isPhone ? location.href = i : window.open(i, "_blank")
				} else {
					i = window.location.origin + (t ? "/v2/matter/m_detail?id=" : "/v2/matter/detail?id=") + e.id;
					a && window.sessionStorage.setItem("isSearchApp", 1), "pku" == v.getWebId() && (i += "y" == sessionStorage.getItem("pku_hiddenHeader") ? "&hiddenHeader=y" : ""), v.isWeixin().isPhone ? location.href = i : window.open(i, "_blank")
				}
			}, v.setBpmnProperties = function(e, t) {
				try {
					"undefined" == typeof e[0].tagName || "INPUT" !== e[0].tagName && "SELECT" !== e[0].tagName ? e.text(t) : e.val(t), this.fireEvent(e[0], "input"), this.fireEvent(e[0], "change")
				} catch (a) {
					console.log(e[0]), console.log(e.tagName), console.log(e), console.log(a)
				}
			}, v.timestampToTime = function(e) {
				var t = new Date(1e3 * e),
					a = t.getFullYear() + "-",
					i = (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-",
					T = t.getDate() + " ",
					n = t.getHours() + ":",
					o = t.getMinutes() + ":",
					s = t.getSeconds();
				return a + i + T + n + o + s
			}, v.getDocumentTitle = function(e, t) {
				"buaa" == appConfig.webId ? document.title = "".concat(e) : "pku" == appConfig.webId ? document.title = "北京大学网上办事大厅" : document.title = e
			}, v.toExtend = function(e, t) {
				switch (e.type) {
					case "download":
						var a = d["a"].getApi(e.url);
						window.open(this.setGetUrl(a, t));
						break
				}
			}, v.toInfoCenter = function() {
				var e = r["a"].getConfigId("ucenterPath", window.location.hostname);
				if (e.includes(".")) {
					var t = "";
					e.includes("http") || (t = "".concat(window.location.protocol, "//")), window.open(t + e, "_blank")
				} else window.open(appConfig.baseUrl + e, "_blank")
			}, v.copyText = function(e, t) {
				var a = document.createElement("input");
				a.setAttribute("id", "cp_hgz_input"), a.value = e, document.getElementsByTagName("body")[0].appendChild(a), document.getElementById("cp_hgz_input").select(), document.execCommand("copy"), document.getElementById("cp_hgz_input").remove(), t && t(e)
			}, v.getAvoidLoginDownUrl = function(e, t) {
				var a = {};
				return t.replace("?", "&").split("&").forEach((function(e, t) {
					0 == t ? a.url = e : e.includes("=") && (a[e.split("=")[0]] = e.split("=")[1])
				})), new Promise((function(t, i) {
					s.a.appFetch({
						method: "get",
						url: e,
						data: a
					}, (function(e) {
						0 == e.e ? t(e.d) : s.a.prototype.$message.error({
							message: e.m
						})
					}), (function(e) {
						s.a.prototype.$message.error({
							message: "下载地址获取失败"
						})
					}))
				}))
			}, v.miniProgramDownload = function() {
				var e = Object(T["a"])(Object(i["a"])().mark((function e(t, a) {
					var T, n, o, r;
					return Object(i["a"])().wrap((function(e) {
						while (1) switch (e.prev = e.next) {
							case 0:
								if (t && a && a.split(".")[1]) {
									e.next = 2;
									break
								}
								return e.abrupt("return");
							case 2:
								if (T = a.split(".").pop().toLowerCase(), T) {
									e.next = 5;
									break
								}
								return e.abrupt("return");
							case 5:
								return e.next = 7, v.isMiniprogram();
							case 7:
								n = e.sent, n ? (o = ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf"], o.includes(T) ? v.getAvoidLoginDownUrl("getDownloadFileUrl", t).then((function(e) {
									wx.miniProgram.navigateTo({
										url: "../downloadFile/downloadFile?downloadUrl=".concat(encodeURIComponent(e), "&fileName=").concat(a)
									})
								})) : (r = new s.a({
									render: function(e) {
										return e(g, {
											props: {
												downloadUrl: t,
												fileType: T
											}
										})
									}
								}).$mount(), document.body.appendChild(r.$el), r.$children[0].remove = function() {
									document.body.removeChild(r.$el), r.$destroy()
								})) : window.open(t);
							case 9:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function(t, a) {
					return e.apply(this, arguments)
				}
			}(), v.isMiniprogram = function() {
				var e = window.navigator.userAgent.toLowerCase();
				return new Promise((function(t) {
					-1 == e.indexOf("micromessenger") ? t(!1) : wx.miniProgram.getEnv((function(e) {
						e.miniprogram ? t(!0) : t(!1)
					}))
				}))
			}, v.minipDownloadFile = function(e, t) {
				"miniprogram" === window.__wxjs_environment ? s.a.appFetch({
					url: "getDownloadFile",
					method: "get",
					data: {
						id: t
					}
				}).then((function(e) {
					0 == e.e ? wx.miniProgram.navigateTo({
						url: "../downloadFile/downloadFile?downloadUrl=".concat(encodeURIComponent(e.d), "&fileName=").concat(e.d.split("/").pop())
					}) : 1 == e.e ? s.a.prototype.$message({
						message: "文件大于50M，不能通过小程序 下载，请到电脑进行下载",
						type: "warning",
						showClose: !0
					}) : s.a.prototype.$message({
						type: "error",
						message: e.m,
						showClose: !0
					})
				})).
				catch ((function(e) {
					s.a.prototype.$message({
						type: "error",
						message: "数据请求失败，请重新进入页面或点击按钮",
						showClose: !0
					})
				})) : window.open(e)
			}, v.toChinesNum = function(e) {
				var t = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
					a = ["", "十", "百", "千", "万"];
				e = parseInt(e);
				var i = function(e) {
					for (var i = e.toString().split("").reverse(), T = "", n = 0; n < i.length; n++) T = (0 == n && 0 == i[n] || n > 0 && 0 == i[n] && 0 == i[n - 1] ? "" : t[i[n]] + (0 == i[n] ? a[0] : a[n])) + T;
					return T
				}, T = Math.floor(e / 1e4),
					n = e % 1e4;
				return n.toString().length < 4 && (n = "0" + n), T ? i(T) + "万" + i(n) : i(e)
			}, v.handleSecond = function(e, t) {
				var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
					i = 0;
				return isNaN(parseInt(e)) ? 0 : (i = "d" == t ? (e / 60 / 60 / 24).toFixed(1) : (e / 60 / 60).toFixed(1), 0 == e ? i = 0 : parseFloat(i) < .1 && (i = .1), a && (i += "d" == t ? "天" : "小时"), i)
			}, v.base64toFile = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "file",
					a = e.split(","),
					i = a[0].match(/:(.*?);/)[1],
					T = i.split("/")[1],
					n = atob(a[1]),
					o = n.length,
					s = new Uint8Array(o);
				while (o--) s[o] = n.charCodeAt(o);
				return new File([s], "".concat(t, ".").concat(T), {
					type: i
				})
			}, v.figureFilter = function(e) {
				var t = String(e || 0);
				return t.length > 6 ? t.slice(0, t.length - 4) + "万" : t
			};
			t["a"] = v
		},
		ea73: function(e, t, a) {
			"use strict";
			a("498a");
			var i = function() {
				var e = this,
					t = e._self._c;
				return t("el-dialog", {
					attrs: {
						"append-to-body": !0,
						visible: e.resetPwdDialog,
						"close-on-click-modal": !1,
						"show-close": !1,
						"lock-scroll": !1,
						width: "390px",
						"custom-class": "common_resetPwdDialog"
					},
					on: {
						"update:visible": function(t) {
							e.resetPwdDialog = t
						}
					}
				}, [t("div", {
					staticClass: "resetPwdDialog_main"
				}, [t("p", {
					staticClass: "title"
				}, [e._v("\n      修改密码\n    ")]), e._v(" "), t("el-form", {
					ref: "ruleForm",
					staticClass: "demo-ruleForm",
					attrs: {
						model: e.pwdData,
						"status-icon": "",
						rules: e.rules,
						"label-width": "80px"
					}
				}, [t("el-form-item", {
					attrs: {
						label: "原始密码",
						prop: "oldPwd"
					}
				}, [t("el-input", {
					attrs: {
						type: "password",
						autocomplete: "off"
					},
					model: {
						value: e.pwdData.oldPwd,
						callback: function(t) {
							e.$set(e.pwdData, "oldPwd", "string" === typeof t ? t.trim() : t)
						},
						expression: "pwdData.oldPwd"
					}
				})], 1), e._v(" "), t("el-form-item", {
					attrs: {
						label: "密码",
						prop: "newPwd"
					}
				}, [t("el-input", {
					attrs: {
						type: "password",
						autocomplete: "off",
						placeholder: "至少8位，包含数字，大写和小写字母"
					},
					model: {
						value: e.pwdData.newPwd,
						callback: function(t) {
							e.$set(e.pwdData, "newPwd", "string" === typeof t ? t.trim() : t)
						},
						expression: "pwdData.newPwd"
					}
				})], 1), e._v(" "), t("el-form-item", {
					attrs: {
						label: "确认密码",
						prop: "newPwd2"
					}
				}, [t("el-input", {
					attrs: {
						type: "password",
						autocomplete: "off"
					},
					model: {
						value: e.pwdData.newPwd2,
						callback: function(t) {
							e.$set(e.pwdData, "newPwd2", "string" === typeof t ? t.trim() : t)
						},
						expression: "pwdData.newPwd2"
					}
				})], 1)], 1), e._v(" "), t("div", {
					staticClass: "btn"
				}, [t("a", {
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: e.hide
					}
				}, [e._v("取消")]), e._v(" "), t("a", {
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: e.resetPwd
					}
				}, [e._v("确定")])])], 1)])
			}, T = [],
				n = a("2e8c"),
				o = (a("d9e2"), a("ac1f"), a("00b4"), {
					data: function() {
						return {
							resetPwdDialog: !1,
							pwdData: {
								oldPwd: "",
								newPwd: "",
								newPwd2: ""
							},
							rules: {
								oldPwd: [{
									validator: this.validateOldPwd,
									trigger: "blur"
								}],
								newPwd: [{
									validator: this.validateNewPwd,
									trigger: "blur"
								}],
								newPwd2: [{
									validator: this.validateNewPwd2,
									trigger: "blur"
								}]
							}
						}
					},
					methods: {
						show: function() {
							this.pwdData = {
								oldPwd: "",
								newPwd: "",
								newPwd2: ""
							}, this.resetPwdDialog = !0
						},
						hide: function() {
							this.$refs.ruleForm.resetFields(), this.resetPwdDialog = !1
						},
						validateOldPwd: function(e, t, a) {
							if (!t) return a(new Error("请输入原始密码"));
							this.$appFetch({
								url: "validate_pass",
								method: "post",
								data: {
									password: this.pwdData.oldPwd
								}
							}, (function(e) {
								0 == e.e ? a() : a(new Error(e.m))
							}), (function(e) {
								a(new Error("验证失败"))
							}))
						},
						validateNewPwd: function(e, t, a) {
							"" === t ? a(new Error("请输入密码")) : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,}$/.test(t) ? a() : a(new Error("至少8位，包含数字，大写和小写字母"))
						},
						validateNewPwd2: function(e, t, a) {
							"" === t ? a(a(new Error("请再次输入密码"))) : t !== this.pwdData.newPwd ? a(new Error("两次输入密码不一致!")) : a()
						},
						resetPwd: function() {
							var e = this;
							this.$refs.ruleForm.validate((function(t) {
								t && e.$appFetch({
									url: "repassword",
									method: "post",
									data: {
										password: e.pwdData.oldPwd,
										"new-password": e.pwdData.newPwd
									}
								}, (function(t) {
									0 == t.e ? (e.$message.success("修改成功请重新登录"), window.setTimeout((function() {
										e.$authH.loginOut()
									}), 1e3)) : e.$message({
										type: "error",
										message: t.m,
										showClose: !0
									})
								}), (function(t) {
									e.$message({
										type: "error",
										message: "数据请求失败，请重新进入页面或点击按钮",
										showClose: !0
									})
								}))
							}))
						}
					}
				}),
				s = (a("08b5"), Object(n["a"])({}, o)),
				r = s,
				Y = a("0b56"),
				c = Object(Y["a"])(r, i, T, !1, null, null, null);
			t["a"] = c.exports
		},
		eafd: function(e, t, a) {
			"use strict";
			a("0fb7"), a("450d");
			var i = a("f529"),
				T = a.n(i),
				n = (a("9e1f"), a("6ed5")),
				o = a.n(n),
				s = (a("6dca"), a("2cf9")),
				r = a.n(s),
				Y = (a("d96c"), a("0c9b")),
				c = a.n(Y),
				B = (a("fb08"), a("21e5")),
				l = a.n(B),
				P = a("8bbf"),
				u = a.n(P);
			u.a.use(l.a), u.a.use(c.a), u.a.use(r.a), u.a.prototype.$MessageBox = o.a, u.a.prototype.$message = function(e) {
				e = e.message ? e : {
					message: e
				}, e.showClose = !e.showClose || e.showClose, T()(e)
			}, u.a.prototype.$message.error = function(e) {
				e = e.message ? e : {
					message: e
				}, e.showClose = !e.showClose || e.showClose, e.type = "error", T.a.error(e)
			}, u.a.prototype.$message.success = function(e) {
				e = e.message ? e : {
					message: e
				}, e.showClose = !e.showClose || e.showClose, e.type = "success", T.a.success(e)
			}, u.a.prototype.$message.warning = function(e) {
				e = e.message ? e : {
					message: e
				}, e.showClose = !e.showClose || e.showClose, e.type = "warning", T.a.warning(e)
			}, u.a.prototype.$message.info = function(e) {
				e = e.message ? e : {
					message: e
				}, e.showClose = !e.showClose || e.showClose, e.type = "info", T.a.info(e)
			}, u.a.prototype.$message.closeAll = function() {
				T.a.closeAll()
			}
		},
		ed52: function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAqxJREFUaEPtWu11EzEQnKkAqIC4AkgFQAfpAKgApwJIBSQVQAdABYQKcCog6SBUMLwxOr872bkPv9N9Rfrj55NO2tmdlXb3RERN0gmADwBeA3gZ90/0/wbANYArkrdlGVn+I+kzgPVEQbQV65LkeTF4B1DS7xlZrAnshuSpB20BSroMtGx6cU79puuawef+zEnyDrKuDHCJ1it0cGWAS/K92LgbA1QHk89uaAY4O5NFAmcLZgtOXAPHUPQOQCWgHRCjE4HnXdbrAvAGwFkcrXdZrI+xIfL6DuBFm/m6AFyNDa4A1CW8bAvwjqTpMZkmyW7SSNe2AH+RdAI8mSbJCe6rJoEywKChbMEmqvTdnykaNJp9MPtg0ICkdwA+ArgHcEHS0cauSXoa+l1rvSZ5EfulJB9F5Tlc7zzYBvVBSRbapY+iGaQjH/9um6SvAN6WxpyTdD2o6HcgUS5+3ZN8NhWAZwC+RcK8IenDuAAQRx6Voycw4EvdHBEjhjvoQ2xoOj0JQuyFdgcsaBp/qrHgXwAnZRaMBjBQ0DR12d+0dPm8klIFHzQlTUVXnvc+EUgyE4rna5LT8MGH/CTl80E3mZRAJrHJZIAJNJApGpSaY9GgiJwPJnCz2imzD3b0wVuSq6GtVLeeJAfmjZW+tpuM1zqtC52GBH8ge3lw+S4AHRc6xdllCEOCKgXlzhl93aXVHZ4uAOvw1Fa9JTkNckI8eOsL4HuSTmj32pjgLExfALd3UmJ0Y4PrE2Bllw2538+2fpKSt31Z0DJu74iF7N7li1abQEpwfVowtZxHz9+nBY8WIuWLjwKgD/BWn4NTajrR3DeP4jJeXFFOpMxRpl0t/0JsKYhdki/+IOki8v8rzSWQS7gcWwkbKwANNEQijiudlsxld/UlJadxe58M/gGxSOKNnBNtHgAAAABJRU5ErkJggg=="
		},
		edbb: function(e, t, a) {
			"use strict";
			var i, T = a("2e8c"),
				n = a("8bbf"),
				o = a.n(n),
				s = a("a925"),
				r = a("b2d6"),
				Y = a.n(r),
				c = a("f0d9"),
				B = a.n(c),
				l = a("4897"),
				P = a.n(l),
				u = {
					thirdpartyApplyBtn: "立即申请",
					serviceDepart: "服务部门",
					serviceOpenTiem: "起止时间",
					openingHoursText: "长期",
					taskSubmitBtn: "正式提交",
					xmlTab: "流程图",
					wxHotTit: "热门服务",
					rejectTips: "请立刻修改，重新提交",
					navPersonalEntry: "个人中心",
					mySubmit: "我的发起",
					myTask: "我的待办",
					noSubmit: "暂无申请事项",
					myFill: "我的填报",
					noTask: "暂无数据",
					noOversee: "暂无督办事项",
					noRead: "暂无数据",
					matterLog: "操作意见",
					thirdpartyBtnText: "查看表单",
					reportEmailExportText: "请输入邮箱地址",
					rejectText: "驳回",
					className: "服务分类",
					serviceHall: "服务大厅",
					serviceHallTwo: "服务大厅",
					numberText: "学工号",
					infoQuery: "信息查询",
					m_startForm: "申请表单",
					loginSignUpText: "校外用户注册",
					loginpwdResetText: "校外用户忘记密码",
					loginSignUpPopText: "校外用户注册账户",
					sitePwdResetText: "校外用户密码找回",
					recommendTabTit1: "学生办事",
					recommendTabTit2: "教师办事",
					recommendTabTit3: "访客办事",
					myTodoTit: "我的待办",
					formPrintText: "打印",
					processTracking: "流程跟踪",
					showTakeCloseText: "关闭页面",
					feedbackContact: "联系方式",
					feedbackContactP: "默认系统手机号",
					feedbackHint: "",
					matterJumpType0: "需线下办理",
					matterJumpPc: "仅电脑端可发起",
					matterNameOrNum: "姓名/学工号",
					mFooterServiceText: "大厅",
					mFooterIndexText: "首页",
					launchToService: "去服务大厅看看",
					mFooterUserCenterText: "我的",
					reserveHallFacility: "硬件设施",
					rightNavFeedbackText: "我要反馈",
					rightNavMyApproval: "我的审批",
					reserveMsgHint: "预约时间段：{time} 预约咨询师：{consultant} 成功预约该咨询师次数：{count} 申请人：{user} 子资源名称：{name}",
					matterTodoUploadName: "用户上传",
					reserveReasonText: "预约备注",
					userDataDepartTitle: "部门",
					siteIndexHotServeText: "热门服务",
					frontMenusMyHomePage: "我的主页",
					reverseHallPersonText: "人",
					reverseHallSuccess: "已成功预约",
					rightNavWeixinText: "关注微信公众号",
					myHomepageWork: "我要办事",
					backXHtext: "学号",
					backXGHtext: "学工号",
					matterReadScreenText: "知会的服务",
					noMatterReadDataText: "暂无知会任务",
					matterTodoReminder: "处理",
					matterTodoPending: "待处理",
					matterTodoBatch: "批量处理",
					matterTodoProcessed: "已处理",
					allNotice: "全部公告",
					noticeText: "通知公告"
				}, d = {
					thirdpartyBtnText: "详细信息",
					condsInstructions: "注意事项",
					applicationDescription: "注意事项",
					feedbackContactP: ""
				}, p = a("9b8c"),
				X = (i = {
					thirdpartyApplyBtn: "立即申请",
					serviceDepart: "服务部门",
					serviceOpenTiem: "起止时间",
					openingHoursText: "长期",
					taskSubmitBtn: "正式提交",
					xmlTab: "流程图",
					wxHotTit: "热门服务",
					rejectTips: "请立刻修改，重新提交",
					navPersonalEntry: "个人中心",
					mySubmit: "我的发起",
					myTask: "我的待办",
					noSubmit: "暂无申请事项",
					noTask: "暂无数据",
					noOversee: "暂无督办事项",
					noRead: "暂无数据",
					matterLog: "操作意见",
					thirdpartyBtnText: "查看表单",
					reportEmailExportText: "请输入邮箱地址",
					rejectText: "驳回",
					className: "服务分类",
					serviceHall: "服务大厅"
				}, Object(p["a"])(i, "serviceDepart", "服务部门"), Object(p["a"])(i, "numberText", "学工号"), Object(p["a"])(i, "infoQuery", "信息查询"), Object(p["a"])(i, "m_startForm", "申请表单"), Object(p["a"])(i, "loginSignUpText", "校外用户注册"), Object(p["a"])(i, "loginpwdResetText", "校外用户忘记密码"), Object(p["a"])(i, "loginSignUpPopText", "校外用户注册账户"), Object(p["a"])(i, "sitePwdResetText", "校外用户密码找回"), Object(p["a"])(i, "condsInstructions", "申请条件和说明"), Object(p["a"])(i, "applicationDescription", "申请说明"), Object(p["a"])(i, "postTheTracking", "公文办结"), Object(p["a"])(i, "receiptOfTracking", "公文办结"), Object(p["a"])(i, "detailZXPlace", "咨询地点"), i);
			o.a.use(s["a"]);
			var m = {
				en: Object(T["a"])(Object(T["a"])({}, Y.a), {}, {
					system: Object(T["a"])(Object(T["a"])({}, X), X)
				}),
				zh: Object(T["a"])(Object(T["a"])({}, B.a), {}, {
					system: Object(T["a"])(Object(T["a"])({}, u), d)
				})
			}, h = new s["a"]({
					locale: window.localStorage.getItem("language") ? window.localStorage.getItem("language") : "zh",
					messages: m
				});
			P.a.i18n((function(e, t) {
				return h.t(e, t)
			}));
			t["a"] = h
		},
		edd4: function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAA7FJREFUaEPtWt1R3DAQ3pULCOkAKghUkFBB8Eg8h6uAo4KQCnJUwOUZaUwqCFQAVBA6CCnA2sze2IxtHE5/9nCe88vNjdfSfvvtSrsrIXSeoih2rbWnRPQJEfe779/ifyK6R8QbIcRFnuePTR2x+ccY8x0A5m8RhIdOCynlWS3/DFBrfbcpjK0Dy4wqpQ5YbgVQa71AxNN1H27SeyK6UErNsYq535ukvKuuQog9nCJ7tQGYRQY4mdjrMrtaXY0x5Er5JsptAW4ia62NfkgXJaK/AHCNiJxdPFprV1mGEGIXAHaJiH+PEPHdUIYcxEWJ6AcDU0pduyiutT6qgH5xkfeRSQ3wVggxz/P83keJWrYoin1r7QIAPoZ83/dNSoAzKeUyhWLGmBMAuEwxVjRAjjMiOjo+Pr5JoVA9xtXVFVczHL9R8RkNUAhxEOqS6wxSuezdOrnX3scCdHZLrfWvpiJKqUMXxWPdNRggr5RKKY4Vp6e7HUkpW7Xoa4NordlVPztN1BEKAshxl2XZfrd6fk2BGIAxFU8QQAD4JqU897FoDECexxjD8331mZNlgwByneXDXqVgK6n3cVH+PpTFEIAPUkrvZlQsg5WROIH44MNiCMAzKSVnG15PIoDebuoN0Fp7GLKppwDIm78QorXdrLPyFmDXQr6LQ/19Cgb7FqvkDE4eoBDifZ7nT+ss132fgsGQrWIbgz1MOSfYzW9TMBiSeHsz6Jtk1yB5iW8CDtlqtNZLRPRqa3gD5OaRlHLPNwZTyBtj/gDAjs9YIQB5fG83Da0HG9tMUBsjCCAR3bgWrKn2wdAjhiCArDQR5a5twdhqgtuKiFj4uGYtGwwQAJ6qsslpTwxdRYui2LHW8vGeV+ylAMgscnM3d7Fs6CrKsYuIrRXYZb4kAKtBllLKmc+krrLGGO6NOvd9+saNcdHn8ZjJLMtmISlcn1LslmVZXiIit/SjniQAKw34cGUWsoE3EVQ1Hy8oQTHXtUZKgPXYy+q+itf5BDd5y7L8HhNvg7lo38B8fAwAyyzLbv/X+ebqoCxL7neeDHWFZQgG+/D2Zj7GGF7++YxwsGcsgC/y15DKIMQKYwFk3VrduDHY40nHBPhEROdCiHtr7TzFFuDC6JgAXfRJLrMFmNykIw/IDHr3+0fWMWa6h+lfxgvpNcaYdMxvV9cpecIpXql8vhBbW3RKsUhEP5VSq1KrdRFgCkzWzNXEvbjpUGX4nGlwm8DrNHXM+OrM9cCdvizLFt2j9X8bpk5/qx1T+gAAAABJRU5ErkJggg=="
		},
		eebb: function(e, t) {
			e.exports = {
				port: "8883",
				apiProtocol: "https",
				mobileMaxWidth: 640,
				devApi: "e.qau.edu.cn",
				baseUrl: "",
				apiBaseUrl: "",
				staticUrl: "/static/",
				routeBasePath: "/v2/",
				uploadUrl: "https://dev-officeflowimg.rlstech.cn/",
				upImageUrl: "http://test.officeflowimg.rlstech.cn/",
				upFileUrl: "",
				uidKey: "vjuid",
				sourceV: "0",
				apis: {
					getCheckLogin: "/api/login/check-cas-login",
					frameToLogin: "/api/login/main",
					getSiteConfig: "/v2/static/json/site-options.json",
					getSystemConfig: "/system/home/site-options",
					getAllAuth: "/v2/static/json/auth.json",
					getUserName: "/v2/static/json/get-name.json",
					uploadindex: "/api/upload/index",
					verificationCode: "/site/login/idiom-code"
				},
				source_types: {
					0: "未知",
					1: "注册",
					2: "后台添加",
					3: "脚本导入"
				},
				pcMobileChange: [],
				customConfig: {
					isToInfoCenter: !0,
					isToPdf: {
						default: 1
					},
					ucenterPath: {
						default: "site/personal"
					},
					toPdfHttp: "https://",
					oldPrintPage: {
						margin: "20px"
					},
					newPrintPage: {
						margin: "0"
					},
					formLandscape: {}
				}
			}
		},
		fa89: function(e, t, a) {
			"use strict";
			a("e9c4"), a("313d"), a("0eb6"), a("b7ef"), a("8bd4"), a("caad"), a("2532");
			var i = function(e) {
				this.config = {
					DbName: "BrowerDb",
					expires: 0
				}, this.initDb(e)
			};
			i.prototype.initDb = function(e) {
				for (var t in e) this.config[t] = void 0 !== this.config[t] ? e[t] : this.config[t];
				this.config.DbTime = this.config.DbName + "_time"
			}, i.prototype.getKey = function(e) {
				return this.config.DbName + "_" + e
			}, i.prototype.setLItem = function(e, t, a) {
				if (this.clearOverData(), a = void 0 === a ? this.config.expires : a, this.removeLItem(e), a) {
					var i = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {}, T = null != localStorage.getItem(this.config.DbTime) ? JSON.parse(localStorage.getItem(this.config.DbTime)) : {};
					i[e] = t, T[e] = this.getSelfTime(a), localStorage.setItem(this.config.DbName, JSON.stringify(i)), localStorage.setItem(this.config.DbTime, JSON.stringify(T))
				} else localStorage.setItem(this.getKey(e), JSON.stringify(t))
			}, i.prototype.getLItem = function(e) {
				this.clearOverData();
				var t = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {}, a = JSON.parse(localStorage.getItem(this.getKey(e)));
				return null !== a ? a : void 0 !== t[e] ? t[e] : null
			}, i.prototype.removeLItem = function(e) {
				this.clearOverData();
				var t = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {}, a = null != localStorage.getItem(this.config.DbTime) ? JSON.parse(localStorage.getItem(this.config.DbTime)) : {}, i = {}, T = {};
				if (void 0 !== t[e]) {
					for (var n in t) e !== n && (i[n] = t[n], T[n] = a[n]);
					localStorage.setItem(this.config.DbName, JSON.stringify(i)), localStorage.setItem(this.config.DbTime, JSON.stringify(T))
				}
				localStorage.removeItem(this.getKey(e))
			}, i.prototype.clearLAll = function() {
				localStorage.removeItem(this.config.DbName), localStorage.removeItem(this.config.DbTime)
			}, i.prototype.clearOverData = function() {
				var e = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {}, t = null != localStorage.getItem(this.config.DbTime) ? JSON.parse(localStorage.getItem(this.config.DbTime)) : {}, a = this.getSelfTime(0),
					i = {}, T = {};
				for (var n in t) t[n] > a && void 0 !== e[n] && (i[n] = e[n], T[n] = t[n]);
				localStorage.setItem(this.config.DbName, JSON.stringify(i)), localStorage.setItem(this.config.DbTime, JSON.stringify(T))
			}, i.prototype.getSelfTime = function(e) {
				var t = new Date;
				return t.setTime(t.getTime() + parseInt(e)), t.getTime()
			}, i.prototype.setSItem = function(e, t) {
				sessionStorage.setItem(this.getKey(e), JSON.stringify(t)), sessionStorage.setItem("".concat(this.getKey(e), "_token"), window.btoa(encodeURIComponent(JSON.stringify(t))))
			}, i.prototype.getSItem = function(e) {
				return e.includes("_token") ? sessionStorage.getItem(this.getKey(e)) : JSON.parse(sessionStorage.getItem(this.getKey(e)))
			}, i.prototype.removeSItem = function(e) {
				sessionStorage.removeItem(this.getKey(e))
			}, t["a"] = new i({
				DbName: "officeDb",
				expires: 0
			})
		},
		fad0: function(e, t, a) {}
	}
]);