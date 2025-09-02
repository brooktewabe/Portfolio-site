  }

  function MS(s) {
    for (var o = s;;) {
      if (o.flags & 16384) {
        var u = o.updateQueue;
        if (u !== null && (u = u.stores, u !== null))
          for (var f = 0; f < u.length; f++) {
            var g = u[f],
              b = g.getSnapshot;
            g = g.value;
            try {
              if (!Xr(b(), g)) return !1
            } catch {
              return !1
            }
          }
      }
      if (u = o.child, o.subtreeFlags & 16384 && u !== null) u.return = o, o = u;
      else {
        if (o === s) break;
        for (; o.sibling === null;) {
          if (o.return === null || o.return === s) return !0;
          o = o.return
        }
        o.sibling.return = o.return, o = o.sibling
      }
    }
    return !0
  }

  function Mi(s, o) {
    for (o &= ~Fd, o &= ~pl, s.suspendedLanes |= o, s.pingedLanes &= ~o, s = s.expirationTimes; 0 < o;) {
      var u = 31 - Rt(o),
        f = 1 << u;
      s[u] = -1, o &= ~f
    }
  }

  function hp(s) {
    if ((je & 6) !== 0) throw Error(n(327));
    Ws();
    var o = W2(s, 0);
    if ((o & 1) === 0) return rr(s, Ze()), null;
    var u = bl(s, o);
    if (s.tag !== 0 && u === 2) {
      var f = Cn(s);
      f !== 0 && (o = f, u = Ud(s, f))
    }
    if (u === 1) throw u = ca, E3(s, 0), Mi(s, o), rr(s, Ze()), u;
    if (u === 6) throw Error(n(345));
    return s.finishedWork = s.current.alternate, s.finishedLanes = o, T3(s, nr, ni), rr(s, Ze()), null
  }

  function Hd(s, o) {
    var u = je;
    je |= 1;
    try {
      return s(o)
    } finally {
      je = u, je === 0 && (Us = Ze() + 500, G0 && ki())
    }
  }

  function S3(s) {
    Ni !== null && Ni.tag === 0 && (je & 6) === 0 && Ws();
    var o = je;
    je |= 1;
    var u = jr.transition,
      f = fe;
    try {
      if (jr.transition = null, fe = 1, s) return s()
    } finally {
      fe = f, jr.transition = u, je = o, (je & 6) === 0 && ki()
    }
  }

  function qd() {
    gr = zs.current, ht(zs)
  }

  function E3(s, o) {
    s.finishedWork = null, s.finishedLanes = 0;
    var u = s.timeoutHandle;
    if (u !== -1 && (s.timeoutHandle = -1, cS(u)), Ut !== null)
      for (u = Ut.return; u !== null;) {
        var f = u;
        switch (td(f), f.tag) {
          case 1:
            f = f.type.childContextTypes, f != null && H0();
            break;
          case 3:
            Fs(), ht(Zn), ht(kn), pd();
            break;
          case 5:
            hd(f);
            break;
          case 4:
            Fs();
            break;
          case 13:
            ht(bt);
            break;
          case 19:
            ht(bt);
            break;
          case 10:
            ad(f.type._context);
            break;
          case 22:
          case 23:
            qd()
        }
        u = u.return
      }
    if (ln = s, Ut = s = Di(s.current, null), yn = gr = o, en = 0, ca = null, Fd = pl = x3 = 0, nr = da = null, w3 !== null) {
      for (o = 0; o < w3.length; o++)
        if (u = w3[o], f = u.interleaved, f !== null) {
          u.interleaved = null;
          var g = f.next,
            b = u.pending;
          if (b !== null) {
            var I = b.next;
            b.next = g, f.next = I
          }
          u.pending = f
        } w3 = null
    }
    return s
  }

  function fp(s, o) {
    do {
      var u = Ut;
      try {
        if (od(), rl.current = al, il) {
          for (var f = _t.memoizedState; f !== null;) {
            var g = f.queue;
            g !== null && (g.pending = null), f = f.next
          }
          il = !1
        }
        if (_3 = 0, an = Zt = _t = null, ia = !1, sa = 0, Vd.current = null, u === null || u.return === null) {
          en = 1, ca = o, Ut = null;
          break
        }
        e: {
          var b = s,
            I = u.return,
            z = u,
            G = o;
          if (o = yn, z.flags |= 32768, G !== null && typeof G == "object" && typeof G.then == "function") {
            var n1 = G,
              _1 = z,
              S1 = _1.tag;
            if ((_1.mode & 1) === 0 && (S1 === 0 || S1 === 11 || S1 === 15)) {
              var b1 = _1.alternate;
              b1 ? (_1.updateQueue = b1.updateQueue, _1.memoizedState = b1.memoizedState, _1.lanes = b1.lanes) : (_1.updateQueue = null, _1.memoizedState = null)
            }
            var z1 = V6(I);
            if (z1 !== null) {
              z1.flags &= -257, F6(z1, I, z, b, o), z1.mode & 1 && j6(b, n1, o), o = z1, G = n1;
              var G1 = o.updateQueue;
              if (G1 === null) {
                var Q1 = new Set;
                Q1.add(G), o.updateQueue = Q1
              } else G1.add(G);
              break e
            } else {
              if ((o & 1) === 0) {
                j6(b, n1, o), Gd();
                break e
              }
              G = Error(n(426))
            }
          } else if (yt && z.mode & 1) {
            var Nt = V6(I);
            if (Nt !== null) {
              (Nt.flags & 65536) === 0 && (Nt.flags |= 256), F6(Nt, I, z, b, o), id(Bs(G, z));
              break e
            }
          }
          b = G = Bs(G, z),
          en !== 4 && (en = 2),
          da === null ? da = [b] : da.push(b),
          b = I;do {
            switch (b.tag) {
              case 3:
                b.flags |= 65536, o &= -o, b.lanes |= o;
                var e1 = D6(b, G, o);
                l6(b, e1);
                break e;
              case 1:
                z = G;
                var Y = b.type,
                  t1 = b.stateNode;
                if ((b.flags & 128) === 0 && (typeof Y.getDerivedStateFromError == "function" || t1 !== null && typeof t1.componentDidCatch == "function" && (Ri === null || !Ri.has(t1)))) {
                  b.flags |= 65536, o &= -o, b.lanes |= o;
                  var C1 = O6(b, z, o);
                  l6(b, C1);
                  break e
                }
            }
            b = b.return
          } while (b !== null)
        }
        gp(u)
      } catch (X1) {
        o = X1, Ut === u && u !== null && (Ut = u = u.return);
        continue
      }
      break
    } while (!0)
  }

  function pp() {
    var s = fl.current;
    return fl.current = al, s === null ? al : s
  }

  function Gd() {
    (en === 0 || en === 3 || en === 2) && (en = 4), ln === null || (x3 & 268435455) === 0 && (pl & 268435455) === 0 || Mi(ln, yn)
  }

  function bl(s, o) {
    var u = je;
    je |= 2;
    var f = pp();
    (ln !== s || yn !== o) && (ni = null, E3(s, o));
    do try {
      DS();
      break
    } catch (g) {
      fp(s, g)
    }
    while (!0);
    if (od(), je = u, fl.current = f, Ut !== null) throw Error(n(261));
    return ln = null, yn = 0, en
  }

  function DS() {
    for (; Ut !== null;) mp(Ut)
  }

  function OS() {
    for (; Ut !== null && !c3();) mp(Ut)
  }

  function mp(s) {
    var o = wp(s.alternate, s, gr);
    s.memoizedProps = s.pendingProps, o === null ? gp(s) : Ut = o, Vd.current = null
  }

  function gp(s) {
    var o = s;
    do {
      var u = o.alternate;
      if (s = o.return, (o.flags & 32768) === 0) {
        if (u = PS(u, o, gr), u !== null) {
          Ut = u;
          return
        }
      } else {
        if (u = AS(u, o), u !== null) {
          u.flags &= 32767, Ut = u;
          return
        }
        if (s !== null) s.flags |= 32768, s.subtreeFlags = 0, s.deletions = null;
        else {
          en = 6, Ut = null;
          return
        }
      }
      if (o = o.sibling, o !== null) {
        Ut = o;
        return
      }
      Ut = o = s
    } while (o !== null);
    en === 0 && (en = 5)
  }

  function T3(s, o, u) {
    var f = fe,
      g = jr.transition;
    try {
      jr.transition = null, fe = 1, jS(s, o, u, f)
    } finally {
      jr.transition = g, fe = f
    }
    return null
  }

  function jS(s, o, u, f) {
    do Ws(); while (Ni !== null);
    if ((je & 6) !== 0) throw Error(n(327));
    u = s.finishedWork;
    var g = s.finishedLanes;
    if (u === null) return null;
    if (s.finishedWork = null, s.finishedLanes = 0, u === s.current) throw Error(n(177));
    s.callbackNode = null, s.callbackPriority = 0;
    var b = u.lanes | u.childLanes;
    if (Be(s, b), s === ln && (Ut = ln = null, yn = 0), (u.subtreeFlags & 2064) === 0 && (u.flags & 2064) === 0 || gl || (gl = !0, bp(Xn, function() {
        return Ws(), null
      })), b = (u.flags & 15990) !== 0, (u.subtreeFlags & 15990) !== 0 || b) {
      b = jr.transition, jr.transition = null;
      var I = fe;
      fe = 1;
      var z = je;
      je |= 4, Vd.current = null, RS(s, u), op(u, s), rS(Gc), q1 = !!qc, Gc = qc = null, s.current = u, NS(u), Bo(), je = z, fe = I, jr.transition = b
    } else s.current = u;
    if (gl && (gl = !1, Ni = s, yl = g), b = s.pendingLanes, b === 0 && (Ri = null), fs(u.stateNode), rr(s, Ze()), o !== null)
      for (f = s.onRecoverableError, u = 0; u < o.length; u++) g = o[u], f(g.value, {
        componentStack: g.stack,
        digest: g.digest
      });
    if (ml) throw ml = !1, s = $d, $d = null, s;
    return (yl & 1) !== 0 && s.tag !== 0 && Ws(), b = s.pendingLanes, (b & 1) !== 0 ? s === zd ? ha++ : (ha = 0, zd = s) : ha = 0, ki(), null
  }

  function Ws() {
    if (Ni !== null) {
      var s = Qr(yl),
        o = jr.transition,
        u = fe;
      try {
        if (jr.transition = null, fe = 16 > s ? 16 : s, Ni === null) var f = !1;
        else {
          if (s = Ni, Ni = null, yl = 0, (je & 6) !== 0) throw Error(n(331));
          var g = je;
          for (je |= 4, H1 = s.current; H1 !== null;) {
            var b = H1,
              I = b.child;
            if ((H1.flags & 16) !== 0) {
              var z = b.deletions;
              if (z !== null) {
                for (var G = 0; G < z.length; G++) {
                  var n1 = z[G];
                  for (H1 = n1; H1 !== null;) {
                    var _1 = H1;
                    switch (_1.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ua(8, _1, b)
                    }
                    var S1 = _1.child;
                    if (S1 !== null) S1.return = _1, H1 = S1;
                    else
                      for (; H1 !== null;) {
                        _1 = H1;
                        var b1 = _1.sibling,
                          z1 = _1.return;
                        if (tp(_1), _1 === n1) {
                          H1 = null;
                          break
                        }
                        if (b1 !== null) {
                          b1.return = z1, H1 = b1;
                          break
                        }
                        H1 = z1
                      }
                  }
                }
                var G1 = b.alternate;
                if (G1 !== null) {
                  var Q1 = G1.child;
                  if (Q1 !== null) {
                    G1.child = null;
                    do {
                      var Nt = Q1.sibling;
                      Q1.sibling = null, Q1 = Nt
                    } while (Q1 !== null)
                  }
                }
                H1 = b
              }
            }
            if ((b.subtreeFlags & 2064) !== 0 && I !== null) I.return = b, H1 = I;
            else e: for (; H1 !== null;) {
              if (b = H1, (b.flags & 2048) !== 0) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  ua(9, b, b.return)
              }
              var e1 = b.sibling;
              if (e1 !== null) {
                e1.return = b.return, H1 = e1;
                break e
              }
              H1 = b.return
            }
          }
          var Y = s.current;
          for (H1 = Y; H1 !== null;) {
            I = H1;
            var t1 = I.child;
            if ((I.subtreeFlags & 2064) !== 0 && t1 !== null) t1.return = I, H1 = t1;
            else e: for (I = Y; H1 !== null;) {
              if (z = H1, (z.flags & 2048) !== 0) try {
                switch (z.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hl(9, z)
                }
              } catch (X1) {
                Et(z, z.return, X1)
              }
              if (z === I) {
                H1 = null;
                break e
              }
              var C1 = z.sibling;
              if (C1 !== null) {
                C1.return = z.return, H1 = C1;
                break e
              }
              H1 = z.return
            }
          }
          if (je = g, ki(), Bn && typeof Bn.onPostCommitFiberRoot == "function") try {
            Bn.onPostCommitFiberRoot(z2, s)
          } catch {}
          f = !0
        }
        return f
      } finally {
        fe = u, jr.transition = o
      }
    }
    return !1
  }

  function yp(s, o, u) {
    o = Bs(u, o), o = D6(s, o, 1), s = Ai(s, o, 1), o = qn(), s !== null && (Ye(s, 1, o), rr(s, o))
  }

  function Et(s, o, u) {
    if (s.tag === 3) yp(s, s, u);
    else
      for (; o !== null;) {
        if (o.tag === 3) {
          yp(o, s, u);
          break
        } else if (o.tag === 1) {
          var f = o.stateNode;
          if (typeof o.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Ri === null || !Ri.has(f))) {
            s = Bs(u, s), s = O6(o, s, 1), o = Ai(o, s, 1), s = qn(), o !== null && (Ye(o, 1, s), rr(o, s));
            break
          }
        }
        o = o.return
      }
  }

  function VS(s, o, u) {
    var f = s.pingCache;
    f !== null && f.delete(o), o = qn(), s.pingedLanes |= s.suspendedLanes & u, ln === s && (yn & u) === u && (en === 4 || en === 3 && (yn & 130023424) === yn && 500 > Ze() - Bd ? E3(s, 0) : Fd |= u), rr(s, o)
  }

  function vp(s, o) {
    o === 0 && ((s.mode & 1) === 0 ? o = 1 : (o = U2, U2 <<= 1, (U2 & 130023424) === 0 && (U2 = 4194304)));
    var u = qn();
    s = Z2(s, o), s !== null && (Ye(s, o, u), rr(s, u))
  }

  function FS(s) {
    var o = s.memoizedState,
      u = 0;
    o !== null && (u = o.retryLane), vp(s, u)
  }

  function BS(s, o) {
    var u = 0;
    switch (s.tag) {
      case 13:
        var f = s.stateNode,
          g = s.memoizedState;
        g !== null && (u = g.retryLane);
        break;
      case 19:
        f = s.stateNode;
        break;
      default:
        throw Error(n(314))
    }
    f !== null && f.delete(o), vp(s, u)
  }
  var wp;
  wp = function(s, o, u) {
    if (s !== null)
      if (s.memoizedProps !== o.pendingProps || Zn.current) tr = !0;
      else {
        if ((s.lanes & u) === 0 && (o.flags & 128) === 0) return tr = !1, kS(s, o, u);
        tr = (s.flags & 131072) !== 0
      }
    else tr = !1, yt && (o.flags & 1048576) !== 0 && J5(o, Q0, o.index);
    switch (o.lanes = 0, o.tag) {
      case 2:
        var f = o.type;
        cl(s, o), s = o.pendingProps;
        var g = Ns(o, kn.current);
        Vs(o, u), g = yd(null, o, f, s, g, u);
        var b = vd();
        return o.flags |= 1, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0 ? (o.tag = 1, o.memoizedState = null, o.updateQueue = null, er(f) ? (b = !0, q0(o)) : b = !1, o.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, cd(o), g.updater = ll, o.stateNode = g, g._reactInternals = o, Ed(o, f, s, u), o = Pd(null, o, f, !0, b, u)) : (o.tag = 0, yt && b && ed(o), Hn(null, o, g, u), o = o.child), o;
      case 16:
        f = o.elementType;
        e: {
          switch (cl(s, o), s = o.pendingProps, g = f._init, f = g(f._payload), o.type = f, g = o.tag = zS(f), s = Zr(f, s), g) {
            case 0:
              o = kd(null, o, f, s, u);
              break e;
            case 1:
              o = H6(null, o, f, s, u);
              break e;
            case 11:
              o = B6(null, o, f, s, u);
              break e;
            case 14:
              o = $6(null, o, f, Zr(f.type, s), u);
              break e
          }
          throw Error(n(306, f, ""))
        }
        return o;
      case 0:
        return f = o.type, g = o.pendingProps, g = o.elementType === f ? g : Zr(f, g), kd(s, o, f, g, u);
      case 1:
        return f = o.type, g = o.pendingProps, g = o.elementType === f ? g : Zr(f, g), H6(s, o, f, g, u);
      case 3:
        e: {
          if (q6(o), s === null) throw Error(n(387));f = o.pendingProps,
          b = o.memoizedState,
          g = b.element,
          a6(s, o),
          tl(o, f, null, u);
          var I = o.memoizedState;
          if (f = I.element, b.isDehydrated)
            if (b = {
                element: f,
                isDehydrated: !1,
                cache: I.cache,
                pendingSuspenseBoundaries: I.pendingSuspenseBoundaries,
                transitions: I.transitions
              }, o.updateQueue.baseState = b, o.memoizedState = b, o.flags & 256) {
              g = Bs(Error(n(423)), o), o = G6(s, o, f, u, g);
              break e
            } else if (f !== g) {
            g = Bs(Error(n(424)), o), o = G6(s, o, f, u, g);
            break e
          } else
            for (mr = Ei(o.stateNode.containerInfo.firstChild), pr = o, yt = !0, Jr = null, u = s6(o, null, f, u), o.child = u; u;) u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Ds(), f === g) {
              o = ti(s, o, u);
              break e
            }
            Hn(s, o, f, u)
          }
          o = o.child
        }
        return o;
      case 5:
        return c6(o), s === null && rd(o), f = o.type, g = o.pendingProps, b = s !== null ? s.memoizedProps : null, I = g.children, Kc(f, g) ? I = null : b !== null && Kc(f, b) && (o.flags |= 32), W6(s, o), Hn(s, o, I, u), o.child;
      case 6:
        return s === null && rd(o), null;
      case 13:
        return K6(s, o, u);
      case 4:
        return dd(o, o.stateNode.containerInfo), f = o.pendingProps, s === null ? o.child = Os(o, null, f, u) : Hn(s, o, f, u), o.child;
      case 11:
        return f = o.type, g = o.pendingProps, g = o.elementType === f ? g : Zr(f, g), B6(s, o, f, g, u);
      case 7:
        return Hn(s, o, o.pendingProps, u), o.child;
      case 8:
        return Hn(s, o, o.pendingProps.children, u), o.child;
      case 12:
        return Hn(s, o, o.pendingProps.children, u), o.child;
      case 10:
        e: {
          if (f = o.type._context, g = o.pendingProps, b = o.memoizedProps, I = g.value, at(J0, f._currentValue), f._currentValue = I, b !== null)
            if (Xr(b.value, I)) {
              if (b.children === g.children && !Zn.current) {
                o = ti(s, o, u);
                break e
              }
            } else
              for (b = o.child, b !== null && (b.return = o); b !== null;) {
                var z = b.dependencies;
                if (z !== null) {
                  I = b.child;
                  for (var G = z.firstContext; G !== null;) {
                    if (G.context === f) {
                      if (b.tag === 1) {
                        G = ei(-1, u & -u), G.tag = 2;
                        var n1 = b.updateQueue;
                        if (n1 !== null) {
                          n1 = n1.shared;
                          var _1 = n1.pending;
                          _1 === null ? G.next = G : (G.next = _1.next, _1.next = G), n1.pending = G
                        }
                      }
                      b.lanes |= u, G = b.alternate, G !== null && (G.lanes |= u), ld(b.return, u, o), z.lanes |= u;
                      break
                    }
                    G = G.next
                  }
                } else if (b.tag === 10) I = b.type === o.type ? null : b.child;
                else if (b.tag === 18) {
                  if (I = b.return, I === null) throw Error(n(341));
                  I.lanes |= u, z = I.alternate, z !== null && (z.lanes |= u), ld(I, u, o), I = b.sibling
                } else I = b.child;
                if (I !== null) I.return = b;
                else
                  for (I = b; I !== null;) {
                    if (I === o) {
                      I = null;
                      break
                    }
                    if (b = I.sibling, b !== null) {
                      b.return = I.return, I = b;
                      break
                    }
                    I = I.return
                  }
                b = I
              }
          Hn(s, o, g.children, u),
          o = o.child
        }
        return o;
      case 9:
        return g = o.type, f = o.pendingProps.children, Vs(o, u), g = Dr(g), f = f(g), o.flags |= 1, Hn(s, o, f, u), o.child;
      case 14:
        return f = o.type, g = Zr(f, o.pendingProps), g = Zr(f.type, g), $6(s, o, f, g, u);
      case 15:
        return z6(s, o, o.type, o.pendingProps, u);
      case 17:
        return f = o.type, g = o.pendingProps, g = o.elementType === f ? g : Zr(f, g), cl(s, o), o.tag = 1, er(f) ? (s = !0, q0(o)) : s = !1, Vs(o, u), L6(o, f, g), Ed(o, f, g, u), Pd(null, o, f, !0, s, u);
      case 19:
        return Y6(s, o, u);
      case 22:
        return U6(s, o, u)
    }
    throw Error(n(156, o.tag))
  };

  function bp(s, o) {
    return wi(s, o)
  }

  function $S(s, o, u, f) {
    this.tag = s, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = o, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
  }

  function Vr(s, o, u, f) {
    return new $S(s, o, u, f)
  }

  function Kd(s) {
    return s = s.prototype, !(!s || !s.isReactComponent)
  }

  function zS(s) {
    if (typeof s == "function") return Kd(s) ? 1 : 0;
    if (s != null) {
      if (s = s.$$typeof, s === V) return 11;
      if (s === A1) return 14
    }
    return 2
  }

  function Di(s, o) {
    var u = s.alternate;
    return u === null ? (u = Vr(s.tag, o, s.key, s.mode), u.elementType = s.elementType, u.type = s.type, u.stateNode = s.stateNode, u.alternate = s, s.alternate = u) : (u.pendingProps = o, u.type = s.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = s.flags & 14680064, u.childLanes = s.childLanes, u.lanes = s.lanes, u.child = s.child, u.memoizedProps = s.memoizedProps, u.memoizedState = s.memoizedState, u.updateQueue = s.updateQueue, o = s.dependencies, u.dependencies = o === null ? null : {
      lanes: o.lanes,
      firstContext: o.firstContext
    }, u.sibling = s.sibling, u.index = s.index, u.ref = s.ref, u
  }

  function _l(s, o, u, f, g, b) {
    var I = 2;
    if (f = s, typeof s == "function") Kd(s) && (I = 1);
    else if (typeof s == "string") I = 5;
    else e: switch (s) {
      case D:
        return C3(u.children, g, b, o);
      case A:
        I = 8, g |= 8;
        break;
      case j:
        return s = Vr(12, u, o, g | 2), s.elementType = j, s.lanes = b, s;
      case L:
        return s = Vr(13, u, o, g), s.elementType = L, s.lanes = b, s;
      case h1:
        return s = Vr(19, u, o, g), s.elementType = h1, s.lanes = b, s;
      case k1:
        return xl(u, g, b, o);
      default:
        if (typeof s == "object" && s !== null) switch (s.$$typeof) {
          case x:
            I = 10;
            break e;
          case N:
            I = 9;
            break e;
          case V:
            I = 11;
            break e;
          case A1:
            I = 14;
            break e;
          case V1:
            I = 16, f = null;
            break e
        }
        throw Error(n(130, s == null ? s : typeof s, ""))
    }
    return o = Vr(I, u, o, g), o.elementType = s, o.type = f, o.lanes = b, o
  }

  function C3(s, o, u, f) {
    return s = Vr(7, s, f, o), s.lanes = u, s
  }

  function xl(s, o, u, f) {
    return s = Vr(22, s, f, o), s.elementType = k1, s.lanes = u, s.stateNode = {
      isHidden: !1
    }, s
  }

  function Qd(s, o, u) {
    return s = Vr(6, s, null, o), s.lanes = u, s
  }

  function Yd(s, o, u) {
    return o = Vr(4, s.children !== null ? s.children : [], s.key, o), o.lanes = u, o.stateNode = {
      containerInfo: s.containerInfo,
      pendingChildren: null,
      implementation: s.implementation
    }, o
  }

  function US(s, o, u, f, g) {
    this.tag = o, this.containerInfo = s, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = d2(0), this.expirationTimes = d2(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = d2(0), this.identifierPrefix = f, this.onRecoverableError = g, this.mutableSourceEagerHydrationData = null
  }

  function Xd(s, o, u, f, g, b, I, z, G) {
    return s = new US(s, o, u, z, G), o === 1 ? (o = 1, b === !0 && (o |= 8)) : o = 0, b = Vr(3, null, null, o), s.current = b, b.stateNode = s, b.memoizedState = {
      element: f,
      isDehydrated: u,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, cd(b), s
  }

  function WS(s, o, u) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: X,
      key: f == null ? null : "" + f,
      children: s,
      containerInfo: o,
      implementation: u
    }
  }

  function _p(s) {
    if (!s) return Ci;
    s = s._reactInternals;
    e: {
      if (Tn(s) !== s || s.tag !== 1) throw Error(n(170));
      var o = s;do {
        switch (o.tag) {
          case 3:
            o = o.stateNode.context;
            break e;
          case 1:
            if (er(o.type)) {
              o = o.stateNode.__reactInternalMemoizedMergedChildContext;
              break e
            }
        }
        o = o.return
      } while (o !== null);
      throw Error(n(171))
    }
    if (s.tag === 1) {
      var u = s.type;
      if (er(u)) return Q5(s, u, o)
    }
    return o
  }

  function xp(s, o, u, f, g, b, I, z, G) {
    return s = Xd(u, f, !0, s, g, b, I, z, G), s.context = _p(null), u = s.current, f = qn(), g = Li(u), b = ei(f, g), b.callback = o ?? null, Ai(u, b, g), s.current.lanes = g, Ye(s, g, f), rr(s, f), s
  }

  function Sl(s, o, u, f) {
    var g = o.current,
      b = qn(),
      I = Li(g);
    return u = _p(u), o.context === null ? o.context = u : o.pendingContext = u, o = ei(b, I), o.payload = {
      element: s
    }, f = f === void 0 ? null : f, f !== null && (o.callback = f), s = Ai(g, o, I), s !== null && (n2(s, g, I, b), el(s, g, I)), I
  }

  function El(s) {
    if (s = s.current, !s.child) return null;
    switch (s.child.tag) {
      case 5:
        return s.child.stateNode;
      default:
        return s.child.stateNode
    }
  }

  function Sp(s, o) {
    if (s = s.memoizedState, s !== null && s.dehydrated !== null) {
      var u = s.retryLane;
      s.retryLane = u !== 0 && u < o ? u : o
    }
  }

  function Jd(s, o) {
    Sp(s, o), (s = s.alternate) && Sp(s, o)
  }

  function HS() {
    return null
  }
  var Ep = typeof reportError == "function" ? reportError : function(s) {
    console.error(s)
  };

  function Zd(s) {
    this._internalRoot = s
  }
  Tl.prototype.render = Zd.prototype.render = function(s) {
    var o = this._internalRoot;
    if (o === null) throw Error(n(409));
    Sl(s, o, null, null)
  }, Tl.prototype.unmount = Zd.prototype.unmount = function() {
    var s = this._internalRoot;
    if (s !== null) {
      this._internalRoot = null;
      var o = s.containerInfo;
      S3(function() {
        Sl(null, s, null, null)
      }), o[Q2] = null
    }
  };

  function Tl(s) {
    this._internalRoot = s
  }
  Tl.prototype.unstable_scheduleHydration = function(s) {
    if (s) {
      var o = ms();
      s = {
        blockedOn: null,
        target: s,
        priority: o
      };
      for (var u = 0; u < Un.length && o !== 0 && o < Un[u].priority; u++);
      Un.splice(u, 0, s), u === 0 && B(s)
    }
  };

  function e4(s) {
    return !(!s || s.nodeType !== 1 && s.nodeType !== 9 && s.nodeType !== 11)
  }

  function Cl(s) {
    return !(!s || s.nodeType !== 1 && s.nodeType !== 9 && s.nodeType !== 11 && (s.nodeType !== 8 || s.nodeValue !== " react-mount-point-unstable "))
  }

  function Tp() {}

  function qS(s, o, u, f, g) {
    if (g) {
      if (typeof f == "function") {
        var b = f;
        f = function() {
          var n1 = El(I);
          b.call(n1)
        }
      }
      var I = xp(o, f, s, 0, null, !1, !1, "", Tp);
      return s._reactRootContainer = I, s[Q2] = I.current, Yo(s.nodeType === 8 ? s.parentNode : s), S3(), I
    }
    for (; g = s.lastChild;) s.removeChild(g);
    if (typeof f == "function") {
      var z = f;
      f = function() {
        var n1 = El(G);
        z.call(n1)
      }
    }
    var G = Xd(s, 0, !1, null, null, !1, !1, "", Tp);
    return s._reactRootContainer = G, s[Q2] = G.current, Yo(s.nodeType === 8 ? s.parentNode : s), S3(function() {
      Sl(o, G, u, f)
    }), G
  }

  function kl(s, o, u, f, g) {
    var b = u._reactRootContainer;
    if (b) {
      var I = b;
      if (typeof g == "function") {
        var z = g;
        g = function() {
          var G = El(I);
          z.call(G)
        }
      }
      Sl(o, I, s, g)
    } else I = qS(u, o, s, g, f);
    return El(I)
  }
  $n = function(s) {
    switch (s.tag) {
      case 3:
        var o = s.stateNode;
        if (o.current.memoizedState.isDehydrated) {
          var u = Pr(o.pendingLanes);
          u !== 0 && (Kr(o, u | 1), rr(o, Ze()), (je & 6) === 0 && (Us = Ze() + 500, ki()))
        }
        break;
      case 13:
        S3(function() {
          var f = Z2(s, 1);
          if (f !== null) {
            var g = qn();
            n2(f, s, 1, g)
          }
        }), Jd(s, 1)
    }
  }, fn = function(s) {
    if (s.tag === 13) {
      var o = Z2(s, 134217728);
      if (o !== null) {
        var u = qn();
        n2(o, s, 134217728, u)
      }
      Jd(s, 134217728)
    }
  }, zn = function(s) {
    if (s.tag === 13) {
      var o = Li(s),
        u = Z2(s, o);
      if (u !== null) {
        var f = qn();
        n2(u, s, o, f)
      }
      Jd(s, o)
    }
  }, ms = function() {
    return fe
  }, gs = function(s, o) {
    var u = fe;
    try {
      return fe = s, o()
    } finally {
      fe = u
    }
  }, Se = function(s, o, u) {
    switch (o) {
      case "input":
        if (qe(s, u), o = u.name, u.type === "radio" && o != null) {
          for (u = s; u.parentNode;) u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), o = 0; o < u.length; o++) {
            var f = u[o];
            if (f !== s && f.form === s.form) {
              var g = W0(f);
              if (!g) throw Error(n(90));
              be(f), qe(f, g)
            }
          }
        }
        break;
      case "textarea":
        wt(s, u);
        break;
      case "select":
        o = u.value, o != null && _e(s, !!u.multiple, o, !1)
    }
  }, nt = Hd, Cr = S3;
  var GS = {
      usingClientEntryPoint: !1,
      Events: [Zo, Is, W0, ct, rn, Hd]
    },
    fa = {
      findFiberByHostInstance: m3,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom"
    },
    KS = {
      bundleType: fa.bundleType,
      version: fa.version,
      rendererPackageName: fa.rendererPackageName,
      rendererConfig: fa.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: H.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(s) {
        return s = F2(s), s === null ? null : s.stateNode
      },
      findFiberByHostInstance: fa.findFiberByHostInstance || HS,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber) try {
      z2 = Pl.inject(KS), Bn = Pl
    } catch {}
  }
  return ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = GS, ir.createPortal = function(s, o) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e4(o)) throw Error(n(200));
    return WS(s, o, null, u)
  }, ir.createRoot = function(s, o) {
    if (!e4(s)) throw Error(n(299));
    var u = !1,
      f = "",
      g = Ep;
    return o != null && (o.unstable_strictMode === !0 && (u = !0), o.identifierPrefix !== void 0 && (f = o.identifierPrefix), o.onRecoverableError !== void 0 && (g = o.onRecoverableError)), o = Xd(s, 1, !1, null, null, u, !1, f, g), s[Q2] = o.current, Yo(s.nodeType === 8 ? s.parentNode : s), new Zd(o)
  }, ir.findDOMNode = function(s) {
    if (s == null) return null;
    if (s.nodeType === 1) return s;
    var o = s._reactInternals;
    if (o === void 0) throw typeof s.render == "function" ? Error(n(188)) : (s = Object.keys(s).join(","), Error(n(268, s)));
    return s = F2(o), s = s === null ? null : s.stateNode, s
  }, ir.flushSync = function(s) {
    return S3(s)
  }, ir.hydrate = function(s, o, u) {
    if (!Cl(o)) throw Error(n(200));
    return kl(null, s, o, !0, u)
  }, ir.hydrateRoot = function(s, o, u) {
    if (!e4(s)) throw Error(n(405));
    var f = u != null && u.hydratedSources || null,
      g = !1,
      b = "",
      I = Ep;
    if (u != null && (u.unstable_strictMode === !0 && (g = !0), u.identifierPrefix !== void 0 && (b = u.identifierPrefix), u.onRecoverableError !== void 0 && (I = u.onRecoverableError)), o = xp(o, null, s, 1, u ?? null, g, !1, b, I), s[Q2] = o.current, Yo(s), f)
      for (s = 0; s < f.length; s++) u = f[s], g = u._getVersion, g = g(u._source), o.mutableSourceEagerHydrationData == null ? o.mutableSourceEagerHydrationData = [u, g] : o.mutableSourceEagerHydrationData.push(u, g);
    return new Tl(o)
  }, ir.render = function(s, o, u) {
    if (!Cl(o)) throw Error(n(200));
    return kl(null, s, o, !1, u)
  }, ir.unmountComponentAtNode = function(s) {
    if (!Cl(s)) throw Error(n(40));
    return s._reactRootContainer ? (S3(function() {
      kl(null, null, s, !1, function() {
        s._reactRootContainer = null, s[Q2] = null
      })
    }), !0) : !1
  }, ir.unstable_batchedUpdates = Hd, ir.unstable_renderSubtreeIntoContainer = function(s, o, u, f) {
    if (!Cl(u)) throw Error(n(200));
    if (s == null || s._reactInternals === void 0) throw Error(n(38));
    return kl(s, o, u, !1, f)
  }, ir.version = "18.3.1-next-f1338f8080-20240426", ir
}
var Lp;

