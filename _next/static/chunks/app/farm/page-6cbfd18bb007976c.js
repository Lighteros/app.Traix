(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8970],
  {
    99747: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 56828)),
        Promise.resolve().then(n.bind(n, 77535)),
        Promise.resolve().then(n.bind(n, 97914)),
        Promise.resolve().then(n.bind(n, 22847));
    },
    16761: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var r = n(64719);
      function a() {
        return r.walletStore.evm;
      }
    },
    41216: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return l;
        },
      });
      var r = n(51211),
        a = n(65720);
      let i = "events-client-uuid";
      async function l(e, t) {
        r.ZP.capture(e, t);
        let n = await o();
        a.Z.post("https://mainnet.stargate-api.com/v1/log/", {
          clientUId: n,
          properties: t,
        });
      }
      async function o() {
        let e = localStorage.getItem(i);
        if (e) return e;
        let { v4: t } = await n.e(424).then(n.bind(n, 424)),
          r = t();
        return localStorage.setItem(i, r), r;
      }
    },
    98876: function (e, t, n) {
      "use strict";
      n.d(t, {
        $o: function () {
          return l;
        },
        Zb: function () {
          return h;
        },
        aY: function () {
          return p;
        },
        tZ: function () {
          return o;
        },
      });
      var r = n(27573),
        a = n(19879),
        i = n(24069);
      let l = 267,
        o = 158,
        s = (0, a.zo)("div", { name: "Card" })((e) => {
          let { theme: t } = e;
          return {
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: l,
            minWidth: l,
            height: o,
            background: t.palette.background.paper,
            border: "1px solid transparent",
            borderRadius: t.shape.borderRadius,
            position: "relative",
            overflow: "hidden",
          };
        }),
        d = (0, a.zo)(s, { name: "Card" })((e) => {
          let { theme: t } = e;
          return {
            cursor: "pointer",
            [t.breakpoints.up("md")]: {
              transition: i.fV,
              "&:hover": {
                borderColor: t.palette.text.disabled,
                background: t.palette.background.field,
              },
            },
          };
        }).withComponent("button"),
        c = (0, a.zo)("div", { name: "Card--row" })(() => ({
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        })),
        u = (0, a.zo)("div", { name: "Card--slot" })((e) => {
          let { rightAligned: t } = e;
          return {
            display: "flex",
            flexDirection: "column",
            alignItems: t ? "flex-end" : "flex-start",
          };
        }),
        m = (0, a.zo)("div", { name: "Card--banner" })((e) => {
          let { theme: t, variant: n } = e;
          return {
            ...t.typography.p3,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            minHeight: 52,
            display: "flex",
            padding: "10px 16px 16px",
            textAlign: "left",
            gap: 8,
            background: "transparent",
            ...("success" === n && {
              background: t.palette.success.main,
              color: t.palette.success.contrastText,
            }),
          };
        }),
        h = (e) => {
          let { asButton: t = !0 } = e,
            n = t ? d : s;
          return (0, r.jsx)(n, { children: (0, r.jsx)(p, { ...e }) });
        },
        p = (e) => {
          let {
            topLeft: t,
            topRight: n,
            middleLeft: a,
            middleRight: i,
            bottomLeft: l,
            bottomRight: o,
            banner: s,
            bannerVariant: d = "success",
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(c, {
                sx: { mb: 1 },
                children: [
                  (0, r.jsx)(u, { children: t }),
                  n && (0, r.jsx)(u, { rightAligned: !0, children: n }),
                ],
              }),
              (0, r.jsxs)(c, {
                sx: { mb: 1 },
                children: [
                  (0, r.jsx)(u, { children: a }),
                  i && (0, r.jsx)(u, { rightAligned: !0, children: i }),
                ],
              }),
              s
                ? (0, r.jsx)(m, { variant: d, children: s })
                : (0, r.jsxs)(c, {
                    sx: { mt: "auto" },
                    children: [
                      (0, r.jsx)(u, { children: l }),
                      o && (0, r.jsx)(u, { rightAligned: !0, children: o }),
                    ],
                  }),
            ],
          });
        },
        g = (0, a.zo)("div", { name: "Card--value" })((e) => {
          let { theme: t, small: n } = e;
          return {
            ...t.typography.h3,
            color: t.palette.text.primary,
            marginBottom: "2px",
            ...(n && { ...t.typography.p1 }),
          };
        }),
        x = (0, a.zo)("div", { name: "Card--label" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p3,
            color: t.palette.text.secondary,
            marginBottom: "1px",
          };
        });
      (h.Value = g), (h.Label = x);
    },
    35614: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return v;
        },
      });
      var r = n(27573),
        a = n(60297),
        i = n.n(a),
        l = n(19902),
        o = n(7653),
        s = n(93944),
        d = n(97428),
        c = n(98876),
        u = n(5221),
        m = n(86391),
        h = n(19879);
      let p = (0, h.zo)("div", { name: "CardsGrid" })((e) => {
          let { theme: t } = e;
          return {
            display: "flex",
            gap: 12,
            maxWidth: "100vw",
            overflow: "auto",
            marginLeft: -20,
            marginRight: -20,
            paddingRight: 20,
            paddingLeft: 20,
            "&::-webkit-scrollbar": { display: "none" },
            [t.breakpoints.up("sm")]: {
              display: "grid",
              gap: 12,
              gridTemplateColumns: "repeat(4, 1fr)",
              marginRight: 0,
              marginLeft: 0,
              paddingRight: 0,
              paddingLeft: 0,
            },
          };
        }),
        g = (0, h.zo)("div", { name: "CardsGrid-Pagination" })((e) => {
          let { theme: t } = e;
          return {
            marginTop: 18,
            marginLeft: "auto",
            display: "none",
            [t.breakpoints.up("sm")]: {
              display: "flex",
              justifyContent: "flex-end",
            },
          };
        }),
        x = (0, h.zo)("div", { name: "CardsGrid-CardPlaceholder" })((e) => {
          let { theme: t } = e;
          return {
            border: "1px dashed ".concat(t.palette.text.primary),
            minHeight: c.tZ,
            minWidth: c.$o,
            borderRadius: t.shape.borderRadius,
            background: t.palette.divider,
            opacity: 0.2,
          };
        }),
        f = (0, h.zo)("div", { name: "CardsGrid-EmptyStateCard" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p3,
            color: t.palette.text.secondary,
            width: "100%",
            minHeight: 166,
            border: "1px dashed ".concat(
              (0, d.fW)(t.palette.text.primary, 0.2)
            ),
            borderRadius: t.shape.borderRadius,
            background: "".concat((0, d.fW)(t.palette.divider, 0.2)),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          };
        }),
        v = (0, l.Pi)((e) => {
          let t = (0, h.Fg)(),
            n = (0, s.a)(t.breakpoints.down("md"), !1),
            {
              children: a,
              withPagination: l,
              withPlaceholders: d,
              noDataPlaceholder: c = "No data",
              isLoading: v,
            } = e,
            y = o.Children.toArray(a),
            {
              pageItems: b,
              currentPage: j,
              onNextPage: w,
              onPrevPage: C,
              totalPagesCount: S,
              onGoToPage: k,
            } = (0, m.h)(y, 8);
          (0, o.useEffect)(() => {
            k(1);
          }, [a]);
          let P = d ? i()(0, Math.max(4 - (b ? b.length : 0), 0)) : [];
          return v
            ? (0, r.jsx)(f, {
                children: (0, r.jsx)(u.J, {
                  type: "spinner",
                  size: 32,
                  sx: { mb: 4, color: "text.secondary" },
                }),
              })
            : 0 === y.length
            ? (0, r.jsx)(f, { children: c })
            : !l || n
            ? (0, r.jsxs)(p, {
                children: [y, P.map((e) => (0, r.jsx)(x, {}, e))],
              })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(p, {
                    children: [b, P.map((e) => (0, r.jsx)(x, {}, e))],
                  }),
                  S > 1 &&
                    (0, r.jsx)(g, {
                      children: (0, r.jsx)(m.t, {
                        currentPage: j,
                        onNextPage: w,
                        onPrevPage: C,
                        totalPagesCount: S,
                      }),
                    }),
                ],
              });
        });
    },
    92190: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return r;
        },
      });
      let r = (0, n(19879).zo)("div", { name: "Label" })((e) => {
        let { theme: t, color: n, size: r = "md", inverted: a } = e;
        return {
          ...t.typography.p3,
          backgroundColor: a ? t.palette[n].dark : t.palette[n].main,
          color: a ? t.palette[n].main : t.palette[n].contrastText,
          borderRadius: 4,
          ...("xs" === r && { padding: "2px 4px" }),
          ...("sm" === r && { ...t.typography.p2, padding: "3px 6px" }),
          ...("md" === r && { padding: "4px 6px" }),
        };
      });
    },
    63718: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return m;
        },
      });
      var r = n(27573),
        a = n(19879);
      let i = (0, a.F4)({
          from: { transform: "translateY(-10px)", opacity: 0 },
          to: { transform: "translateY(0px)", opacity: 1 },
        }),
        l = (0, a.zo)("div", { name: "PageTitleContainer" })(() => ({
          marginTop: 64,
          marginBottom: 48,
        })),
        o = (0, a.zo)("h1", { name: "PageTitle" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.h1,
            color: t.palette.text.primary,
            animation: "".concat(i, " 400ms ease-out"),
          };
        }),
        s = (0, a.F4)({ from: { opacity: 0 }, to: { opacity: 1 } }),
        d = (0, a.zo)("div", { name: "PageTitleSub" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p1,
            color: t.palette.text.secondary,
            marginTop: 24,
            animation: "".concat(s, " 300ms ease"),
            opacity: 0,
            animationDelay: "400ms",
            animationFillMode: "forwards",
          };
        }),
        c = (0, a.zo)("span", { name: "PageTitleAccent" })((e) => {
          let { theme: t } = e;
          return { color: t.palette.success.main };
        }),
        u = (0, a.zo)("span", { name: "PageTitleSecondary" })((e) => {
          let { theme: t } = e;
          return { color: t.palette.text.secondary };
        }),
        m = (e) => {
          let { children: t, sx: n, sub: a } = e;
          return (0, r.jsxs)(l, {
            sx: n,
            children: [
              (0, r.jsx)(o, { children: t }),
              a && (0, r.jsx)(d, { children: a }),
            ],
          });
        };
      (m.Accent = c), (m.Secondary = u);
    },
    35368: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return i;
        },
      });
      var r = n(27573),
        a = n(92190);
      let i = (e) => {
        let { version: t, ...n } = e;
        return (0, r.jsx)(a._, {
          sx: { textTransform: "uppercase" },
          ...n,
          color: "v2" === t ? "success" : "secondary",
          children: t,
        });
      };
    },
    81594: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return C;
        },
      });
      var r = n(27573),
        a = n(58912),
        i = n(5221),
        l = n(86391),
        o = n(14200),
        s = n(19879),
        d = n(24069);
      let c = (0, s.zo)("div", { name: "Table-Container" })(() => ({
          maxWidth: "calc(100vw - 32px)",
          overflowX: "auto",
          width: "100%",
        })),
        u = (0, s.zo)("table", { name: "Table" })((e) => {
          let { theme: t } = e;
          return {
            borderRadius: t.shape.borderRadius,
            backgroundColor: t.palette.background.paper,
            width: "100%",
            overflowX: "auto",
            borderCollapse: "collapse",
            borderSpacing: 0,
          };
        }),
        m = (0, s.zo)("td", { name: "Table-Cell" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p2,
            color: t.palette.text.primary,
            borderBottom: "1px solid ".concat(t.palette.background.default),
            padding: 0,
            height: "64px",
            whiteSpace: "nowrap",
            "& > *": { paddingLeft: 16 },
            "&:last-child": {
              textAlign: "right",
              "& > *": { paddingRight: 16 },
            },
          };
        }),
        h = (e) => {
          let { children: t, sx: n } = e;
          return (0, r.jsx)(m, {
            children: (0, r.jsx)(s.xu, {
              sx: { display: "flex", alignItems: "center", gap: 1, ...n },
              children: t,
            }),
          });
        },
        p = (0, s.zo)(m, { name: "Table-CellPlaceholder" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p3,
            color: t.palette.text.secondary,
            "&:last-child": { textAlign: "center" },
          };
        }),
        g = (0, s.zo)("th", { name: "Table-Row--head" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p3,
            color: t.palette.text.secondary,
            verticalAlign: "middle",
            borderBottom: "1px solid ".concat(t.palette.background.default),
            height: "48px",
            cursor: "pointer",
            padding: 0,
            userSelect: "none",
            whiteSpace: "nowrap",
            "& > *": { paddingLeft: 16 },
            "&:hover": { color: t.palette.text.primary },
            "&:last-child": {
              textAlign: "right",
              "& > *": { display: "inline-flex", paddingRight: 16 },
            },
          };
        }),
        x = (0, s.zo)("thead", { name: "Table-Head" })(() => ({
          verticalAlign: "middle",
          textAlign: "left",
        })),
        f = (0, s.zo)("tbody", { name: "Table-Body" })((e) => {
          let { theme: t } = e;
          return {
            verticalAlign: "middle",
            tr: {
              transition: d.fV,
              "&:hover": { background: t.palette.background.field },
            },
          };
        }),
        v = (0, s.zo)("tr", { name: "Table-Row" })((e) => {
          let { onClick: t } = e;
          return { cursor: t ? "pointer" : "default" };
        }),
        y = (e) => {
          let { headers: t, data: n, sx: a } = e;
          return (0, r.jsx)(c, {
            sx: a,
            children: (0, r.jsxs)(u, {
              children: [
                (0, r.jsx)(x, {
                  children: (0, r.jsx)(v, {
                    children: t.map((e) =>
                      (0, r.jsx)(g, { children: e.title }, e.title)
                    ),
                  }),
                }),
                (0, r.jsx)(f, {
                  children: n.map((e, n) =>
                    (0, r.jsx)(
                      v,
                      {
                        children: t.map((t, n) =>
                          (0, r.jsx)(
                            h,
                            { children: null == e ? void 0 : e[t.name] },
                            "".concat(t.name).concat(n)
                          )
                        ),
                      },
                      n
                    )
                  ),
                }),
              ],
            }),
          });
        };
      (y.Container = c),
        (y.Root = u),
        (y.Head = x),
        (y.Body = f),
        (y.Row = v),
        (y.RowHead = g),
        (y.Cell = h),
        (y.CellPlaceholder = p);
      let b = (0, s.zo)("div", { name: "Table-PaginationWrapper" })(() => ({
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          marginTop: "20px",
        })),
        j = (0, s.zo)(i.J, { name: "Table-SortingArrow" })((e) => {
          let { theme: t } = e;
          return {
            display: "inline-flex",
            marginLeft: "4px",
            color: t.palette.success.main,
          };
        }),
        w = (0, s.zo)(s.xu, {
          name: "Table-Header",
          shouldForwardProp: (e) => "active" !== e,
        })((e) => {
          let { theme: t, active: n } = e;
          return {
            display: "flex",
            alignItems: "center",
            color: n ? t.palette.text.primary : t.palette.text.secondary,
          };
        }),
        C = (e) => {
          let {
              table: t,
              sx: n,
              onRowClick: i,
              isLoading: s,
              placeholders: d,
              noDataPlaceholder: c,
            } = e,
            u = t.getRowModel().rows;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(y.Container, {
                sx: n,
                children: (0, r.jsxs)(y.Root, {
                  children: [
                    (0, r.jsx)(y.Head, {
                      children: t.getHeaderGroups().map((e) =>
                        (0, r.jsx)(
                          y.Row,
                          {
                            children: e.headers.map((e) => {
                              var t, n, i;
                              return (0, r.jsx)(
                                y.RowHead,
                                {
                                  sx: {
                                    ...(null ===
                                      (t = e.column.columnDef.meta) ||
                                    void 0 === t
                                      ? void 0
                                      : t.columnSx),
                                  },
                                  onClick: e.column.getToggleSortingHandler(),
                                  children: (0, r.jsxs)(w, {
                                    active: !!e.column.getIsSorted(),
                                    sx: {
                                      justifyContent:
                                        (null ===
                                          (n = e.column.columnDef.meta) ||
                                        void 0 === n
                                          ? void 0
                                          : n.align) === "right"
                                          ? "end"
                                          : "start",
                                    },
                                    children: [
                                      e.isPlaceholder
                                        ? null
                                        : (0, a.ie)(
                                            e.column.columnDef.header,
                                            e.getContext()
                                          ),
                                      null !==
                                        (i = {
                                          asc: (0, r.jsx)(j, {
                                            type: "arrow",
                                            size: 14,
                                            sx: { transform: "rotate(180deg)" },
                                          }),
                                          desc: (0, r.jsx)(j, {
                                            type: "arrow",
                                            size: 14,
                                          }),
                                        }[e.column.getIsSorted()]) &&
                                      void 0 !== i
                                        ? i
                                        : null,
                                    ],
                                  }),
                                },
                                e.id
                              );
                            }),
                          },
                          e.id
                        )
                      ),
                    }),
                    s
                      ? (0, r.jsx)(y.Body, {
                          children: Array.from({
                            length: t.initialState.pagination.pageSize,
                          }).map(() =>
                            t
                              .getHeaderGroups()
                              .map((e) =>
                                (0, r.jsx)(
                                  y.Row,
                                  {
                                    children: e.headers.map((e) =>
                                      (0, r.jsx)(
                                        y.Cell,
                                        {
                                          children:
                                            (null == d ? void 0 : d[e.id]) ||
                                            (0, r.jsx)(o.O, {
                                              variant: "rectangular",
                                              width: 80,
                                              height: 24,
                                              uniqueKey: "",
                                            }),
                                        },
                                        e.id
                                      )
                                    ),
                                  },
                                  e.id
                                )
                              )
                          ),
                        })
                      : u.length
                      ? (0, r.jsx)(y.Body, {
                          children: u.map((e) =>
                            (0, r.jsx)(
                              y.Row,
                              {
                                onClick: i && (() => i(e)),
                                children: e.getVisibleCells().map((e) => {
                                  var t, n;
                                  return (0, r.jsx)(
                                    y.Cell,
                                    {
                                      sx: {
                                        justifyContent:
                                          (null ===
                                            (t = e.column.columnDef.meta) ||
                                          void 0 === t
                                            ? void 0
                                            : t.align) === "right"
                                            ? "end"
                                            : "start",
                                        ...(null ===
                                          (n = e.column.columnDef.meta) ||
                                        void 0 === n
                                          ? void 0
                                          : n.cellSx),
                                      },
                                      children: (0, a.ie)(
                                        e.column.columnDef.cell,
                                        e.getContext()
                                      ),
                                    },
                                    e.id
                                  );
                                }),
                              },
                              e.id
                            )
                          ),
                        })
                      : (0, r.jsx)(y.Body, {
                          children: (0, r.jsx)(y.Row, {
                            children: (0, r.jsx)(y.CellPlaceholder, {
                              colSpan: t.getAllColumns().length,
                              children: c || "No data found.",
                            }),
                          }),
                        }),
                  ],
                }),
              }),
              !!t.getPaginationRowModel &&
                (0, r.jsx)(b, {
                  children: (0, r.jsx)(l.t, {
                    currentPage: t.getState().pagination.pageIndex + 1,
                    onNextPage: () =>
                      t.getCanNextPage() ? t.nextPage() : null,
                    onPrevPage: () =>
                      t.getCanPreviousPage() ? t.previousPage() : null,
                    totalPagesCount: t.getPageCount(),
                  }),
                }),
            ],
          });
        };
    },
    25712: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return o;
        },
      });
      var r = n(27573),
        a = n(93944),
        i = n(54105),
        l = n(55843);
      let o = (e) =>
        (0, a.d)() ? (0, r.jsx)(i.P, { ...e }) : (0, r.jsx)(l.Q, { ...e });
    },
    28928: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return o;
        },
      });
      var r = n(27573),
        a = n(19879);
      let i = (0, a.zo)("div", { name: "FiltersBar-Root" })((e) => {
          let { theme: t } = e;
          return {
            background: t.palette.background.paper,
            borderRadius: 12,
            padding: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            minHeight: 56,
          };
        }),
        l = (0, a.zo)("div", { name: "FiltersBar-Side" })(() => ({
          display: "flex",
        })),
        o = (e) => {
          let { children: t, sx: n } = e;
          return (0, r.jsx)(i, { sx: n, children: t });
        };
      (o.Left = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(l, { children: t });
      }),
        (o.Right = (e) => {
          let { children: t } = e;
          return (0, r.jsx)(l, { children: t });
        });
    },
    55843: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return d;
        },
      });
      var r = n(27573),
        a = n(19879),
        i = n(24069);
      let l = (0, a.zo)(a.xu, { name: "Selector-SelectorRoot" })(() => ({
          position: "relative",
          width: "100%",
        })),
        o = (0, a.zo)("div", { name: "Selector-Buttons" })((e) => {
          let { size: t } = e;
          return {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            ...("sm" === t && { gap: 4 }),
            ...("md" === t && { gap: 4 }),
            ...("lg" === t && { gap: 6 }),
          };
        }),
        s = (0, a.zo)("button", { name: "Selector-Button" })((e) => {
          let { active: t, theme: n, size: r } = e;
          return {
            color: n.palette.text.secondary,
            background: "transparent",
            border: 0,
            borderRadius: 8,
            outline: 0,
            transition: i.fV,
            flex: 1,
            whiteSpace: "nowrap",
            "&:disabled": {
              color: n.palette.text.secondary,
              filter: "grayscale(1) opacity(0.4)",
            },
            "&:hover:not(:disabled)": { color: n.palette.text.primary },
            ...(t && {
              border: "1px solid ".concat(n.palette.success.main),
              boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.06)",
              color: n.palette.text.primary,
            }),
            ...(!t && {
              border: "1px solid ".concat(n.palette.divider),
              background: n.palette.background.field,
              color: n.palette.text.secondary,
              "&:hover:not(:disabled)": {
                background: n.palette.background.paper,
                cursor: "pointer",
              },
            }),
            ...("sm" === r && {
              ...n.typography.p3,
              fontWeight: 500,
              padding: "4px 8px",
            }),
            ...("md" === r && {
              ...n.typography.p2,
              fontWeight: 500,
              padding: "6px 12px",
            }),
            ...("lg" === r && {
              ...n.typography.p2,
              fontWeight: 500,
              padding: "10px 16px",
            }),
          };
        }),
        d = (e) => {
          let {
            selection: t,
            options: n,
            size: a,
            onValueChange: i,
            sx: d,
          } = e;
          return (0, r.jsx)(l, {
            sx: d,
            children: (0, r.jsx)(o, {
              size: a,
              children: n.map((e) => {
                let { value: n, label: l, disabled: o } = e;
                return (0, r.jsx)(
                  s,
                  {
                    active: t.value === n,
                    size: a,
                    onClick: () => i(n),
                    disabled: o,
                    children: l,
                  },
                  n
                );
              }),
            }),
          });
        };
    },
    14200: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return o;
        },
      });
      var r = n(27573),
        a = n(83201),
        i = n(97428),
        l = n(19879);
      let o = (e) => {
        let { variant: t, ...n } = e,
          o = (0, l.Fg)(),
          { width: s, height: d } = n;
        return (0, r.jsxs)(a.ZP, {
          ...n,
          backgroundColor: (0, i.dc)(
            o.palette.background.paper,
            "light" === o.palette.mode ? -4 : 100
          ),
          foregroundColor: (0, i.dc)(
            o.palette.background.paper,
            "light" === o.palette.mode ? -8 : 140
          ),
          children: [
            "rectangular" === t &&
              (0, r.jsx)("rect", {
                x: 0,
                y: 0,
                rx: 4,
                ry: 4,
                height: d,
                width: s,
              }),
            "circular" === t &&
              (0, r.jsx)("rect", {
                x: 0,
                y: 0,
                height: d,
                width: s,
                rx: 1e3,
                ry: 1e3,
              }),
          ],
        });
      };
    },
    16392: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return s;
        },
      });
      var r = n(8590);
      let a = new Intl.NumberFormat("default", {
          style: "percent",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        i = new r.gG(1, 100),
        l = i.multiply(1e5),
        o = i.divide(100),
        s = (e) =>
          void 0 === e
            ? "-"
            : e.lessThanOrEqualTo(0)
            ? "0.00%"
            : e.lessThanOrEqualTo(o)
            ? "<0.01%"
            : e.greaterThan(l)
            ? ">100000%"
            : a.format(Number.parseFloat(e.divide(100).toFixed(4)));
    },
    43291: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      let r = (e) => {
          let { minDecimals: t, maxDecimals: n } = e;
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: t,
            maximumFractionDigits: n,
          });
        },
        a = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
          notation: "compact",
        }),
        i = r({ minDecimals: 6, maxDecimals: 6 }),
        l = r({ minDecimals: 4, maxDecimals: 4 }),
        o = r({ minDecimals: 3, maxDecimals: 3 }),
        s = r({ minDecimals: 2, maxDecimals: 2 }),
        d = (e, t) => {
          if (void 0 === e) return "-";
          "string" == typeof e && (e = Number(e));
          let n = !1;
          return (e < 0 && ((n = !0), (e = Math.abs(e))),
          (null == t ? void 0 : t.compact) && e >= 1e6)
            ? a.format(e)
            : 0 === e
            ? "$0.00"
            : e < 1e-6
            ? "<$0.01"
            : e < 1e-4
            ? i.format(e)
            : e < 0.001
            ? l.format(e)
            : e < 0.01
            ? o.format(e)
            : "".concat(n ? "-" : "").concat(s.format(e));
        };
    },
    48540: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return a;
        },
      });
      let r = new WeakSet();
      function a(e, t) {
        !(function (e) {
          if (e && "object" == typeof e) return r.has(e);
        })(e) && (e && "object" == typeof e && r.add(e), t());
      }
    },
    50671: function (e, t, n) {
      "use strict";
      var r, a;
      function i(e) {
        return {
          title:
            (null == e ? void 0 : e.code) === 4001
              ? "Transaction rejected"
              : "Transaction failed",
          message: (function (e) {
            var t;
            let n = null == e ? void 0 : e.code;
            if (n && "string" == typeof n && "INSUFFICIENT_FUNDS" === n)
              return "Insufficient funds for gas. Make sure you have enough gas.";
            let r = null == e ? void 0 : e.reason;
            if (r && "string" == typeof r) return r;
            let a =
              (null == e ? void 0 : e.message) ||
              (null == e
                ? void 0
                : null === (t = e.data) || void 0 === t
                ? void 0
                : t.message);
            if (a && "string" == typeof a) {
              if ("string" == typeof a) {
                if (a.includes("INSUFFICIENT_BALANCE_FOR_TRANSACTION_FEE"))
                  return "Insufficient funds for gas. Make sure you have enough gas.";
                if (a.includes("RejectedByUser"))
                  return "Transaction was rejected.";
                if (a.includes("insufficient funds for gas"))
                  return "Insufficient funds for gas. Make sure you have enough gas.";
              }
              return a;
            }
            return String(null != e ? e : "Unknown error");
          })(e),
        };
      }
      n.d(t, {
        B: function () {
          return i;
        },
      }),
        ((a = r || (r = {})).INSUFFICIENT_FUNDS =
          "Insufficient funds for gas. Make sure you have enough gas."),
        (a.REJECTED_BY_USER = "Transaction was rejected.");
    },
    24260: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return l;
        },
      });
      var r = n(41216),
        a = n(41270);
      let i = a.ZP.object({
        action: a.ZP.enum(["deposit", "redeem", "claim"]),
        srcAddress: a.ZP.string(),
        srcAmount: a.ZP.string().optional(),
        srcChain: a.ZP.string(),
        rewards: a.ZP.string().optional(),
        farm: a.ZP.string(),
        stargateVersion: a.ZP.string(),
        status: a.ZP.enum(["success", "error"]),
        srcTxTimestamp: a.ZP.number(),
        srcTxHash: a.ZP.string(),
        error: a.ZP.string(),
        errorCode: a.ZP.string(),
      }).partial();
      async function l(e) {
        let t = i.parse(e);
        return (0, r.j)("farm", t);
      }
    },
    22847: function (e, t, n) {
      "use strict";
      n.d(t, {
        FarmsPage: function () {
          return ei;
        },
      });
      var r = n(27573),
        a = n(19902),
        i = n(7653),
        l = n(19879),
        o = n(62895),
        s = n(16761),
        d = n(26056),
        c = n(75016),
        u = n(58912),
        m = n(26492),
        h = n(81695),
        p = n(99080),
        g = n(92190),
        x = n(11273),
        f = n(35368),
        v = n(81594),
        y = n(16392),
        b = n(43291),
        j = n(68171),
        w = n(98477),
        C = n(8590),
        S = n(3566),
        k = n(4986);
      let P = (e, t) =>
          null == e
            ? void 0
            : e.filter((e) => {
                let n =
                    "All" === t.version || e.farm.stargateVersion === t.version,
                  r = "All" === t.token || e.farm.symbol === t.token,
                  a = "All" === t.chainKey || e.farm.chainKey === t.chainKey;
                return n && r && a;
              }),
        T = { label: "All", value: "All" };
      var z = n(25712),
        F = n(69910),
        R = n(28928);
      let A = (e) => {
          var t, n, a, i;
          let {
            onReset: l,
            options: o,
            filters: s,
            onChange: d,
            tabs: c,
            dirty: u,
          } = e;
          return (0, r.jsxs)(R.S, {
            sx: { mt: 6, mb: 1.5 },
            children: [
              (0, r.jsx)(R.S.Left, {
                children: (0, r.jsx)(z.N, {
                  onValueChange: (e) => c.onChange(e),
                  options: c.options,
                  selection:
                    null !==
                      (t = c.options.find((e) => e.value === c.selected)) &&
                    void 0 !== t
                      ? t
                      : c.options[0],
                  size: "md",
                }),
              }),
              (0, r.jsx)(R.S.Right, {
                children: (0, r.jsxs)(F.t, {
                  onReset: l,
                  dirty: u,
                  children: [
                    u &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(F.t.ResetBtn, {
                            onClick: l,
                            sx: { display: { xs: "none", md: "block" } },
                          }),
                          (0, r.jsx)(F.t.Divider, {
                            sx: { display: { xs: "none", md: "block" } },
                          }),
                        ],
                      }),
                    (0, r.jsx)(F.t.Select, {
                      size: "md",
                      label: "Token",
                      onValueChange: (e) => d({ token: e }),
                      options: o.token,
                      selection:
                        null !==
                          (n = o.token.find((e) => e.value === s.token)) &&
                        void 0 !== n
                          ? n
                          : o.token[0],
                      disabled: 1 === o.token.length,
                    }),
                    (0, r.jsx)(F.t.Select, {
                      size: "md",
                      label: "Network",
                      onValueChange: (e) => d({ chainKey: e }),
                      options: o.chainKey,
                      selection:
                        null !==
                          (a = o.chainKey.find(
                            (e) => e.value === s.chainKey
                          )) && void 0 !== a
                          ? a
                          : o.chainKey[0],
                      disabled: 1 === o.chainKey.length,
                    }),
                    (0, r.jsx)(F.t.Select, {
                      size: "md",
                      label: "Version",
                      onValueChange: (e) => d({ version: e }),
                      options: o.version,
                      selection:
                        null !==
                          (i = o.version.find((e) => e.value === s.version)) &&
                        void 0 !== i
                          ? i
                          : o.version[0],
                      disabled: 1 === o.version.length,
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        L = [
          {
            id: "token",
            header: "Name",
            meta: { columnSx: { width: 132 }, cellSx: { width: 132 } },
            accessorFn: (e) => e.farm.symbol,
            cell: (e) =>
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(p.r, {
                    currency: { symbol: e.row.original.farm.symbol },
                    size: 24,
                  }),
                  e.row.original.farm.symbol,
                ],
              }),
            filterFn: (e, t, n) => {
              let r = e.getValue(t);
              return String(null != r ? r : "")
                .toLowerCase()
                .includes(String(null != n ? n : "").toLowerCase());
            },
          },
          {
            id: "chainKey",
            header: "Network",
            meta: { columnSx: { width: 148 }, cellSx: { width: 148 } },
            accessorFn: (e) => e.farm.chainKey,
            cell: (e) =>
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(x.d, {
                    chainKey: e.row.original.farm.chainKey,
                    size: 24,
                  }),
                  (0, j.$h)(e.row.original.farm.chainKey),
                ],
              }),
            filterFn: (e, t, n) => {
              let r = e.getValue(t);
              return String(null != r ? r : "")
                .toLowerCase()
                .includes(String(null != n ? n : "").toLowerCase());
            },
          },
          {
            id: "version",
            header: "Version",
            meta: { columnSx: { width: 80 }, cellSx: { width: 80 } },
            accessorFn: (e) => e.farm.stargateVersion,
            cell: (e) => {
              let { getValue: t } = e;
              return (0, r.jsx)(f.T, { version: t(), size: "sm" });
            },
            filterFn: (e, t, n) => {
              let r = e.getValue(t);
              return String(null != r ? r : "")
                .toLowerCase()
                .includes(String(null != n ? n : "").toLowerCase());
            },
          },
          {
            id: "supported",
            header: "Supported",
            meta: { columnSx: { width: 128 }, cellSx: { width: 128 } },
            accessorFn: (e) => {
              var t;
              return null === (t = e.poolMetaData) || void 0 === t
                ? void 0
                : t.supportedBy;
            },
            cell: (e) => {
              var t;
              let n =
                null === (t = e.row.original.poolMetaData) || void 0 === t
                  ? void 0
                  : t.supportedBy;
              return n
                ? (0, r.jsxs)(g._, {
                    inverted: !0,
                    color: "success",
                    size: "md",
                    children: ["By ", n],
                  })
                : null;
            },
          },
          {
            id: "liquidity",
            header: "Liquidity",
            meta: {
              align: "right",
              columnSx: { width: 312 },
              cellSx: { width: 312 },
            },
            accessorFn: (e) => {
              var t;
              return Number(
                null === (t = e.poolData) || void 0 === t ? void 0 : t.tvlUsd
              );
            },
            cell: (e) => {
              var t;
              let { row: n } = e;
              return (0, b.Z)(
                null === (t = n.original.poolData) || void 0 === t
                  ? void 0
                  : t.tvlUsd
              );
            },
          },
          {
            id: "apy",
            header: "APY",
            meta: { align: "right", cellSx: { typography: "h5" } },
            accessorFn: (e) => {
              var t, n;
              let r =
                null === (n = e.farmData) || void 0 === n
                  ? void 0
                  : null === (t = n.apy) || void 0 === t
                  ? void 0
                  : t.toFixed(2);
              return 0 !== Number(r) ? r : void 0;
            },
            sortUndefined: "last",
            cell: (e) => {
              var t;
              let { row: n } = e;
              return (0, y.T)(
                null === (t = n.original.farmData) || void 0 === t
                  ? void 0
                  : t.apy
              );
            },
          },
        ],
        V = { MY: "My Farms", AVAILABLE: "Available", TOP: "Top Farms" },
        K = (0, a.Pi)(() => {
          let { push: e } = (0, h.useRouter)(),
            { availableFarms: t, myFarms: n, topFarms: a } = o.earnStore,
            s = { [V.MY]: n, [V.AVAILABLE]: t, [V.TOP]: a, default: a },
            d = Object.values(V).map((e) => {
              var t, n;
              return {
                disabled:
                  (null === (t = s[e]) || void 0 === t ? void 0 : t.length) ===
                  0,
                value: e,
                label: (0, r.jsxs)(l.xu, {
                  children: [
                    e,
                    (0, r.jsxs)(l.xu, {
                      sx: { display: { xs: "none", md: "inline" } },
                      children: [
                        " ∙ ",
                        (0, r.jsx)(l.xu, {
                          component: "span",
                          color: "success.main",
                          children:
                            null === (n = s[e]) || void 0 === n
                              ? void 0
                              : n.length,
                        }),
                      ],
                    }),
                  ],
                }),
              };
            }),
            [c, g] = i.useState(V.TOP),
            f = s[c] || s.default,
            {
              onReset: y,
              filters: b,
              onChange: j,
              options: z,
              dirty: F,
            } = (function (e) {
              let { inputData: t } = e,
                n = [
                  T,
                  ...(0, k.Z)(
                    t.map((e) => e.farm),
                    "symbol"
                  ).map((e) => ({
                    value: e.symbol,
                    label: e.symbol,
                    icon: (0, r.jsx)(p.r, {
                      currency: { symbol: e.symbol },
                      size: 16,
                    }),
                  })),
                ],
                [a, l] = (0, i.useState)(T.value),
                o = [
                  T,
                  ...Array.from(new Set(t.map((e) => e.farm.chainKey))).map(
                    (e) => {
                      var t, n;
                      return {
                        value: e,
                        label:
                          null !==
                            (n =
                              null === (t = (0, C.lJ)(e)) || void 0 === t
                                ? void 0
                                : t.name) && void 0 !== n
                            ? n
                            : e,
                        icon: (0, r.jsx)(x.d, { chainKey: e, size: 16 }),
                      };
                    }
                  ),
                ],
                [s, d] = (0, i.useState)(T.value),
                c = [
                  T,
                  ...Object.values(S.C).map((e) => ({
                    value: e,
                    label: e.toUpperCase(),
                  })),
                ],
                [u, m] = (0, i.useState)(S.C.V2);
              return {
                filteredData: P(t, { version: u, token: a, chainKey: s }),
                onReset: () => {
                  m(S.C.V2), l(T.value), d(T.value);
                },
                onChange: (e) => {
                  let { version: t, token: n, chainKey: r } = e;
                  t && m(t), n && l(n), r && d(r);
                },
                dirty: u !== S.C.V2 || a !== T.value || s !== T.value,
                filters: { version: u, token: a, chainKey: s },
                options: { token: n, chainKey: o, version: c },
              };
            })({ inputData: f }),
            R = (0, i.useCallback)(
              (t) => {
                e("/farm/".concat((0, w._)(t.original.farm)));
              },
              [e]
            ),
            K = i.useMemo(
              () => [
                {
                  id: "version",
                  value: "All" !== b.version ? b.version : void 0,
                },
                { id: "token", value: "All" !== b.token ? b.token : void 0 },
                {
                  id: "chainKey",
                  value: "All" !== b.chainKey ? b.chainKey : void 0,
                },
              ],
              [b.version, b.token, b.chainKey]
            ),
            Z = (0, u.b7)({
              data: f,
              columns: L,
              getFilteredRowModel: (0, m.vL)(),
              getSortedRowModel: (0, m.tj)(),
              getPaginationRowModel: (0, m.G_)(),
              getCoreRowModel: (0, m.sC)(),
              initialState: { sorting: [{ id: "apy", desc: !0 }] },
              state: { columnFilters: K },
            });
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(A, {
                filters: b,
                options: z,
                onChange: j,
                onReset: y,
                dirty: F,
                tabs: { options: d, selected: c, onChange: g },
              }),
              (0, r.jsx)(v.E, { table: Z, onRowClick: R }),
            ],
          });
        }),
        Z = (e, t) =>
          null == e
            ? void 0
            : e.filter((e) => {
                let n =
                    "All" === t.version || e.farm.stargateVersion === t.version,
                  r = "All" === t.token || e.farm.symbol === t.token,
                  a = "All" === t.chainKey || e.farm.chainKey === t.chainKey;
                return n && r && a;
              }),
        D = { label: "All", value: "All" },
        I = (0, a.Pi)((e) => {
          var t, n, a, i;
          let {
            onReset: l,
            options: o,
            filters: s,
            onChange: d,
            tabs: c,
            dirty: u,
          } = e;
          return (0, r.jsxs)(R.S, {
            sx: { mb: 1.5 },
            children: [
              (0, r.jsx)(R.S.Left, {
                children: (0, r.jsx)(z.N, {
                  onValueChange: (e) => c.onChange(e),
                  options: c.options,
                  selection:
                    null !==
                      (t = c.options.find((e) => e.value === c.selected)) &&
                    void 0 !== t
                      ? t
                      : c.options[0],
                  size: "md",
                }),
              }),
              (0, r.jsx)(R.S.Right, {
                children: (0, r.jsxs)(F.t, {
                  onReset: l,
                  dirty: u,
                  children: [
                    u &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(F.t.ResetBtn, {
                            onClick: l,
                            sx: { display: { xs: "none", md: "block" } },
                          }),
                          (0, r.jsx)(F.t.Divider, {
                            sx: { display: { xs: "none", md: "block" } },
                          }),
                        ],
                      }),
                    (0, r.jsx)(F.t.Select, {
                      size: "md",
                      label: "Token",
                      onValueChange: (e) => d({ token: e }),
                      options: o.token,
                      selection:
                        null !==
                          (n = o.token.find((e) => e.value === s.token)) &&
                        void 0 !== n
                          ? n
                          : o.token[0],
                      disabled: 1 === o.token.length,
                    }),
                    (0, r.jsx)(F.t.Select, {
                      size: "md",
                      label: "Network",
                      onValueChange: (e) => d({ chainKey: e }),
                      options: o.chainKey,
                      selection:
                        null !==
                          (a = o.chainKey.find(
                            (e) => e.value === s.chainKey
                          )) && void 0 !== a
                          ? a
                          : o.chainKey[0],
                      disabled: 1 === o.chainKey.length,
                    }),
                    (0, r.jsx)(F.t.Select, {
                      size: "md",
                      label: "Version",
                      onValueChange: (e) => d({ version: e }),
                      options: o.version,
                      selection:
                        null !==
                          (i = o.version.find((e) => e.value === s.version)) &&
                        void 0 !== i
                          ? i
                          : o.version[0],
                      disabled: 1 === o.version.length,
                    }),
                  ],
                }),
              }),
            ],
          });
        });
      var N = n(88146),
        B = n(35614),
        E = n(99770),
        M = n(98876),
        O = n(5221),
        _ = n(20347);
      let U = (e) => {
          let {
              farm: t,
              apy: n,
              farmBalance: a,
              pendingReward: i,
              rewardToken: o,
            } = e,
            s = t.disabled,
            d = t.symbol;
          return (0, r.jsx)(M.Zb, {
            topLeft: (0, r.jsx)(_.Y, {
              currency: { symbol: t.symbol },
              size: 24,
              rewardCurrency: o,
            }),
            topRight: (0, r.jsxs)(l.xu, {
              sx: { display: "flex", gap: 0.5 },
              children: [
                (0, r.jsx)(f.T, { size: "xs", version: t.stargateVersion }),
                (0, r.jsx)(x.d, { chainKey: t.chainKey, size: 20 }),
              ],
            }),
            middleLeft: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(M.Zb.Label, { children: "Farm" }),
                (0, r.jsx)(M.Zb.Value, { children: d }),
              ],
            }),
            middleRight: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(M.Zb.Label, { children: "APY" }),
                (0, r.jsx)(M.Zb.Value, { children: n }),
              ],
            }),
            bottomLeft: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(M.Zb.Label, { children: "LPT Staked" }),
                (0, r.jsx)(M.Zb.Value, { small: !0, children: a }),
              ],
            }),
            bottomRight: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(M.Zb.Label, { children: "Pending Reward" }),
                (0, r.jsx)(M.Zb.Value, {
                  small: !0,
                  children: (0, r.jsxs)(l.xu, {
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    children: [(0, r.jsx)(p.r, { currency: o, size: 12 }), i],
                  }),
                }),
              ],
            }),
            banner: s
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(O.J, { type: "info", size: 16 }),
                    "Migrate LP tokens to new farms with new STG token as part of re-issuance.",
                  ],
                })
              : null,
          });
        },
        H = (e) => {
          let {
              farm: t,
              rewardToken: n,
              apy: a,
              liquidity: i,
              availableBalance: o,
            } = e,
            s = t.disabled,
            d = t.symbol;
          return (0, r.jsx)(M.Zb, {
            topLeft: (0, r.jsx)(_.Y, {
              currency: { symbol: t.symbol },
              size: 24,
              rewardCurrency: n,
            }),
            topRight: (0, r.jsxs)(l.xu, {
              sx: { display: "flex", gap: 0.5 },
              children: [
                (0, r.jsx)(f.T, { size: "xs", version: t.stargateVersion }),
                (0, r.jsx)(x.d, { chainKey: t.chainKey, size: 20 }),
              ],
            }),
            middleLeft: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(M.Zb.Label, { children: "Farm" }),
                (0, r.jsx)(M.Zb.Value, { children: d }),
              ],
            }),
            middleRight: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(M.Zb.Label, { children: "APY" }),
                (0, r.jsx)(M.Zb.Value, { children: a }),
              ],
            }),
            bottomLeft: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(M.Zb.Label, { children: "LPT Available to Stake" }),
                (0, r.jsx)(M.Zb.Value, { small: !0, children: o }),
              ],
            }),
            bottomRight: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(M.Zb.Label, { children: "Liquidity" }),
                (0, r.jsx)(M.Zb.Value, { small: !0, children: i }),
              ],
            }),
            banner: s
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(O.J, { type: "info", size: 16 }),
                    "Migrate LP tokens to new farms with new STG token as part of re-issuance.",
                  ],
                })
              : null,
          });
        },
        Y = (0, a.Pi)((e) => {
          let { farms: t, isMyFarm: n } = e;
          return (0, r.jsx)(B.f, {
            withPlaceholders: !0,
            withPagination: !0,
            noDataPlaceholder: "No farms available yet.",
            children:
              null == t
                ? void 0
                : t.map((e) => {
                    var t;
                    let {
                        farm: a,
                        farmData: i,
                        poolData: l,
                        poolPosition: o,
                        farmPosition: s,
                      } = e,
                      d = (0, w._)(a);
                    return (0, r.jsx)(
                      N.default,
                      {
                        href: "/farm/".concat(d),
                        children: n
                          ? (0, r.jsx)(U, {
                              farm: a,
                              apy: (0, y.T)(null == i ? void 0 : i.apy),
                              farmBalance: (0, E.uh)(
                                null == s ? void 0 : s.depositedAmount
                              ),
                              pendingReward: (0, E.uh)(
                                null == s
                                  ? void 0
                                  : null === (t = s.rewards) || void 0 === t
                                  ? void 0
                                  : t.at(0)
                              ),
                              rewardToken: a.rewards.at(0),
                            })
                          : (0, r.jsx)(H, {
                              farm: a,
                              apy: (0, y.T)(null == i ? void 0 : i.apy),
                              liquidity: (0, b.Z)(
                                null == l ? void 0 : l.tvlUsd,
                                { compact: !0 }
                              ),
                              availableBalance: (0, E.uh)(
                                null == o ? void 0 : o.lpAvailable
                              ),
                              rewardToken: a.rewards.at(0),
                            }),
                      },
                      d
                    );
                  }),
          });
        });
      var G = n(63718);
      let W = (0, a.Pi)(() =>
        (0, r.jsxs)(G.V, {
          sub: (0, r.jsxs)(r.Fragment, {
            children: [
              "Stargate liquidity providers can farm their LP tokens in exchange for STG rewards.",
              " ",
              (0, r.jsx)(l.xu, {
                component: "br",
                sx: { display: { xs: "none", md: "block" } },
              }),
              "Earn STG and become a member of the Stargate community.",
            ],
          }),
          children: [
            (0, r.jsx)(G.V.Secondary, { children: "Stargate" }),
            " Farm",
          ],
        })
      );
      var q = n(24594),
        J = n(31348),
        $ = n(46860),
        Q = n(80762),
        X = n(617);
      let ee = (0, a.Pi)((e) => {
          var t;
          let { reward: n, protocolVersion: a, farm: i } = e,
            o = n.token,
            s = o.chainKey,
            d = o.symbol,
            c = $.WI.getFiatAmount(n),
            u = X.u.isSigning,
            m =
              (null === (t = X.u.wallet) || void 0 === t
                ? void 0
                : t.chainKey) === i.chainKey,
            h = X.u.isClaiming && X.u.farm === i;
          return (0, r.jsx)(M.Zb, {
            asButton: !1,
            topLeft: (0, r.jsx)(_.Y, {
              currency: o,
              size: 24,
              rewardCurrency: { symbol: i.symbol },
            }),
            topRight: (0, r.jsxs)(l.xu, {
              sx: { display: "flex", gap: 0.5 },
              children: [
                (0, r.jsx)(f.T, { size: "xs", version: a }),
                (0, r.jsx)(x.d, { chainKey: s, size: 20 }),
              ],
            }),
            middleLeft: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(M.Zb.Label, { children: "Reward" }),
                (0, r.jsx)(M.Zb.Value, { children: d }),
              ],
            }),
            middleRight: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(M.Zb.Label, {
                  children: (0, b.Z)(null == c ? void 0 : c.value),
                }),
                (0, r.jsx)(M.Zb.Value, { children: (0, E.dN)(n) }),
              ],
            }),
            bannerVariant: "transparent",
            banner: (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)(Q.z, {
                size: "sm",
                onClick: () => X.u.claim({ farm: i }),
                sx: {
                  width: "100%",
                  ...(m
                    ? {}
                    : {
                        "&:disabled": {
                          background: (e) => e.palette.primary.main,
                        },
                      }),
                },
                variant: h ? "primary" : "success",
                icon: h ? void 0 : "sparkle",
                disabled: h,
                children: h
                  ? u
                    ? "Confirm in Wallet..."
                    : m
                    ? "Claiming..."
                    : "Switch network"
                  : "Claim",
              }),
            }),
          });
        }),
        et = (0, a.Pi)((e) => {
          let { farms: t } = e,
            n = en(t);
          return (0, r.jsx)(B.f, {
            withPlaceholders: !0,
            withPagination: !0,
            noDataPlaceholder: "No pending rewards available yet.",
            children: n.flatMap((e) => {
              let { farmPosition: t, farm: n } = e,
                a = (0, w._)(n);
              return t.rewards
                .filter((e) => e.greaterThan(0))
                .map((e) =>
                  (0, r.jsx)(
                    ee,
                    {
                      farm: n,
                      reward: e,
                      protocolVersion: t.farm.stargateVersion,
                    },
                    "".concat(a, ":").concat(e.token.id)
                  )
                );
            }),
          });
        }),
        en = (0, q.Om)((e) =>
          e
            .filter(er)
            .sort((e, t) => {
              var n, r;
              return (0, J.m)(
                null === (n = e.farmPosition) || void 0 === n
                  ? void 0
                  : n.rewards[0],
                null === (r = t.farmPosition) || void 0 === r
                  ? void 0
                  : r.rewards[0]
              );
            })
            .reverse()
        );
      function er(e) {
        var t;
        return (
          (null === (t = e.farmPosition) || void 0 === t
            ? void 0
            : t.rewards.some((e) => e.greaterThan(0))) || !1
        );
      }
      let ea = {
          MY: "My Farms",
          AVAILABLE: "Available",
          TOP: "Top Farms",
          PENDING: "Pending Rewards",
        },
        ei = (0, a.Pi)(() => {
          !(function () {
            let e = (0, s.O)(),
              t = null == e ? void 0 : e.address;
            (0, i.useEffect)(() => {
              t &&
                c.K.farms.map((e) => {
                  d._.updateBalance(e.lpToken, t);
                });
            }, [t]);
          })();
          let { availableFarms: e, myFarms: t, topFarms: n } = o.earnStore,
            a = { [ea.MY]: t, [ea.AVAILABLE]: e, [ea.TOP]: n, default: n },
            u = t.filter((e) => {
              var t;
              return null === (t = e.farmPosition) || void 0 === t
                ? void 0
                : t.rewards.some((e) => e.greaterThan(0));
            }).length,
            m = Object.values(ea).map((e) => {
              var t;
              let n =
                e === ea.PENDING
                  ? u
                  : null === (t = a[e]) || void 0 === t
                  ? void 0
                  : t.length;
              return {
                disabled: 0 === n,
                value: e,
                label: (0, r.jsxs)(l.xu, {
                  children: [
                    e,
                    (0, r.jsxs)(l.xu, {
                      sx: { display: { xs: "none", md: "inline" } },
                      children: [
                        " ∙ ",
                        (0, r.jsx)(l.xu, {
                          component: "span",
                          color: "success.main",
                          children: n,
                        }),
                      ],
                    }),
                  ],
                }),
              };
            }),
            [h, g] = i.useState(ea.TOP),
            {
              filteredData: f,
              onReset: v,
              filters: y,
              onChange: b,
              options: j,
              dirty: w,
            } = (function (e) {
              let { inputData: t } = e,
                n = [
                  D,
                  ...(0, k.Z)(
                    t.map((e) => e.farm),
                    "symbol"
                  ).map((e) => ({
                    value: e.symbol,
                    label: e.symbol,
                    icon: (0, r.jsx)(p.r, {
                      currency: { symbol: e.symbol },
                      size: 16,
                    }),
                  })),
                ],
                [a, l] = (0, i.useState)(D.value),
                o = [
                  D,
                  ...Array.from(new Set(t.map((e) => e.farm.chainKey))).map(
                    (e) => {
                      var t, n;
                      return {
                        value: e,
                        label:
                          null !==
                            (n =
                              null === (t = (0, C.lJ)(e)) || void 0 === t
                                ? void 0
                                : t.name) && void 0 !== n
                            ? n
                            : e,
                        icon: (0, r.jsx)(x.d, { chainKey: e, size: 16 }),
                      };
                    }
                  ),
                ],
                [s, d] = (0, i.useState)(D.value),
                c = [
                  D,
                  ...Object.values(S.C).map((e) => ({
                    value: e,
                    label: e.toUpperCase(),
                  })),
                ],
                [u, m] = (0, i.useState)(S.C.V2);
              return {
                filteredData: Z(t, { version: u, token: a, chainKey: s }),
                onReset: () => {
                  m(S.C.V2), l(D.value), d(D.value);
                },
                onChange: (e) => {
                  let { version: t, token: n, chainKey: r } = e;
                  t && m(t), n && l(n), r && d(r);
                },
                dirty: u !== S.C.V2 || a !== D.value || s !== D.value,
                filters: { version: u, token: a, chainKey: s },
                options: { token: n, chainKey: o, version: c },
              };
            })({ inputData: a[h] || a.default });
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(W, {}),
              (0, r.jsx)(I, {
                onReset: v,
                options: j,
                filters: y,
                onChange: b,
                dirty: w,
                tabs: { options: m, selected: h, onChange: g },
              }),
              h === ea.PENDING
                ? (0, r.jsx)(et, { farms: f })
                : (0, r.jsx)(Y, { farms: f, isMyFarm: h === ea.MY }),
              (0, r.jsx)(K, {}),
            ],
          });
        });
    },
    617: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return g;
        },
      });
      var r = n(8179),
        a = n(59533),
        i = n(28066),
        l = n(64719),
        o = n(48540),
        s = n(50671),
        d = n(15322),
        c = n(62895),
        u = n(42717),
        m = n(24260),
        h = n(75016);
      class p {
        async claim(e) {
          let { farm: t } = e;
          if (this.isClaiming) throw Error("Already claiming");
          let n = (function (e, t) {
              let { wallet: n, farm: r } = e;
              return {
                action: t,
                srcAddress: null == n ? void 0 : n.address,
                farm: null == r ? void 0 : r.address,
                srcChain: null == r ? void 0 : r.chainKey,
                stargateVersion: null == r ? void 0 : r.stargateVersion,
              };
            })(this, "claim"),
            { wallet: l } = this,
            p = h.K.getAdapter(t);
          try {
            (this.farm = t),
              (this.isClaiming = !0),
              (0, r.Z)(l, "No wallet"),
              (0, r.Z)(p, "No adapter");
            let e = l.address,
              o = await p.getPendingRewards({ user: e });
            await l.switchChain(t.chainKey);
            let s = o.rewards
                .filter((e) => e.greaterThan(0))
                .map((e) => e.token),
              c = await p.claim({ tokens: s, user: e });
            (0, a.z)(() => {
              this.isSigning = !0;
            });
            let h = await l.signAndSubmit(c);
            (0, a.z)(() => {
              (this.isSigning = !1), (this.isConfirming = !0);
            });
            let g = await h.wait(),
              x = u.w.create({
                createdTimestamp: (0, d.u3)(),
                from: e,
                rewards: o.rewards,
                txHash: g.txHash,
              });
            (0, m.j)({
              ...n,
              status: "success",
              srcTxHash: g.txHash,
              srcTxTimestamp: (0, d.u3)(),
              rewards: o.rewards
                .map((e) =>
                  "".concat(e.toSignificant(), " ").concat(e.token.symbol)
                )
                .join(", "),
            }),
              i.actionStore.addAction(x);
          } catch (e) {
            throw (
              ((0, o.S)(e, () => {
                let { message: t, title: r } = (0, s.B)(e);
                (0, m.j)({
                  ...n,
                  status: "error",
                  srcTxTimestamp: (0, d.u3)(),
                  error: r,
                  errorCode: t.substring(0, 256),
                });
              }),
              e)
            );
          } finally {
            l &&
              (c.earnStore.updateFarmData(),
              c.earnStore.updateFarmPosition(t, l.address)),
              (0, a.z)(() => {
                (this.isSigning = !1),
                  (this.isConfirming = !1),
                  (this.isClaiming = !1),
                  (this.farm = void 0);
              });
          }
        }
        get wallet() {
          return l.walletStore.evm;
        }
        constructor() {
          (this.isSigning = !1),
            (this.isConfirming = !1),
            (this.isClaiming = !1),
            (this.farm = void 0),
            (0, a.ky)(
              this,
              { farm: a.LO.ref, wallet: a.Fl, claim: a.aD.bound },
              { autoBind: !0 }
            );
        }
      }
      let g = new p();
    },
    20347: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return u;
        },
      });
      var r = n(27573),
        a = n(46860),
        i = n(5221),
        l = n(19879),
        o = n(75218);
      let s = (0, l.zo)("div", { name: "FarmIcon" })((e) => {
          let { size: t } = e;
          return { position: "relative", width: t, height: t };
        }),
        d = (0, l.zo)("img", { name: "FarmIcon--Image" })({}),
        c = (0, l.zo)("div", { name: "FarmIcon--SecondIcon" })((e) => {
          let { theme: t, size: n } = e;
          return {
            position: "absolute",
            bottom: "-".concat((n / 64) * 4, "px"),
            right: "-".concat((n / 64) * 4, "px"),
            width: n,
            height: n,
            transform: "scale(".concat(0.5, ")"),
            transformOrigin: "right bottom",
            borderRadius: "100%",
            border: ""
              .concat((n / 32) * 4, "px solid ")
              .concat(t.palette.background.paper),
            boxSizing: "content-box",
            background: "transparent",
          };
        }),
        u = (e) => {
          let { size: t = 16, currency: n, rewardCurrency: l, sx: u, ...h } = e,
            p = m("default");
          return n
            ? (0, r.jsxs)(s, {
                sx: u,
                size: t,
                children: [
                  (0, r.jsx)(d, {
                    src: m(a.WI.getSymbol(n)),
                    width: t,
                    height: t,
                    onError: (0, o.g)(p),
                    alt: n.symbol,
                    ...h,
                  }),
                  l &&
                    (0, r.jsx)(c, {
                      size: t,
                      children: (0, r.jsx)(d, {
                        src: m(a.WI.getSymbol(l)),
                        width: t,
                        height: t,
                        onError: (0, o.g)(p),
                        alt: n.symbol,
                        ...h,
                      }),
                    }),
                ],
              })
            : (0, r.jsx)(i.J, { type: "emptyToken", size: e.size, sx: u });
        };
      function m() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "default";
        return "https://icons-ckg.pages.dev/stargate-light/tokens/".concat(
          e.toLowerCase(),
          ".svg"
        );
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        2643, 1734, 7909, 6674, 4882, 6412, 110, 2010, 780, 7723, 2993, 7898,
        3818, 1357, 5836, 4522, 3762, 2895, 9910, 1293, 1528, 1744,
      ],
      function () {
        return e((e.s = 99747));
      }
    ),
      (_N_E = e.O());
  },
]);
