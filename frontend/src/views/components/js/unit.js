class Unit {
    /**
     * <b>해당 값에 단위를 붙여줍니다.</b>
     * <pre>
     * 기본 단위는 px입니다.
     * </pre>
     * @param {Number} data - 단위를 붙일 값을 넘겨받습니다.
     * @param {String} unit - 단위를 넘겨받습니다.
     * @return {Any} data - 값에 단위를 붙여서 넘겨줍니다.
     */
    makeUnit(data, unit = 'px') {
        return data + unit;
    }
}

export default new Unit();