function Oy() {
  if (Lp) return r4.exports;
  Lp = 1;

  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
    } catch (e) {
      console.error(e)
    }
  }
  return t(), r4.exports = iE(), r4.exports
}
var Mp;

function sE() {
  if (Mp) return Al;
  Mp = 1;
  var t = Oy();
  return Al.createRoot = t.createRoot, Al.hydrateRoot = t.hydrateRoot, Al
}
var oE = sE();
const aE = Qu(oE);
Oy();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function za() {
  return za = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
  }, za.apply(this, arguments)
}
var Fi;
(function(t) {
  t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
})(Fi || (Fi = {}));
const Dp = "popstate";

function lE(t) {
  t === void 0 && (t = {});

  function e(r, i) {
    let {
      pathname: a,
      search: l,
      hash: c
    } = r.location;
    return th("", {
      pathname: a,
      search: l,
      hash: c
    }, i.state && i.state.usr || null, i.state && i.state.key || "default")
  }

  function n(r, i) {
    return typeof i == "string" ? i : uu(i)
  }
  return cE(e, n, null, t)
}

function Kt(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e)
}

function jy(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e)
    } catch {}
  }
}

function uE() {
  return Math.random().toString(36).substr(2, 8)
}

function Op(t, e) {
  return {
    usr: t.state,
    key: t.key,
    idx: e
  }
}

