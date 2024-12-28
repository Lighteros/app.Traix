(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2769],
  {
    30609: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 77535)),
        Promise.resolve().then(r.bind(r, 97914)),
        Promise.resolve().then(r.bind(r, 93564));
    },
    28145: function (e, t, r) {
      "use strict";
      r.d(t, {
        V: function () {
          return l;
        },
        t: function () {
          return h;
        },
      });
      var n = r(27573),
        i = r(19902),
        a = r(88146),
        o = r(81695),
        s = r(5221),
        d = r(19879);
      let l = 62,
        c = (0, d.zo)("div", { name: "MobileBottomBar" })((e) => {
          let { theme: t } = e;
          return {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: l,
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
        p = (0, d.zo)(a.default, {
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
        u = (0, d.zo)("div", { name: "MobileBottomBar-ItemLabel" })((e) => {
          let { theme: t } = e;
          return { ...t.typography.p4, marginTop: 6 };
        }),
        h = (0, i.Pi)(() => {
          let e = (0, o.usePathname)();
          return (0, n.jsxs)(c, {
            children: [],
          });
        });
    },
    97914: function (e, t, r) {
      "use strict";
      r.d(t, {
        PageLayout: function () {
          return u;
        },
      });
      var n = r(27573),
        i = r(19902),
        a = r(82293),
        o = r(90818),
        s = r(28145),
        d = r(19879);
      let l = {
          page: {
            dark: {
              backgroundImage: "url('/static/backgrounds/stars.svg')",
              backgroundRepeat: "repeat",
            },
            light: {},
          },
        },
        c = (0, d.zo)("div", { name: "Layout" })((e) => {
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
        p = (0, d.zo)("main", {
          name: "LayoutMain",
          shouldForwardProp: (e) => "centered" !== e && "withTracker" !== e,
        })((e) => {
          let { centered: t, theme: r, withTracker: n } = e;
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
              paddingBottom: s.V,
              paddingTop: n ? 24 : 0,
              maxWidth: "100%",
              [r.breakpoints.up("md")]: {
                paddingTop: n ? 24 : 0,
                paddingBottom: 96,
              },
            }),
          };
        }),
        u = (0, i.Pi)((e) => {
          let {
              children: t,
              centered: r,
              header: i,
              footer: u,
              background: h = "page",
            } = e,
            m = (0, d.Fg)(),
            x = l[h][m.palette.mode],
            g =
              o.uiStore.appHeaderTracker.value &&
              !!a.transactionStore.pendingTransactions.length;
          return (0, n.jsxs)(c, {
            background: x,
            children: [
              i,
              (0, n.jsx)(p, { centered: r, withTracker: g, children: t }),
              u,
              (0, n.jsx)(s.t, {}),
            ],
          });
        });
    },
    93564: function (e, t, r) {
      "use strict";
      r.d(t, {
        DiscordPage: function () {
          return h;
        },
      });
      var n = r(27573),
        i = r(50294),
        a = r(7653),
        o = r(79248),
        s = r(65720),
        d = r(93944),
        l = r(80762),
        c = r(19879);
      let p = (0, c.zo)(c.xu, { name: "DiscordPage-Wrapper" })((e) => {
          let { theme: t } = e;
          return {
            display: "flex",
            width: "100%",
            flex: 1,
            flexDirection: "column",
            marginTop: 48,
            [t.breakpoints.up("md")]: {
              flexDirection: "row",
              alignItems: "center",
              margin: "0 auto",
              maxWidth: 831,
            },
            "& .grecaptcha-badge": { display: "none !important" },
          };
        }),
        u = (0, c.zo)(c.xu, { name: "DiscordPage-Content" })((e) => {
          let { theme: t } = e;
          return {
            marginBottom: 24,
            [t.breakpoints.up("md")]: { marginBottom: 0, flex: 1 },
          };
        }),
        h = () => {
          let e = (0, a.useRef)(),
            [t, r] = (0, a.useState)(),
            [h, m] = (0, a.useState)(!1),
            x = (0, d.d)(),
            g = (0, a.useCallback)(async (e) => {
              e &&
                (m(!0),
                s.Z.post(
                  "/api/discord/verify",
                  { captchaCode: e },
                  { headers: { "Content-Type": "application/json" } }
                )
                  .then((e) => {
                    let {
                      data: { code: t },
                    } = e;
                    t &&
                      (r(t),
                      window.open("https://discord.gg/".concat(t), "_blank"));
                  })
                  .finally(() => m(!1)));
            }, []);
          return (0, n.jsxs)(p, {
            children: [
              (0, n.jsxs)(u, {
                children: [
                  (0, n.jsxs)(c.xu, {
                    typography: "h1",
                    children: [
                      (0, n.jsx)(c.xu, {
                        color: "text.secondary",
                        children: "Join our",
                      }),
                      "Discord Server",
                    ],
                  }),
                  (0, n.jsxs)(c.xu, {
                    typography: "p1",
                    color: "text.secondary",
                    sx: { mt: 1.5 },
                    children: [
                      "Connect with Stargate enthusiasts about the",
                      (0, n.jsx)("br", {}),
                      "latest news across the ecosystem.",
                    ],
                  }),
                  t
                    ? (0, n.jsx)("a", {
                        href: "https://discord.gg/".concat(t),
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, n.jsx)(l.z, {
                          sx: { mt: { xs: 4, md: 5 }, minWidth: "258px" },
                          variant: "primary",
                          children: "I am not a robot",
                        }),
                      })
                    : (0, n.jsx)(l.z, {
                        sx: { mt: { xs: 4, md: 5 }, minWidth: "258px" },
                        variant: "primary",
                        disabled: h,
                        onClick: () => {
                          e.current &&
                            "string" != typeof e.current &&
                            e.current.execute();
                        },
                        children: h ? "Loading..." : "I am not a robot",
                      }),
                ],
              }),
              (0, n.jsx)(i.default, {
                src: "/static/features/discord/planet-discord.png",
                width: x ? 200 : 353,
                height: x ? 200 : 353,
                alt: "Discord",
                priority: !0,
              }),
              (0, n.jsx)(o.Z, {
                ref: e,
                size: "invisible",
                sitekey: "6LdAcgYfAAAAAB3MR1XeO3w2d8YdjMxGJ7daS4Wp",
                onChange: g,
              }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [2643, 6674, 294, 8794, 3818, 1293, 1528, 1744], function () {
      return e((e.s = 30609));
    }),
      (_N_E = e.O());
  },
]);
