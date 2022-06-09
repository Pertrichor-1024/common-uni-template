class Loading {
  private loading: boolean;

  constructor() {
    this.loading = false;
  }

  /**
   * 显示 loading
   *
   * @param {ShowLoadingOptions} [param={}]
   * @memberof Loading
   */
  public show(param: Partial<UniApp.ShowLoadingOptions> = {}) {
    const defaultParam = { mask: true, title: '' };
    uni.showLoading({
      ...defaultParam,
      ...param,
      success: () => {
        this.loading = true;
      },
    });
  }

  /**
   * 隐藏 loading
   *
   * @memberof Loading
   */
  public hide() {
    if (this.loading) {
      uni.hideLoading();
    }
  }
}

export default new Loading();