function th(t, e, n, r) {
  return n === void 0 && (n = null), za({
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: ""
  }, typeof e == "string" ? Co(e) : e, {
    state: n,
    key: e && e.key || r || uE()
  })
}

function uu(t) {
  let {
    pathname: e = "/",
    search: n = "",
    hash: r = ""
  } = t;
  return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e
}

function Co(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
    let r = t.indexOf("?");
    r >= 0 && (e.search = t.substr(r), t = t.substr(0, r)), t && (e.pathname = t)
  }
  return e
}

function cE(t, e, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: a = !1
  } = r, l = i.history, c = Fi.Pop, h = null, p = m();
  p == null && (p = 0, l.replaceState(za({}, l.state, {
    idx: p
  }), ""));

  function m() {
    return (l.state || {
      idx: null
    }).idx
  }

  function y() {
    c = Fi.Pop;
    let R = m(),
      W = R == null ? null : R - p;
    p = R, h && h({
      action: c,
      location: k.location,
      delta: W
    })
  }

  function v(R, W) {
    c = Fi.Push;
    let q = th(k.location, R, W);
    p = m() + 1;
    let U = Op(q, p),
      H = k.createHref(q);
    try {
      l.pushState(U, "", H)
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError") throw $;
      i.location.assign(H)
    }
    a && h && h({
      action: c,
      location: k.location,
      delta: 1
    })
  }

  function C(R, W) {
    c = Fi.Replace;
    let q = th(k.location, R, W);
    p = m();
    let U = Op(q, p),
      H = k.createHref(q);
    l.replaceState(U, "", H), a && h && h({
      action: c,
      location: k.location,
      delta: 0
    })
  }

  function P(R) {
    let W = i.location.origin !== "null" ? i.location.origin : i.location.href,
      q = typeof R == "string" ? R : uu(R);
    return q = q.replace(/ $/, "%20"), Kt(W, "No window.location.(origin|href) available to create URL for href: " + q), new URL(q, W)
  }
  let k = {
    get action() {
      return c
    },
    get location() {
      return t(i, l)
    },
    listen(R) {
      if (h) throw new Error("A history only accepts one active listener");
      return i.addEventListener(Dp, y), h = R, () => {
        i.removeEventListener(Dp, y), h = null
      }
    },
    createHref(R) {
      return e(i, R)
    },
    createURL: P,
    encodeLocation(R) {
      let W = P(R);
      return {
        pathname: W.pathname,
        search: W.search,
        hash: W.hash
      }
    },
    push: v,
    replace: C,
    go(R) {
      return l.go(R)
    }
  };
  return k
}
var jp;
(function(t) {
  t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
})(jp || (jp = {}));

