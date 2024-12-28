"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3762],
  {
    56828: function (e, t, r) {
      r.d(t, {
        AppFooter: function () {
          return y;
        },
      });
      var o = r(27573),
        a = r(70110),
        n = r.n(a),
        i = r(88146),
        l = r(84231),
        s = r(28145),
        d = r(19879),
        c = r(81597);
      let p = (0, d.zo)("footer", { name: "AppFooter" })((e) => {
          let { theme: t } = e;
          return {
            width: "100%",
            background: t.palette.background.default,
            paddingBottom: s.V,
            paddingTop: 24,
            position: "relative",
            [t.breakpoints.up("md")]: { paddingBottom: 0 },
          };
        }),
        h = (0, d.zo)("div", { name: "AppFooter-FooterContent" })(() => ({
          paddingLeft: 0,
          paddingRight: 0,
          maxWidth: "calc(100% - 32px)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        })),
        g = (0, d.zo)("div", { name: "AppFooter-Columns" })((e) => {
          let { theme: t } = e;
          return {
            display: "flex",
            rowGap: 24,
            flexWrap: "wrap",
            [t.breakpoints.up("md")]: {
              columnGap: 48,
              maxWidth: "calc(".concat(
                t.breakpoints.values.lg,
                "px - 96px + 48px)"
              ),
              margin: "0 auto",
              width: "100%",
            },
          };
        }),
        m = (0, d.zo)("div", { name: "AppFooter-Column" })((e) => {
          let { theme: t } = e;
          return { width: "50%", [t.breakpoints.up("md")]: { flex: 1 } };
        }),
        x = (0, d.zo)("div", { name: "AppFooter-ColumnTitle" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p2,
            color: t.palette.text.primary,
            fontWeight: 500,
            marginBottom: 16,
          };
        }),
        u = (0, d.zo)("div", { name: "AppFooter-ColumnItem" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p2,
            color: t.palette.text.secondary,
            padding: "4px 0",
            "&:hover": {
              textDecoration: "underline",
              color: t.palette.text.primary,
            },
          };
        }),
        f = (0, d.zo)("img", { name: "AppFooter-LogoDesktop" })((e) => {
          let { theme: t } = e;
          return {
            filter: "light" === t.palette.mode ? "invert(0)" : "invert(1)",
          };
        }),
        j = (0, d.zo)("div", { name: "AppFooter-Divider" })((e) => {
          let { theme: t } = e;
          return {
            borderTop: "1px solid ".concat(t.palette.divider),
            marginTop: 64,
          };
        }),
        v = (0, d.zo)(l.$, { name: "AppFooter-BottomBar" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p3,
            color: t.palette.text.secondary,
            maxWidth: "calc(".concat(
              t.breakpoints.values.lg,
              "px - 96px + 48px)"
            ),
            margin: "0 auto",
            width: "100%",
            padding: "24px 0",
          };
        }),
        b = (0, d.zo)(n(), { name: "Logo" })((e) => {
          let { theme: t } = e;
          return {
            filter: "light" === t.palette.mode ? "invert(1)" : "invert(0)",
            opacity: 0.5,
          };
        }),
        k = (0, d.zo)("div", { name: "AppFooter-BottomBarLink" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p3,
            color: t.palette.text.secondary,
            "&:hover": {
              textDecoration: "underline",
              color: t.palette.text.primary,
            },
          };
        }),
        y = () =>
          (0, o.jsx)(p, {
            children: (0, o.jsxs)(h, {
              children: [
              ],
            }),
          });
    },
    84231: function (e, t, r) {
      r.d(t, {
        $: function () {
          return a;
        },
      });
      var o = r(19879);
      let a = Object.assign(
        (0, o.zo)("div", { name: "Bar" })((e) => {
          let { theme: t, padded: r } = e;
          return {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: t.palette.text.primary,
            flexWrap: "wrap",
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: r ? t.spacing(2) : 0,
            paddingRight: r ? t.spacing(2) : 0,
            maxWidth: 1440,
            margin: "0 auto",
            rowGap: t.spacing(2),
            [t.breakpoints.up("md")]: {
              paddingLeft: r ? t.spacing(6) : 0,
              paddingRight: r ? t.spacing(6) : 0,
            },
          };
        }),
        {
          Section: (0, o.zo)("div", { name: "BarSection" })((e) => {
            let { theme: t, scrollable: r } = e;
            return {
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              columnGap: t.spacing(2.5),
              rowGap: t.spacing(1),
              ...(r && {
                flexWrap: "nowrap",
                overflowX: "auto",
                whiteSpace: "nowrap",
                paddingRight: t.spacing(2),
              }),
            };
          }),
          Item: (0, o.zo)("div", { name: "BarItem" })(() => ({
            marginRight: 40,
          })),
        }
      );
    },
    28145: function (e, t, r) {
      r.d(t, {
        V: function () {
          return d;
        },
        t: function () {
          return g;
        },
      });
      var o = r(27573),
        a = r(19902),
        n = r(88146),
        i = r(81695),
        l = r(5221),
        s = r(19879);
      let d = 62,
        c = (0, s.zo)("div", { name: "MobileBottomBar" })((e) => {
          let { theme: t } = e;
          return {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: d,
            backgroundColor: t.palette.background.paper,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 100,
            maxWidth: "100vw",
            padding: "0 12px",
            [t.breakpoints.up("md")]: { display: "none" },
          };
        }),
        p = (0, s.zo)(n.default, {
          name: "MobileBottomBar-Item",
          shouldForwardProp: (e) => "active" !== e,
        })((e) => {
          let { theme: t, active: r } = e;
          return {
            height: "100%",
            minWidth: 64,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: r ? t.palette.text.primary : t.palette.text.secondary,
            flexDirection: "column",
            "& div": { display: r ? "block" : "none" },
          };
        }),
        h = (0, s.zo)("div", { name: "MobileBottomBar-ItemLabel" })((e) => {
          let { theme: t } = e;
          return { ...t.typography.p4, marginTop: 6 };
        }),
        g = (0, a.Pi)(() => {
          let e = (0, i.usePathname)();
          return (0, o.jsxs)(c, {
            children: [
            ],
          });
        });
    },
    97914: function (e, t, r) {
      r.d(t, {
        PageLayout: function () {
          return h;
        },
      });
      var o = r(27573),
        a = r(19902),
        n = r(82293),
        i = r(90818),
        l = r(28145),
        s = r(19879);
      let d = {
          page: {
            dark: {
              backgroundImage: "url('/static/backgrounds/stars.svg')",
              backgroundRepeat: "repeat",
            },
            light: {},
          },
        },
        c = (0, s.zo)("div", { name: "Layout" })((e) => {
          let { theme: t, background: r } = e;
          return {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: t.palette.background.default,
            position: "relative",
            "&::before": {
              backgroundSize: "100%",
              content: '""',
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              ...r,
            },
          };
        }),
        p = (0, s.zo)("main", {
          name: "LayoutMain",
          shouldForwardProp: (e) => "centered" !== e && "withTracker" !== e,
        })((e) => {
          let { centered: t, theme: r, withTracker: o } = e;
          return {
            display: "flex",
            flexDirection: "column",
            alignItems: t ? "center" : "flex-start",
            justifyContent: t ? "center" : "flex-start",
            flex: 1,
            position: "relative",
            maxWidth: "calc(100% - 32px)",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            [r.breakpoints.up("sm")]: {
              maxWidth: "calc(100% - 32px)",
              marginLeft: "auto",
              marginRight: "auto",
            },
            [r.breakpoints.up("md")]: {
              maxWidth: "calc(".concat(
                r.breakpoints.values.lg,
                "px - 96px + 48px)"
              ),
              paddingLeft: 24,
              paddingRight: 24,
              marginLeft: "auto",
              marginRight: "auto",
            },
            ...(!t && { marginBottom: 168 }),
            ...(t && {
              paddingBottom: l.V,
              paddingTop: o ? 24 : 0,
              maxWidth: "100%",
              [r.breakpoints.up("md")]: {
                paddingTop: o ? 24 : 0,
                paddingBottom: 96,
              },
            }),
          };
        }),
        h = (0, a.Pi)((e) => {
          let {
              children: t,
              centered: r,
              header: a,
              footer: h,
              background: g = "page",
            } = e,
            m = (0, s.Fg)(),
            x = d[g][m.palette.mode],
            u =
              i.uiStore.appHeaderTracker.value &&
              !!n.transactionStore.pendingTransactions.length;
          return (0, o.jsxs)(c, {
            background: x,
            children: [
              a,
              (0, o.jsx)(p, { centered: r, withTracker: u, children: t }),
              h,
              (0, o.jsx)(l.t, {}),
            ],
          });
        });
    },
    81597: function (e, t, r) {
      r.d(t, {
        f: function () {
          return o;
        },
      });
      let o = {
        discord: "/discord",
        layerzero: "https://layerzero.network/",
        medium: "https://medium.com/stargate-official",
        github: "https://github.com/stargate-protocol",
        governance: "https://commonwealth.im/stargatetoken/",
        snapshot: "https://snapshot.org/#/stgdao.eth",
        telegram: "https://t.me/joinchat/LEM0ELklmO1kODdh",
        twitter: "https://twitter.com/StargateFinance",
        faq: "https://stargateprotocol.gitbook.io/stargate/v/v2-user-docs/faq",
        mediaKit:
          "https://publicdocs.notion.site/publicdocs/Stargate-Media-Kit-7d6dc6135be646d6a1d150270ecefc45",
        docs: "https://stargateprotocol.gitbook.io/stargate/v/v2-developer-docs",
        docsUser: "https://stargateprotocol.gitbook.io/stargate/v/v2-user-docs",
        docsVoting:
          "https://stargateprotocol.gitbook.io/stargate/v/user-docs/governance/proposals-and-voting",
        docsGovernance:
          "https://stargateprotocol.gitbook.io/stargate/v/user-docs/governance/governance-model",
      };
    },
  },
]);