function dE(t, e, n) {
  return n === void 0 && (n = "/"), hE(t, e, n)
}

function hE(t, e, n, r) {
  let i = typeof e == "string" ? Co(e) : e,
    a = l9(i.pathname || "/", n);
  if (a == null) return null;
  let l = Vy(t);
  fE(l);
  let c = null;
  for (let h = 0; c == null && h < l.length; ++h) {
    let p = TE(a);
    c = xE(l[h], p)
  }
  return c
}

function Vy(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (a, l, c) => {
    let h = {
      relativePath: c === void 0 ? a.path || "" : c,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: l,
      route: a
    };
    h.relativePath.startsWith("/") && (Kt(h.relativePath.startsWith(r), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), h.relativePath = h.relativePath.slice(r.length));
    let p = Wi([r, h.relativePath]),
      m = n.concat(h);
    a.children && a.children.length > 0 && (Kt(a.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + p + '".')), Vy(a.children, e, m, p)), !(a.path == null && !a.index) && e.push({
      path: p,
      score: bE(p, a.index),
      routesMeta: m
    })
  };
  return t.forEach((a, l) => {
    var c;
    if (a.path === "" || !((c = a.path) != null && c.includes("?"))) i(a, l);
    else
      for (let h of Fy(a.path)) i(a, l, h)
  }), e
}

function Fy(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e, i = n.endsWith("?"), a = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [a, ""] : [a];
  let l = Fy(r.join("/")),
    c = [];
  return c.push(...l.map(h => h === "" ? a : [a, h].join("/"))), i && c.push(...l), c.map(h => t.startsWith("/") && h === "" ? "/" : h)
}

function fE(t) {
  t.sort((e, n) => e.score !== n.score ? n.score - e.score : _E(e.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const pE = /^:[\w-]+$/,
  mE = 3,
  gE = 2,
  yE = 1,
  vE = 10,
  wE = -2,
  Vp = t => t === "*";

function bE(t, e) {
  let n = t.split("/"),
    r = n.length;
  return n.some(Vp) && (r += wE), e && (r += gE), n.filter(i => !Vp(i)).reduce((i, a) => i + (pE.test(a) ? mE : a === "" ? yE : vE), r)
}

function _E(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i]) ? t[t.length - 1] - e[e.length - 1] : 0
}

function xE(t, e, n) {
  let {
    routesMeta: r
  } = t, i = {}, a = "/", l = [];
  for (let c = 0; c < r.length; ++c) {
    let h = r[c],
      p = c === r.length - 1,
      m = a === "/" ? e : e.slice(a.length) || "/",
      y = SE({
        path: h.relativePath,
        caseSensitive: h.caseSensitive,
        end: p
      }, m),
      v = h.route;
    if (!y) return null;
    Object.assign(i, y.params), l.push({
      params: i,
      pathname: Wi([a, y.pathname]),
      pathnameBase: AE(Wi([a, y.pathnameBase])),
      route: v
    }), y.pathnameBase !== "/" && (a = Wi([a, y.pathnameBase]))
  }
  return l
}

function SE(t, e) {
  typeof t == "string" && (t = {
    path: t,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = EE(t.path, t.caseSensitive, t.end), i = e.match(n);
  if (!i) return null;
  let a = i[0],
    l = a.replace(/(.)\/+$/, "$1"),
    c = i.slice(1);
  return {
    params: r.reduce((p, m, y) => {
      let {
        paramName: v,
        isOptional: C
      } = m;
      if (v === "*") {
        let k = c[y] || "";
        l = a.slice(0, a.length - k.length).replace(/(.)\/+$/, "$1")
      }
      const P = c[y];
      return C && !P ? p[v] = void 0 : p[v] = (P || "").replace(/%2F/g, "/"), p
    }, {}),
    pathname: a,
    pathnameBase: l,
    pattern: t
  }
}

function EE(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !0), jy(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
  let r = [],
    i = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l, c, h) => (r.push({
      paramName: c,
      isOptional: h != null
    }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return t.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, e ? void 0 : "i"), r]
}

function TE(t) {
  try {
    return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
  } catch (e) {
    return jy(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t
  }
}

function l9(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/"
}

function CE(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof t == "string" ? Co(t) : t;
  return {
    pathname: n ? n.startsWith("/") ? n : kE(n, e) : e,
    search: IE(r),
    hash: RE(i)
  }
}

function kE(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return t.split("/").forEach(i => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
  }), n.length > 1 ? n.join("/") : "/"
}

function o4(t, e, n, r) {
  return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function PE(t) {
  return t.filter((e, n) => n === 0 || e.route.path && e.route.path.length > 0)
}

function By(t, e) {
  let n = PE(t);
  return e ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function $y(t, e, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof t == "string" ? i = Co(t) : (i = za({}, t), Kt(!i.pathname || !i.pathname.includes("?"), o4("?", "pathname", "search", i)), Kt(!i.pathname || !i.pathname.includes("#"), o4("#", "pathname", "hash", i)), Kt(!i.search || !i.search.includes("#"), o4("#", "search", "hash", i)));
  let a = t === "" || i.pathname === "",
    l = a ? "/" : i.pathname,
    c;
  if (l == null) c = n;
  else {
    let y = e.length - 1;
    if (!r && l.startsWith("..")) {
      let v = l.split("/");
      for (; v[0] === "..";) v.shift(), y -= 1;
      i.pathname = v.join("/")
    }
    c = y >= 0 ? e[y] : "/"
  }
  let h = CE(i, c),
    p = l && l !== "/" && l.endsWith("/"),
    m = (a || l === ".") && n.endsWith("/");
  return !h.pathname.endsWith("/") && (p || m) && (h.pathname += "/"), h
}
const Wi = t => t.join("/").replace(/\/\/+/g, "/"),
  AE = t => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  IE = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t,
  RE = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;

function NE(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t
}
const zy = ["post", "put", "patch", "delete"];
new Set(zy);
const LE = ["get", ...zy];
new Set(LE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ua() {
  return Ua = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
  }, Ua.apply(this, arguments)
}
const u9 = M.createContext(null),
  ME = M.createContext(null),
  ts = M.createContext(null),
  Xu = M.createContext(null),
  o3 = M.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
  }),
  Uy = M.createContext(null);

function DE(t, e) {
  let {
    relative: n
  } = e === void 0 ? {} : e;
  u0() || Kt(!1);
  let {
    basename: r,
    navigator: i
  } = M.useContext(ts), {
    hash: a,
    pathname: l,
    search: c
  } = Hy(t, {
    relative: n
  }), h = l;
  return r !== "/" && (h = l === "/" ? r : Wi([r, l])), i.createHref({
    pathname: h,
    search: c,
    hash: a
  })
}

function u0() {
  return M.useContext(Xu) != null
}

function Ju() {
  return u0() || Kt(!1), M.useContext(Xu).location
}

function Wy(t) {
  M.useContext(ts).static || M.useLayoutEffect(t)
}

function c9() {
  let {
    isDataRoute: t
  } = M.useContext(o3);
  return t ? QE() : OE()
}

function OE() {
  u0() || Kt(!1);
  let t = M.useContext(u9),
    {
      basename: e,
      future: n,
      navigator: r
    } = M.useContext(ts),
    {
      matches: i
    } = M.useContext(o3),
    {
      pathname: a
    } = Ju(),
    l = JSON.stringify(By(i, n.v7_relativeSplatPath)),
    c = M.useRef(!1);
  return Wy(() => {
    c.current = !0
  }), M.useCallback(function(p, m) {
    if (m === void 0 && (m = {}), !c.current) return;
    if (typeof p == "number") {
      r.go(p);
      return
    }
    let y = $y(p, JSON.parse(l), a, m.relative === "path");
    t == null && e !== "/" && (y.pathname = y.pathname === "/" ? e : Wi([e, y.pathname])), (m.replace ? r.replace : r.push)(y, m.state, m)
  }, [e, r, l, a, t])
}

function jE() {
  let {
    matches: t
  } = M.useContext(o3), e = t[t.length - 1];
  return e ? e.params : {}
}

function Hy(t, e) {
  let {
    relative: n
  } = e === void 0 ? {} : e, {
    future: r
  } = M.useContext(ts), {
    matches: i
  } = M.useContext(o3), {
    pathname: a
  } = Ju(), l = JSON.stringify(By(i, r.v7_relativeSplatPath));
  return M.useMemo(() => $y(t, JSON.parse(l), a, n === "path"), [t, l, a, n])
}

function VE(t, e) {
  return FE(t, e)
}

function FE(t, e, n, r) {
  u0() || Kt(!1);
  let {
    navigator: i
  } = M.useContext(ts), {
    matches: a
  } = M.useContext(o3), l = a[a.length - 1], c = l ? l.params : {};
  l && l.pathname;
  let h = l ? l.pathnameBase : "/";
  l && l.route;
  let p = Ju(),
    m;
  if (e) {
    var y;
    let R = typeof e == "string" ? Co(e) : e;
    h === "/" || (y = R.pathname) != null && y.startsWith(h) || Kt(!1), m = R
  } else m = p;
  let v = m.pathname || "/",
    C = v;
  if (h !== "/") {
    let R = h.replace(/^\//, "").split("/");
    C = "/" + v.replace(/^\//, "").split("/").slice(R.length).join("/")
  }
  let P = dE(t, {
      pathname: C
    }),
    k = WE(P && P.map(R => Object.assign({}, R, {
      params: Object.assign({}, c, R.params),
      pathname: Wi([h, i.encodeLocation ? i.encodeLocation(R.pathname).pathname : R.pathname]),
      pathnameBase: R.pathnameBase === "/" ? h : Wi([h, i.encodeLocation ? i.encodeLocation(R.pathnameBase).pathname : R.pathnameBase])
    })), a, n, r);
  return e && k ? M.createElement(Xu.Provider, {
    value: {
      location: Ua({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, m),
      navigationType: Fi.Pop
    }
  }, k) : k
}

function BE() {
  let t = KE(),
    e = NE(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = {
      padding: "0.5rem",
      backgroundColor: "rgba(200,200,200, 0.5)"
    };
  return M.createElement(M.Fragment, null, M.createElement("h2", null, "Unexpected Application Error!"), M.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, e), n ? M.createElement("pre", {
    style: i
  }, n) : null, null)
}
const $E = M.createElement(BE, null);
class zE extends M.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    }
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    }
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location || n.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : n.error,
      location: n.location,
      revalidation: e.revalidation || n.revalidation
    }
  }
  componentDidCatch(e, n) {
    console.error("React Router caught the following error during render", e, n)
  }
  render() {
    return this.state.error !== void 0 ? M.createElement(o3.Provider, {
      value: this.props.routeContext
    }, M.createElement(Uy.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children
  }
}

function UE(t) {
  let {
    routeContext: e,
    match: n,
    children: r
  } = t, i = M.useContext(u9);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), M.createElement(o3.Provider, {
    value: e
  }, r)
}

function WE(t, e, n, r) {
  var i;
  if (e === void 0 && (e = []), n === void 0 && (n = null), r === void 0 && (r = null), t == null) {
    var a;
    if (!n) return null;
    if (n.errors) t = n.matches;
    else if ((a = r) != null && a.v7_partialHydration && e.length === 0 && !n.initialized && n.matches.length > 0) t = n.matches;
    else return null
  }
  let l = t,
    c = (i = n) == null ? void 0 : i.errors;
  if (c != null) {
    let m = l.findIndex(y => y.route.id && (c == null ? void 0 : c[y.route.id]) !== void 0);
    m >= 0 || Kt(!1), l = l.slice(0, Math.min(l.length, m + 1))
  }
  let h = !1,
    p = -1;
  if (n && r && r.v7_partialHydration)
    for (let m = 0; m < l.length; m++) {
      let y = l[m];
      if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (p = m), y.route.id) {
        let {
          loaderData: v,
          errors: C
        } = n, P = y.route.loader && v[y.route.id] === void 0 && (!C || C[y.route.id] === void 0);
        if (y.route.lazy || P) {
          h = !0, p >= 0 ? l = l.slice(0, p + 1) : l = [l[0]];
          break
        }
      }
    }
  return l.reduceRight((m, y, v) => {
    let C, P = !1,
      k = null,
      R = null;
    n && (C = c && y.route.id ? c[y.route.id] : void 0, k = y.route.errorElement || $E, h && (p < 0 && v === 0 ? (YE("route-fallback"), P = !0, R = null) : p === v && (P = !0, R = y.route.hydrateFallbackElement || null)));
    let W = e.concat(l.slice(0, v + 1)),
      q = () => {
        let U;
        return C ? U = k : P ? U = R : y.route.Component ? U = M.createElement(y.route.Component, null) : y.route.element ? U = y.route.element : U = m, M.createElement(UE, {
          match: y,
          routeContext: {
            outlet: m,
            matches: W,
            isDataRoute: n != null
          },
          children: U
        })
      };
    return n && (y.route.ErrorBoundary || y.route.errorElement || v === 0) ? M.createElement(zE, {
      location: n.location,
      revalidation: n.revalidation,
      component: k,
      error: C,
      children: q(),
      routeContext: {
        outlet: null,
        matches: W,
        isDataRoute: !0
      }
    }) : q()
  }, null)
}
var qy = function(t) {
    return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t
  }(qy || {}),
  Gy = function(t) {
    return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t
  }(Gy || {});

function HE(t) {
  let e = M.useContext(u9);
  return e || Kt(!1), e
}

function qE(t) {
  let e = M.useContext(ME);
  return e || Kt(!1), e
}

function GE(t) {
  let e = M.useContext(o3);
  return e || Kt(!1), e
}

function Ky(t) {
  let e = GE(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || Kt(!1), n.route.id
}

function KE() {
  var t;
  let e = M.useContext(Uy),
    n = qE(),
    r = Ky();
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r]
}

function QE() {
  let {
    router: t
  } = HE(qy.UseNavigateStable), e = Ky(Gy.UseNavigateStable), n = M.useRef(!1);
  return Wy(() => {
    n.current = !0
  }), M.useCallback(function(i, a) {
    a === void 0 && (a = {}), n.current && (typeof i == "number" ? t.navigate(i) : t.navigate(i, Ua({
      fromRouteId: e
    }, a)))
  }, [t, e])
}
const Fp = {};

function YE(t, e, n) {
  Fp[t] || (Fp[t] = !0)
}

function XE(t, e) {
  t == null || t.v7_startTransition, t == null || t.v7_relativeSplatPath
}

function Gl(t) {
  Kt(!1)
}

function JE(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = Fi.Pop,
    navigator: a,
    static: l = !1,
    future: c
  } = t;
  u0() && Kt(!1);
  let h = e.replace(/^\/*/, "/"),
    p = M.useMemo(() => ({
      basename: h,
      navigator: a,
      static: l,
      future: Ua({
        v7_relativeSplatPath: !1
      }, c)
    }), [h, c, a, l]);
  typeof r == "string" && (r = Co(r));
  let {
    pathname: m = "/",
    search: y = "",
    hash: v = "",
    state: C = null,
    key: P = "default"
  } = r, k = M.useMemo(() => {
    let R = l9(m, h);
    return R == null ? null : {
      location: {
        pathname: R,
        search: y,
        hash: v,
        state: C,
        key: P
      },
      navigationType: i
    }
  }, [h, m, y, v, C, P, i]);
  return k == null ? null : M.createElement(ts.Provider, {
    value: p
  }, M.createElement(Xu.Provider, {
    children: n,
    value: k
  }))
}

function ZE(t) {
  let {
    children: e,
    location: n
  } = t;
  return VE(nh(e), n)
}
new Promise(() => {});

function nh(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return M.Children.forEach(t, (r, i) => {
    if (!M.isValidElement(r)) return;
    let a = [...e, i];
    if (r.type === M.Fragment) {
      n.push.apply(n, nh(r.props.children, a));
      return
    }
    r.type !== Gl && Kt(!1), !r.props.index || !r.props.children || Kt(!1);
    let l = {
      id: r.props.id || a.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (l.children = nh(r.props.children, a)), n.push(l)
  }), n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function rh() {
  return rh = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t